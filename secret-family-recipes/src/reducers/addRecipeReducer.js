const ADDING_RECIPE = "ADDING_RECIPE";
const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
const ADD_RECIPE_ERROR = "ADD_RECIPE_ERROR";

const initialState = {
    inProgress: false,
    recipeToAdd: '',
    errors: {},
    response: {},
};

function addRecipeReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case ADDING_RECIPE:
            return {...state, inProgress: true};
        case ADD_RECIPE_SUCCESS:
            return {...state, inProgress: false, response: payload};
        case ADD_RECIPE_ERROR:
            return {...state, inProgress: false, errors: payload};
        default:
            return state;
    };
};

export default addRecipeReducer;