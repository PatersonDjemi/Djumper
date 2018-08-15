export function persistState(state) {
    try {
        let serializedState = JSON.stringify(state);
        localStorage.setItem('persistState', serializedState);
        console.log('state was persisted')
    }
    catch (err) {
        console.log('error when trying to persist the sate', err);
    }    
}

export function loadPersistedState() {
    let persistedState = localStorage.getItem('persistState') || null;
    if (!persistedState) {
        return undefined;
    }
    return JSON.parse(persistedState);
}