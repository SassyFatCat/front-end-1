const DELETING_RECIPE = "DELETING_RECIPE";
const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";
const DELETE_RECIPE_ERROR = "DELETE_RECIPE_ERROR";

const initialState = {
    inProgress: false,
    recipeToDelete: {},
    response: {},
    errors: {}
};

function editRecipeReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case EDITING_RECIPE:
            return {...state, inProgress: true};
        case EDIT_RECIPE_SUCCESS:
            return {...state, inProgress: false, recipeToDelete: {}, response: payload};
        case EDIT_RECIPE_ERROR:
            return {...state, inProgress: false, errors: payload};
        default:
            return state;
    };
};

export default editRecipeReducer;