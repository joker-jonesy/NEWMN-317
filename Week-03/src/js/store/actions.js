// Actions are the public API components call (via store.dispatch) to request a state change.
// They don't touch state directly — they just forward to the matching mutation via commit().
export default{
    addItem(context, payload){
        context.commit("addItem", payload);
    },
    clearItem(context, payload){
        context.commit("clearItem", payload);
    },
}
