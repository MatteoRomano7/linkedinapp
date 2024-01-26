const initialState = {
  profile: {},
  jobs: {},   
  token: localStorage.getItem('token') || null, 
  user:  localStorage.getItem('userId') || null, 
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return { ...state, profile: action.payload };
    case "SET_JOBS":
      return { ...state, jobs: action.payload };
    case "LOGIN":
      localStorage.setItem('userId', action.payload.userId);
      localStorage.setItem('token', action.payload.token);      
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
