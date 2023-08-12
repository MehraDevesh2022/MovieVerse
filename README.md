# MovieVerse - Your Ultimate Movie App

## Introduction

MovieVerse is a comprehensive MERN (MongoDB, Express, React, Node.js) application that offers an immersive movie experience similar to IMDb. With features such as detailed movie information, cast details, trailers, user accounts, reviews, and more, Movie-verse brings the world of movies to your fingertips.

## Technologies

### Front-end

- [Create React App](https://create-react-app.dev/): Building user interfaces with React.
- [Material UI](https://mui.com/): A popular React UI framework for creating visually appealing interfaces.
- [SwiperJS](https://swiperjs.com/): A swiper/slider component for images and other content.
- [React Router v6](https://reactrouter.com/): For handling navigation within the app.
- [Formik](https://formik.org/): For building and validating forms in React.
- [Yup](https://github.com/jquense/yup): A schema validation library for form validation.
- [Axios](https://axios-http.com/): For making HTTP requests to APIs.

### Back-end

- [Express](https://expressjs.com/): A fast and minimalist web application framework for Node.js.
- [Express Validator](https://express-validator.github.io/): Middleware for express that provides validation and sanitation of incoming data.
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): For handling user authentication and authorization.
- [Mongoose](https://mongoosejs.com/): An elegant MongoDB object modeling for Node.js.
- [Axios](https://axios-http.com/): For making HTTP requests from the server.

## Features

- Sign up and Sign in functionality for user accounts.
- Save movies to the Favorite list (with the ability to remove items).
- Write and manage reviews for movies (including the ability to delete reviews).
- Search functionality for movies, TV series, and people.
- Light and Dark theme for personalized user experience.

## Usage

1. Clone or download this repository to your local machine.
 
 ```bash
    git clone
    ```

2. Navigate to the project directory:
    
    ```bash
        cd movie-verse
 3. Install dependencies for the server:
    
    ```bash
    cd server
        npm install
    ```


4. Create a `.env` file in the server directory and add the following environment variables:

    ```bash
    MONGODB_URL= # Your MongoDB connection string
    PORT=5000
    TOKEN_SECRET_KEY= # Your secret key for JWT it can be any string
    TMDB_BASE_URL=https://api.themoviedb.org/3/
    TMDB_KEY= # Your TMDB API key
    ```
    ### Rescources for getting API keys:
    - [TMDB](https://www.themoviedb.org/documentation/api)
    - [MongoDB](https://docs.mongodb.com/guides/server/drivers/)
   

5. Install dependencies for the client:
    
    ```bash
    cd client
   npm install
    ```

 