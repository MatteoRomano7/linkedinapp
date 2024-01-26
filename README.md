# LinkedIn もどき

# Getting Started

First of all, login on the app using the provided default profile, or alternatively, if you're registered on the [strive-school API](https://strive.school/linkedin-registration), you can use the bearer token to use our services.
This application needs to be ran in Visual Studio Code by writing "npm start" in the terminal after cloning the repository. This will automatically assign a port and run the application in localhost.

# Technology

This project was created using the React library, create-react-app blueprint, [React-redux](https://react-redux.js.org/), [React-router-dom](https://reactrouter.com/en/main), and [React-bootstrap](https://react-bootstrap.netlify.app/) libraries.

# Functionality

Unfortunately, not all the official LinkedIn functionality is reproduced in this project, but the user is able to modify their profile, create posts, write comments, search for jobs by keyword or company, and upload images, all using the strive-school APIs. As the APIs used are free and have a limited number of calls-per-minute, and this project does not include caching, we encourage the users to not attempt to repeatedly make API calls, for example by continuously refreshing the home page.

# Project structure & philosophy

The core idea behind this project's structure is the single page application format with react-router, involving usage of heavy code splitting, with separate folders including the React component and its own css file for styling. This was extremely helpful during development to avoid conflicts and maximize efficiency of code writing.
The styling was mostly done using the react-bootstrap library, with touches of manual CSS for layouts and various components that were more convenient to style in that manner.
React-redux was used to allow the user to freely navigate the application while maintaining information about the user in its store.

# Credits

This project was a creation of love by Matteo Romano, Fabrizio d'Alessandro, Gabriele Delfrate Alvazzi, Gianluigi Aloe, Marco Guerrieri, and Andrea Buzzanca and made in about five days. We would also like to thank all the teachers and staff at [EPICODE](https://epicode.com/) for giving us the opportunity to become web developers.
