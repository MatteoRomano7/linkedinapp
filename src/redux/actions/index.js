export const setProfile = "SET_PROFILE";

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

// export const fetchProfile = () => {
//     return async (dispatch) => {

//         try {
//           const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
//             method: "GET",
//             headers: {
//               Authorization:
//                 "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlODY4OWJkNWQxMjAwMTg5MGQzMTciLCJpYXQiOjE3MDU5MzY1MjIsImV4cCI6MTcwNzE0NjEyMn0.fmE6SUvSTdESNcTaxOhKxVPs2YKwDAdE7bIXyveOMkk",
//             },
//           });
//           if (response.ok) {
//             const  data = await response.json();
//             console.log(response)
//             console.log(data)
//             dispatch({ type: setProfile, payload: data });

//           } else {
//             alert("Error fetching results");
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       };

// }
