import user_types from "./types/user";

const initial_state = {
  id: 0,
  username: "",
  email: "",
  full_name: "",
  role: ""
}

const userReducer = (state = initial_state, action) => {
  if (action.type === user_types.LOGIN_USER) {
    return {
      ...state,
      username: action.payload.username,
      email: action.payload.email,
      full_name: action.payload.full_name,
      role: action.payload.role,
      id: action.payload.id
    }
  } else if (action.type === user_types.LOGOUT_USER) {
    return initial_state
  }

  return state
}

export default userReducer;