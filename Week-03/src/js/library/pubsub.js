// Simple publish/subscribe implementation used by the Store to notify
// components when state changes, without the store needing to know about them directly.
export default class PubSub {
    constructor() {
        // Maps event names to arrays of callback functions listening for that event.
        this.events = {}
    }

    // Register a callback to run whenever `event` is published.
    subscribe(event, callback) {
        let self = this;

        // Create the list for this event the first time someone subscribes to it.
        if (!self.events.hasOwnProperty(event)) {
            self.events[event] = [];
        }

        return self.events[event].push(callback);
    }

    // Trigger `event`, calling every subscribed callback with the given data.
    publish(event, data={}){
        let self = this;

        // No one is listening for this event; nothing to do.
        if(!self.events.hasOwnProperty(event)){
            return [];
        }

        // Call every subscriber for this event, passing along the data.
        return self.events[event].map(callback => callback(data))

    }

}

// const pubsub = new PubSub();
// pubsub.subscribe("Tea Party","");
// pubsub.subscribe("Tea Party","");
// console.log(pubsub.events);
