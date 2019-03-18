import {observable, action} from 'mobx';

import instance from "../agents.js"

class AndroidStore {
    @observable inProgress = false;
    @observable errors = undefined;

    @observable values = [];

    @action getAndroid() {
        this.inProgress = true;
        this.errors = undefined;
        this.values = [];

        instance.get('/Android/10/1')
            .then(action((response) => {
                // handle success
                console.log(response);
                this.values = response.data.results || []
            }))
            .catch(action((err) => {
                this.errors = err.response && err.response.body && err.response.body.errors;
                throw err;
            })).finally(action(() => {
            this.inProgress = false
        }));
    }
}

export default new AndroidStore();
