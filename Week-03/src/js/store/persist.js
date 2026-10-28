export const STORAGE_KEY = 'newm317:week05:items';

export function persistStore(store) {
    store.events.subscribe("stateChange",(state) => {
        try{
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
        } catch (e){
            console.warn("Could not persist with state", e)
        }
    })
}

export function loadPersistedData(){
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) :null;
    } catch (e){
        return null;
    }
}

export function clearPersistedData(){
    localStorage.removeItem(STORAGE_KEY);
}