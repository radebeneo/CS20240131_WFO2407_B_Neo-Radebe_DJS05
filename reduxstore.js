// Define the initial state
const initialState = { count: 0 };

// Action types
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';

// Store constructor
function createStore(reducer) {
    let state = initialState;
    const listeners = [];

    // Get the current state
    function getState() {
        return state;
    }

    // Dispatch an action to update the state
    function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach(listener => listener()); // Notify subscribers
    }

    // Subscribe to state changes
    function subscribe(listener) {
        listeners.push(listener);
        return () => {
            const index = listeners.indexOf(listener);
            listeners.splice(index, 1); // Remove listener if unsubscribed
        };
    }

    return { getState, dispatch, subscribe };
}

// Reducer function to handle state changes
function tallyReducer(state = initialState, action) {
    switch (action.type) {
        case ADD:
            return { count: state.count + 1 };
        case SUBTRACT:
            return { count: state.count - 1 };
        case RESET:
            return { count: 0 };
        default:
            return state;
    }
}

// Instantiate the store with the tallyReducer
const store = createStore(tallyReducer);

// Subscribe to the store and log state changes
store.subscribe(() => console.log('New State:', store.getState()));

// Dispatch functions for test scenarios
function runTests() {
    // Scenario 1: Initial State Verification
    console.log('Initial State:', store.getState());

    // Scenario 2: Incrementing the Counter
    store.dispatch({ type: ADD });
    store.dispatch({ type: ADD });

    // Scenario 3: Decrementing the Counter
    store.dispatch({ type: SUBTRACT });

    // Scenario 4: Resetting the Counter
    store.dispatch({ type: RESET });
}

// Run the test scenarios
runTests();
