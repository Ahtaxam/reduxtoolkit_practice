const createSlice = require('@reduxjs/toolkit').createSlice;
const cakeActions = require('../cake/cakeSlice').cakeActions;

const initialState = {
    noOfIceCream: 20,
};

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        buyIceCream: (state) => {
            state.noOfIceCream -= 1;
        },
        addIceCream: (state, action) => {
            state.noOfIceCream += action.payload;
        }
    },
    // whenEver someone buy a cake we will provide free ice cream
    // we can achieve this by using extraReducers

    // extraReducers: {
    //     ['cake/buyCake']: (state) => {
    //         state.noOfIceCream -= 1;
    //     }
    // }

    extraReducers: (builder) => {
        builder.addCase(cakeActions.buyCake, (state) => {
            state.noOfIceCream -= 1;
        });
    }

});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
