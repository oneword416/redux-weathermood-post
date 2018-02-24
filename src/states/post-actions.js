import {
    listPosts,
    createPost,
    createVote
} from 'api/post.js';

/**
 * serchText
 */

function searchText(searchText) {
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

        return listPosts(searchText).then(list => {
            dispatch(endListPosts(list));
            dispatch(searchText(''));
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

        return createPost(mood, text).then(() => {
            dispatch(endCreatePost());
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

        return createVote(id, mood).then(() => {
            dispatch(endCreateVote());
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

export function toggleInputDanger() {
    return {
        type: '@POST_FORM/TOGGLE_INPUT_DANGER',
    };
};

export function toggleMood() {
    return {
        type: '@POST_FORM/TOGGLE_MOOD',
    };
};

export function mood(mood) {
    return {
        type: '@POST_FORM/MOOD',
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

