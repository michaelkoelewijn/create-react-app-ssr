export function increment() {
    return {
        type: 'INCREMENT',
    }
}

export function fetchInitialData() {
    return {
        type: 'FETCH_INITIAL_DATA',
        payload: ['Test 1', 'Test 2']
    }
}