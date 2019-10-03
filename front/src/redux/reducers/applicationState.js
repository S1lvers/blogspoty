export const ACTION_COLLAPSED_NAVBAR = "COLLAPSED_NAV_BAR";
export const ACTION_CHANGE_TOP_NAV_BAR = "CHANGE_TOP_NAV_BAR";

const initialApplicationState = {
    collapsedNavBar: false,
    searchNavBar: false
};

const applicationState = (state = initialApplicationState, action) => {
    switch (action.type) {
        case ACTION_COLLAPSED_NAVBAR:
            return {
                ...state,
                collapsedNavBar: action.collapsedNavBar
            };
        case ACTION_CHANGE_TOP_NAV_BAR:
            return {
                ...state,
                searchNavBar: action.searchNavBar
            };
        default:
            return state;
    }
};

export default applicationState;