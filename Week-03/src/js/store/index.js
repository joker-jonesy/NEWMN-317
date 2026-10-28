import actions from "./actions.js";
import mutations from "./mutations.js";
import state from "./state.js";
import Store from "./store.js";
import {persistStore} from "./persist.js";

// Assembles and exports the single shared Store instance used throughout the app,
// wiring together the actions, mutations, and initial state defined in this folder.
const store = new Store({
    actions,mutations,state
});

persistStore(store);

export default store;

