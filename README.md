# Daily Quote

Shows a quote from _Daily Inspiration From The Monk Who Sold His Ferrari by Robin Sharma_

### Instructions to run locally

- Clone repo

- #### Client

  ```
  $ cd client/
  $ pnpm install # install dependencies
  $ touch .env.development.local # create env file
  ```

  Contents of **.env.development.local**:

  ```env
  NEXT_PUBLIC_API_URL='http://localhost:8080/monk-quote'
  ```

  Start Next.js dev server:

  ```
  $ pnpm dev
  ```

- #### Server

  ```
  $ cd server/
  $ pnpm install
  $ touch .env
  ```

  Contents of **.env**:

  ```env
  PORT=8080
  MONGODB_CONNSTRING='mongodb://localhost:27017/quotes'
  ```

  Start Express server:

  ```
  $ node app.js
  ```

### Built with

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chakra UI](https://chakra-ui.com/)
- [Day.js](https://day.js.org/en/)
- [React DayPicker](https://react-day-picker.js.org/)
- [React Transition Group](https://reactcommunity.org/react-transition-group/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Express](https://expressjs.com/)
- [Mongoose ODM](https://mongoosejs.com/)

### Hosted on

- Frontend - [GitHub Pages](https://pages.github.com/)
- Backend - [Render](https://render.com/)
