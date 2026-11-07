# About
A demo of an embedded React application with an Express server.

Instead of a decoupled frontend and backend with two separate servers, this setup uses `esbuild` to compile the client-side bundle during server runtime.

Previously Ive used ejs engine with express to achieve this type of setup, but since I've been using React a lot quite recently I wanted to see if it could be done.

## Stack
- Node and express - Handles http server and routing as well as serving static files.
- esbuild - The compiler that bundles up JSX with React all packed up and spits ut javascript we can use on the browser.

# Why?
- Zero CORS issues, the backend and the frontend share the same origin. This allow us for less configuration on httpOnly cookies aswell, since there is no CORS to worry about.
- One deployment, just slap a Dockerfile, put it on a VPS or hosting platform like Fly.io and we are good to go, cheap compute.

This is perfect for internal tools, dashboards, micro SaaS, and utility applications. Easy to work on, setup in a short matter of time and deploy with ease.

# Some gotchas
- When setting up `React Router`, a refresh would trigger the express `Cannot get /path`, so to fix this im adding a catch all route at the end of the server file.
- In this demo im using `await esbuild.buid()` to bundle up, not ideal for CI / CD though, in which case I would use a `npm run build` script - https://esbuild.github.io/getting-started/#build-scripts

# Usage
1. Install dependencies with `npm install`
2. Run with `npm start`
3. Visit `http://localhost:3000`, where you'll see a react application running with react router.