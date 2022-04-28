const initialState = {
  language: "cyr",
};
export const languageReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SWITCH_LANGUAGE":
      return { ...state, language: payload };
    default:
      return state;
  }
};
