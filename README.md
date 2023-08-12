# MovieVerse - Your Ultimate Movie App

---

## Demo

  <video width="100%" controls>
   <source src="./demo/demo.mp4" type="video/mp4">
  </video>

## Introduction

---

MovieVerse is a comprehensive MERN (MongoDB, Express, React, Node.js) application that offers an immersive movie experience similar to IMDb. With features such as detailed movie information, cast details, trailers, user accounts, reviews, and more, Movie-verse brings the world of movies to your fingertips.

## Technologies

---

![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Material UI](https://img.shields.io/badge/-Material_UI-0081CB?style=flat-square&logo=material-ui&logoColor=white)
![SwiperJS](https://img.shields.io/badge/-SwiperJS-6332F6?style=flat-square&logo=swiper&logoColor=white)
![Formik](https://img.shields.io/badge/-Formik-61DAFB?style=flat-square&logo=formik&logoColor=white)
![Yup](https://img.shields.io/badge/-Yup-FF4081?style=flat-square&logo=yup&logoColor=white)
![Express Validator](https://img.shields.io/badge/-Express_Validator-00CECB?style=flat-square&logo=express&logoColor=white)
![Jsonwebtoken](https://img.shields.io/badge/-Jsonwebtoken-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-007ACC?style=flat-square&logo=axios&logoColor=white)

### Front-end

---

- [Create React App](https://create-react-app.dev/): Building user interfaces with React.
- [Material UI](https://mui.com/): A popular React UI framework for creating visually appealing interfaces.
- [SwiperJS](https://swiperjs.com/): A swiper/slider component for images and other content.
- [React Router v6](https://reactrouter.com/): For handling navigation within the app.
- [Formik](https://formik.org/): For building and validating forms in React.
- [Yup](https://github.com/jquense/yup): A schema validation library for form validation.
- [Axios](https://axios-http.com/): For making HTTP requests to APIs.

### Back-end

---

- [Express](https://expressjs.com/): A fast and minimalist web application framework for Node.js.
- [Express Validator](https://express-validator.github.io/): Middleware for express that provides validation and sanitation of incoming data.
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): For handling user authentication and authorization.
- [Mongoose](https://mongoosejs.com/): An elegant MongoDB object modeling for Node.js.
- [Axios](https://axios-http.com/): For making HTTP requests from the server.

## Features

---

- Sign up and Sign in functionality for user accounts.
- Save movies to the Favorite list (with the ability to remove items).
- Write and manage reviews for movies (including the ability to delete reviews).
- Search functionality for movies, TV series, and people.
- Light and Dark theme for personalized user experience.

## Usage

---

1. Clone or download this repository to your local machine.

   ```bash
     git clone
   ```

2. Navigate to the project directory:

---

````bash
   cd movie-verse
   ```
````

3. Install dependencies for the server:

---

```bash
cd server
    npm install
```

4. Create a `.env` file in the server directory and add the following environment variables:

---

```bash
 MONGODB_URL= # Your MongoDB connection string
PORT=5000
TOKEN_SECRET_KEY= # Your secret key for JWT it can be any string
TMDB_BASE_URL=https://api.themoviedb.org/3/
TMDB_KEY= # Your TMDB API key

```

### Rescources for getting API keys:

[TMDB](https://www.themoviedb.org/documentation/api)<br>
[MongoDB](https://docs.mongodb.com/guides/server/drivers/)

5. Install dependencies for the client:
   ```bash
   cd client
   npm install
   ```

## Run the app

---

1.  Run the server:

---

```bash
cd server
npm start
```

2.  Run the client:

---

```bash
cd client
npm start
```

3.  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Contributing

---

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
