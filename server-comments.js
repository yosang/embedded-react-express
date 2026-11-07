import express from "express";
import esbuild from "esbuild";

// Gotta use path
import path from "path";

// In ESM we dont have __dirname, thats CommonJS stuff, instead we can use import.meta.dirname
const normalizePath = (string) => path.join(import.meta.dirname, string);

const app = express();

await esbuild.build({
    entryPoints: [normalizePath('src/index.jsx')], // Thats going to be the code that esbuild is going to transpile (jsx)
    outfile: normalizePath('public/dist/bundle.js'), // The javascript codecode its going to spit out for the browser (to be used by our index.html file)
    bundle: true
    /**
     * This is pretty much all we need to get up and running
     * - There is more configuration one can add for dev and prod
     * - Read about it here: https://esbuild.github.io/getting-started/#bundling-for-the-browser
     */
})

// This is fine as long as we run node server.js from process.cwd() - which means where the terminal is at the exact moment we run the app
// However, when running from a different path, like root (/) which most CI / CD environments do, or even in a docker container, it will most certainly throw an error
// its like running node /my-app/server.js from root, we cant use relative paths, gotta be absoulute
// app.use(express.static("public"));

app.use(express.static(normalizePath("public"))); // serves the entire public folder as static, by default index.html is picked up and served on root

app.listen(3000, () => console.log("Server is running on port 3000"));
