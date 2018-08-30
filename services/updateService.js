const fetch = require('node-fetch');
const { BehaviorSubject, Subject } = require('rxjs');
const Update = require('../models/Update');

const config = require('../config');

const updateServiceFactory = function () {

    let updateService = null;

    const url = config.telegramApi.url+'bot'+config.telegramApi.token;
    const polling_timeout = 30;
    const polling_limit = 100;

    const UpdateService = function () {

        if (updateService !== null) {
            return updateService;
        }

        updateService = this;

        this.updates = [];
        const sourceUpdates = new BehaviorSubject(this.updates);
        const sourceNewUpdates = new Subject();

        this.updates$ = sourceUpdates.asObservable();
        this.newUpdates$ = sourceNewUpdates.asObservable();

        const buildResourceUrl = function (resource, params = null) {
            if (params === null) {
                return url + '/' + resource;
            }

            const paramsObj = new URLSearchParams(params);
            return url + '/' + resource + '?' + paramsObj.toString();
        };

        const headers = {
            'Content-Type': 'application/json',
        };

        this.lastUpdate = 0;
        this.firstCall = true;

        const completeUrl = () => buildResourceUrl('getUpdates', {
            offset: this.firstCall || this.lastUpdate <= 0 ? null : this.lastUpdate + 1,
            limit: polling_limit,
            timeout: this.firstCall ? 0 : polling_timeout,
        });

        const polling = function (process_data) {

            const url = completeUrl();

            fetch(url, {headers})
                .then(response => response.json())
                .then(data => {
                    updateService.firstCall = false;
                    return data;
                })
                .then(data => {

                    const keep = process_data(data);

                    if (keep) {
                        polling(process_data);
                    }
                });
        };

        //
        //

        const parseUpdates = updatesData => updatesData.map(updateData => new Update(updateData));

        const process_data = data => {

            if (data.ok) {
                const newUpdates = parseUpdates(data.result);

                newUpdates.forEach(update => {

                    this.updates.push(update);
                    sourceNewUpdates.next(update);

                    if (update.update_id > updateService.lastUpdate) {
                        updateService.lastUpdate = update.update_id;
                    }
                });

                sourceUpdates.next(this.updates);

                return true;
            } else {
                console.error('Error in response');
                console.error(data);
            }

          return true;
        };


        //
        //

        polling(process_data);

    };

    return UpdateService;

};

module.exports = updateServiceFactory();