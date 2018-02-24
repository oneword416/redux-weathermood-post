import {
    listPosts as listPostsFromApi,
    createPost as createPostFromApi,
    createVote as createVoteFromApi,
} from 'api/posts.js';

/**
 * serchText
 */

export function searchText(searchText) {
    return {
        type: '@SEARCH/SERCH_TEXT',
        searchText: searchText
    };
}

/**
 * posts
 */

function startListPosts(searchText) {
    return {
        type: '@POSTS/START_LIST_POSTS',
        searchText: searchText
    };
}

function endListPosts(list) {
    return {
       type: '@POSTS/END_LIST_POSTS',
       list: list
    };
};

function resetListPosts() {
    return {
        type: '@POSTS/RESET_LIST_POSTS',
    };
};

export function listPosts(searchText) {
    return (dispatch, getState) => {
        dispatch(startListPosts(searchText));

        return listPostsFromApi(searchText).then(list => {
            dispatch(endListPosts(list));
        }).catch(err => {
            console.error('Error listing posts', err);

            dispatch(resetListPosts());
        });
    };
}

/**
 * POST
 */

function startCreatePost(mood, text) {
    return {
        type: '@POST/START_CREATE_POST',
        mood: mood,
        text: text
    };
};

function endCreatePost() {
    return {
        type: '@POST/END_CREATE_POST',
    };
};

export function createPost(mood, text) {
    return (dispatch, getState) => {
        dispatch(startCreatePost(mood, text));
        return createPostFromApi(mood, text).then(() => {
            dispatch(endCreatePost());
            dispatch(listPosts(getState().searchText));
        }).catch(err => {
            console.error('Error creating post', err);
        });  
    };
}

/**
 * VOTE
 */

function startCreateVote(id, mood) {
    return {
        type: '@VOTE/START_CREATE_VOTE',
        id: id,
        mood: mood
    };
};

function endCreateVote() {
    return {
        type: '@VOTE/END_CREATE_VOTE',
    };
};

export function createVote(id, mood) {
    return (dispatch, getState) => {
        dispatch(startCreateVote(id, mood));
        return createVoteFromApi(id, mood).then(() => {
            dispatch(endCreateVote());
            dispatch(listPosts(getState().searchText));
        }).catch(err => {
            console.error('Error creating Vote', err);
        });  
    };
}

/**
 * PostForm
 */

export function input(value) {
    return {
        type: '@POST_FORM/INPUT',
        value: value
    };
};

export function setToggleInputDanger(value) {
    return {
        type: '@POST_FORM/SET_TOGGLE_INPUT_DANGER',
        value: value
    };
};

export function toggleMood() {
    return {
        type: '@POST_FORM/TOGGLE_MOOD',
    };
};

export function setToggleMood(value) {
    return {
        type: '@POST_FORM/SET_TOGGLE_MOOD',
        value: value
    };
};

export function setMood(mood) {
    return {
        type: '@POST_FORM/SET_MOOD',
        mood: mood
    };
}

/**
 * VoteForm
 */

export function toogleTooltipOpen() {
    return {
        type: '@VOTE_FORM/TOGGLE_TOOLTIP_OPEN',
    };
}

export function tooltipOpen(value) {
    return {
        type: '@VOTE_FORM/TOOLTIP_OPEN',
        value: value
    };
 }

