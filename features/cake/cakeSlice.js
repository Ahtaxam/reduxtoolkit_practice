const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    noOfCake: 10,
};

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        buyCake: (state) => {
            state.noOfCake -= 1;
        },
        addCake: (state, action) => {
            state.noOfCake += action.payload;
        }
    },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;

