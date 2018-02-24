const initSearchTextState = null;

export function searchText(state = initSearchTextState, action) {
    switch (action.type) {
        case '@SEARCH/SERCH_TEXT':
            return action.searchText;
        default:
            return state;
    }
}

const initPostsState = {
    list: [],
    postLoading: false
};

export function posts(state = initPostsState, action) {
    switch (action.type) {
        case '@POSTS/START_LIST_POSTS':
            return {
                ...state,
                postLoading: true
            };
        case '@POSTS/END_LIST_POSTS':
            return {
                ...state,
                list: action.list,
                postLoading: false
            };
        case '@POSTS/RESET_LIST_POSTS':
            return initPostsState;
        case '@POST/START_CREATE_POST':
        case '@POST/END_CREATE_POST':
        case '@VOTE/START_CREATE_VOTE':
        case '@VOTE/END_CREATE_VOTE':          
        default:
            return state;
    }
}

const initPostsFormState = {
    inputValue: null,
    inputDanger: false,
    moodToggle: false,
    mood: 'na'
};

export function postForm(state = initPostsFormState, action) {
    switch (action.type) {
        case '@POST_FORM/INPUT':
            return {
                ...state,
                inputValue: action.value
            };
        case '@POST_FORM/TOGGLE_INPUT_DANGER':
            return {
                ...state,
                inputDanger: !state.inputDanger
            };
        case '@POST_FORM/TOGGLE_MOOD':
            return {
                ...state,
                moodToggle: !state.moodToggle
            };
        case '@POST_FORM/MOOD':
            return {
                ...state,
                mood: action.mood
            };
    }
}

const initVoteFormState = {
    tooltipOpen: false
}

export function tooltipOpen(state = initVoteFormState, action) {
    switch (action.type) {
        case '@VOTE_FORM/TOGGLE_TOOLTIP_OPEN':
            return {
                ...state,
                tooltipOpen: !state.tooltipOpen
            }
        case '@VOTE_FORM/TOOLTIP_OPEN':
            return {
                ...state,
                tooltipOpen: action.tooltipOpen
            }
    }
}