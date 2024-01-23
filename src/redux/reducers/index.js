const initialState = {
  profile: {},
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return {...state, profile: action.payload };
    default:
      return state;
  }
};

export default mainReducer;
