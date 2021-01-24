export const requiredField = (value) => {
  if (value) {
    return undefined;
  } else {
    return "field is requred";
  }
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength) {
    return `Max length is ${maxLength} symbols`;
  } else {
    return undefined;
  }
};
