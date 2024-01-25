const initialState = {
  profile: {},
  jobs: {},
  user: null, 
  token: null, 
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return { ...state, profile: action.payload };
    case "SET_JOBS":
      return { ...state, jobs: action.payload };
    case "LOGIN":
      return {
        ...state,
        user: action.payload.userId,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default mainReducer;
