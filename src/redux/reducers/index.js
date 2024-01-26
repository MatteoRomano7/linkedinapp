const initialState = {
  profile: {},
  jobs: {},
  posts: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return { ...state, profile: action.payload };
    case "SET_JOBS":
      return { ...state, jobs: action.payload };
    case "SET_POSTS":
      return { ...state, posts: [...state.posts, action.payload] };
    case "FETCH_POSTS":
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};

export default mainReducer;
