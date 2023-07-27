const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const iceCreamActions = require('./features/iceCream/iceCreamSlice').iceCreamActions;
const fetchUsers = require('./features/user/userSlice').fetchUsers;

console.log("Initial state: ", store.getState());

const unsubscribe = store.subscribe(() => {console.log("Updated State: ", store.getState());});

// store.dispatch(cakeActions.buyCake());
// store.dispatch(cakeActions.addCake(1));

// store.dispatch(iceCreamActions.buyIceCream());
// store.dispatch(iceCreamActions.addIceCream(1));



// unsubscribe();

store.dispatch(fetchUsers());