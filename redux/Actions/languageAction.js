export const availableLanguages = ["ru", "cyr", "uz"];

export const switchLanguage = (payload) => {
  return {
    type: "SWITCH_LANGUAGE",
    payload,
  };
};
