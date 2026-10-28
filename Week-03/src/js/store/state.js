// The app's initial/default state: the list of items shown on page load.

import {loadPersistedData} from "./persist.js";

export default {
    // either default array, or a function
    items: loadPersistedData()||[
        "I made this thing",
        "And another"
    ]
}
