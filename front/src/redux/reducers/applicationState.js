export const ACTION_COLLAPSED_NAVBAR = "COLLAPSED_NAV_BAR";

const initialApplicationState = {
    collapsedNavBar: false
};

const applicationState = (state = initialApplicationState, action) => {
    switch (action.type) {
        case ACTION_COLLAPSED_NAVBAR:
            return {
                ...state,
                collapsedNavBar: action.collapsedNavBar
            };
        default:
            return state;
    }
};

export default applicationState;