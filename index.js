const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const immer = require("immer").produce;

const BUY_CAKE = "BUY_CAKE";
const ADD_CAKE = "ADD_CAKE";
const CHANGE_ADDRESS = "CHANGE_ADDRESS";

// Action creator
function buyCake() {
    return {
        type: BUY_CAKE,
        quantity: 1
    };
}


const AddCake = (noOfCake=1) => {
    return {
        type: ADD_CAKE,
        quantity: noOfCake
    }
}


const changeAddress = (newAddress) => {
    return {
        type: CHANGE_ADDRESS,
        payload: newAddress
    }
}



// Reducer

const initialState = {
    numOfCakes: 10
};


const addressState = {
    name: "John",
    address:{
        street: "123 Main St",
        city: "Boston",
        state: "MA"

    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.quantity
            };

        case ADD_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.quantity
            };
        default:
            return state;
    }
}


const addressReducer = (state = addressState, action) => {
    switch (action.type) {
        case CHANGE_ADDRESS:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // }

            return immer(state, draft => {
                draft.address.street = action.payload;
            })
        default:
            return state;
    }
}



// const store = createStore(reducer);
// const action = bindActionCreators({buyCake, AddCake}, store.dispatch);
// console.log("Initial state: ", store.getState());


const store = createStore(addressReducer);
console.log("Initial state: ", store.getState());

const unsubscribe = store.subscribe(() => 
    console.log("Updated state: ", store.getState()));

// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());

// store.dispatch(AddCake(3));

// action.buyCake()
// action.buyCake()
// action.buyCake()

// action.AddCake(2)



store.dispatch(changeAddress("456 Main St"));


unsubscribe();