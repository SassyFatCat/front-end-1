const EDITING_RECIPE = "EDITING_RECIPE";
const EDIT_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS";
const EDIT_RECIPE_ERROR = "EDIT_RECIPE_ERROR";

const initialState = {
    inProgress: false,
    recipeToEdit: {},
    editedRecipe: {},
    errors: {},
    response: {},
    toggle: false

};


function editRecipeReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case EDITING_RECIPE:
            return {...state, inProgress: true};
        case EDIT_RECIPE_SUCCESS:
            return {...state, inProgress: false, recipeToEdit: {}, editedRecipe: {}, response: payload, toggle: !state.toggle};
        case EDIT_RECIPE_ERROR:
            return {...state, inProgress: false, errors: payload, toggle: !state.toggle};
        default:
            return state;
    };
};

export default editRecipeReducer;