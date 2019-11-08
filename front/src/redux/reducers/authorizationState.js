export const ACTION_UPDATE_CONFIRMATION_EMAIL = "UPDATE_CONFIRMATION_EMAIL";

const initialAuthorizationState = {
    confirmationEmail: undefined,
};

const authorizationState = (state = initialAuthorizationState, action) => {
    console.log("CHANGING REDUX STATE WITH ACTION", action)
    switch (action.type) {
        case ACTION_UPDATE_CONFIRMATION_EMAIL:
            return {
                ...state,
                confirmationEmail: action.confirmationEmail
            };
        default:
            return state;
    }
};

export default authorizationState;