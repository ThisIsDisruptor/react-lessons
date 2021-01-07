const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_TEXT_UPDATE = 'NEW-MESSAGE-TEXT-UPDATE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case NEW_MESSAGE_TEXT_UPDATE:
            state.newMessageText = action.newMessageText;
            return state;

        default:
            return state;
    }

}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    };
};

export const updateNewMessageTextActionCreator = newMessageText => {
    return {
        type: NEW_MESSAGE_TEXT_UPDATE,
        newMessageText: newMessageText,
    };
};

export default dialogsReducer;