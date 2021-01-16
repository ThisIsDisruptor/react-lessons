const ADD_MESSAGE = "ADD-MESSAGE";
const NEW_MESSAGE_TEXT_UPDATE = "NEW-MESSAGE-TEXT-UPDATE";

let dialogs = [
  { id: 1, name: "Dimas" },
  { id: 2, name: "Dryus" },
  { id: 3, name: "Zaxar" },
  { id: 4, name: "Pus" },
];
let messages = [
  { id: 1, message: "hello" },
  { id: 2, message: "How are you" },
  { id: 3, message: "Yo!" },
];

let initialState = {
  dialogs,
  messages,
  newMessageText: "hello!",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessageText = state.newMessageText;
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: newMessageText }],
        newMessageText: "",
      };
    }
    case NEW_MESSAGE_TEXT_UPDATE: {
      return {
        ...state,
        newMessageText: action.newMessageText,
      };
    }
    default:
      return state;
  }
};

export const addMessage = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageText = (newMessageText) => {
  return {
    type: NEW_MESSAGE_TEXT_UPDATE,
    newMessageText: newMessageText,
  };
};

export default dialogsReducer;
