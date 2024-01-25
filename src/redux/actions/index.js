export const setProfile = "SET_PROFILE";
export const setJobs = "SET_JOBS";

export const fetchProfile = () => {
  return (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlODY4OWJkNWQxMjAwMTg5MGQzMTciLCJpYXQiOjE3MDU5MzY1MjIsImV4cCI6MTcwNzE0NjEyMn0.fmE6SUvSTdESNcTaxOhKxVPs2YKwDAdE7bIXyveOMkk",
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

