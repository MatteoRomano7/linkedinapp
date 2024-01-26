export const setProfile = "SET_PROFILE";
export const setJobs = "SET_JOBS";
export const Login = 'LOGIN';;

export const fetchProfile = () => {
  return (dispatch, getState) => {
    const { token } = getState(); 
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: setProfile, payload: data }));
  };
};

export const fetchJobs = (query, category) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://strive-benchmark.herokuapp.com/api/jobs?${category}=${query}&limit=10`
    );
    const data = await res.json();
    console.log(data);

    dispatch({ type: setJobs, payload: data.data });
  };
};



export const loginAction = (userData) => {
  return {
    type: Login,
    payload: userData,
  };
};