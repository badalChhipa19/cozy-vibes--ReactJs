import USER_ACTION_TYPES from "./user.type";

export const setCurrentUser = (value) => {
  return { type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: value };
};
