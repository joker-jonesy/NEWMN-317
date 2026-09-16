export default {
    addItem(state, payload){
        state.items.push(payload);

        return state;
    },
    clearItem(state, payload){
        console.log(payload.index);
        state.items.splice(payload.index, 1);
        return state;
    }
}