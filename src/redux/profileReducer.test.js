import profileReducer, { addPost, deletePost } from "./profileReducer";

//1. testdata
let posts = [
  { id: 1, message: "hello!", likesCount: 10 },
  { id: 2, message: "It's my first post!", likesCount: 15 },
];

let initialState = {
  posts,
};
let action = addPost("drSoftware");

let deleteAction = deletePost(1);

test("length of posts should be incremented", () => {
  //2. action
  let newState = profileReducer(initialState, action);

  //3. expectation
  expect(newState.posts.length).toBe(3);
});

test("message in state should be the same as in action", () => {
  //2. action
  let newState = profileReducer(initialState, action);

  //3. expectation
  expect(newState.posts[2].message).toBe("drSoftware");
});

test("likesCount should be equal zero", () => {
  //2. action
  let newState = profileReducer(initialState, action);

  //3. expectation
  expect(newState.posts[2].likesCount).toBe(0);
});

test("length after deleting should be decremented", () => {
  //2. action
  let newState = profileReducer(initialState, deleteAction);

  //3. expectation
  expect(newState.posts.length).toBe(1);
});

test(`length after deleting should not be decremented if id is incorrect`, () => {
  let deleteAction = deletePost(1000);

  //2. action
  let newState = profileReducer(initialState, deleteAction);

  //3. expectation
  expect(newState.posts.length).toBe(2);
});
