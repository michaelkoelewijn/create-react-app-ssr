const initialState = {
    count: 0,
    items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
        return {
            ...state,
            count: state.count + 1
        }

    case 'FETCH_INITIAL_DATA': {
        return {
            ...state,
            items: action.payload
        }
    }

    default:
      return state
  }
}