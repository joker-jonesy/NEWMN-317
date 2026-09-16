import PubSub from "../library/pubsub.js";

// A small custom state-management store, similar in spirit to Vuex/Redux:
// components dispatch actions, actions commit mutations, and mutations are the
// only code allowed to change state. Any state change publishes an event so
// subscribed components know to re-render.
export default class Store {
    constructor(params) {
        let self = this;
        self.actions ={};
        self.mutations ={};
        self.state={}
        self.status = 'resting'; // tracks what the store is currently doing: resting/action/mutation
        self.events = new PubSub(); // used to notify components of state changes

        // Attach the actions/mutations passed in when the store is created (see store/index.js).
        if(params.hasOwnProperty("actions")) {
            self.actions=params.actions
        }

        if(params.hasOwnProperty("mutations")) {
            self.mutations=params.mutations
        }

        // Wrap state in a Proxy so that any property assignment on state automatically
        // notifies subscribers, instead of requiring components to manually check for changes.
        self.state = new Proxy((params.state || {}),{

            set: function(state, key, value){

                state[key]=value;

                // Let every subscribed component know the state changed so they can re-render.
                self.events.publish('stateChange',self.state);

                // Warn in the console if state was changed outside of a proper mutation.
                if(self.status !== 'mutation'){
                    console.log("mutated")
                }

                self.status = 'resting'

                return true

            }

        })



    }

    // Called by components to trigger a named action (e.g. store.dispatch("addItem", value)).
    dispatch(actionKey, payload){

        let self = this;

        // Ignore dispatches for actions that don't exist.
        if(typeof self.actions[actionKey] !== "function"){
            return false
        }

        self.status = "action";

        self.actions[actionKey](self, payload);

        console.groupEnd();

        return true;

    }

    // Called by actions to apply a named mutation to state (e.g. context.commit("addItem", payload)).
    commit(mutationKey, payload){

        let self = this;

        // Ignore commits for mutations that don't exist.
        if(typeof self.mutations[mutationKey] !== "function"){
            return false
        }

        self.status = "mutation";

        // Run the mutation function, which returns the (mutated) state.
        let newState = self.mutations[mutationKey](self.state,payload);

        // Merge the returned state back onto the proxied state object, triggering the Proxy's set trap.
        self.state = Object.assign(self.state, newState);

        return true;

    }
}
