export default class PubSub {
    constructor() {
        this.events = {}
    }

    subscribe(event, callback) {
        let self = this;

        if (!self.events.hasOwnProperty(event)) {
            self.events[event] = [];
        }

        return self.events[event].push(callback);
    }

    publish(event, data={}){
        let self = this;

        if(!self.events.hasOwnProperty(event)){
            return [];
        }

        return self.events[event].map(callback => callback(data))

    }

}

// const pubsub = new PubSub();
// pubsub.subscribe("Tea Party","");
// pubsub.subscribe("Tea Party","");
// console.log(pubsub.events);