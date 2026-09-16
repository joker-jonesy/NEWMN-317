// Mutations are the only place that's allowed to actually change state.
// They're called by the store's commit() method, never directly by components.
export default {
    addItem(state, payload){
        // payload is the new item text; add it to the items array.
        state.items.push(payload);

        return state;
    },
    clearItem(state, payload){
        console.log(payload.index);
        // payload.index is the position of the item to remove.
        state.items.splice(payload.index, 1);
        return state;
    }
}
