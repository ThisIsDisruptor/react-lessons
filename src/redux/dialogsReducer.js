const ADD_MESSAGE = "ADD-MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessageText = action.newMessageText;
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: newMessageText }],
        newMessageText: "",
      };
    }
    default:
      return state;
  }
};

export const addMessage = (newMessageText) => {
  return {
    type: ADD_MESSAGE,
    newMessageText: newMessageText,
  };
};

export default dialogsReducer;
