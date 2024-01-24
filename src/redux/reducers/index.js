const initialState = {
  profile: {},
  jobs: {}
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return {...state, profile: action.payload };
    case "SET_JOBS":
      return {...state, jobs: action.payload}
    default:
      return state;
  }
};

export default mainReducer;
