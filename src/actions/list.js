
export function increment() {
    return {
        type: 'INCREMENT',
    }
}

export function fetchInitialData() { 
    return axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
        dispatch({
            type: "FETCH_INITIAL_DATA", 
            payload: ['Test 1', 'Test 2', 'Test 3', 'Test 4']
        })
    })
}


export function fetchInitialAboutData() {
    return {
        type: 'FETCH_INITIAL_ABOUT_DATA',
        payload: ['Test 3', 'Test 4']
    }
}