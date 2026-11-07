import express from "express";
import esbuild from "esbuild";
import path from "path";

// for defensive programming
const normalizePath = (string) => path.join(import.meta.dirname, string);

const app = express();

await esbuild.build({
    entryPoints: [normalizePath('src/index.jsx')],
    outfile: normalizePath('public/dist/bundle.js'),
    bundle: true
})

app.use(express.static(normalizePath("public"))); // serves the entire public folder as static, by default index.html is picked up and served on root

app.get("/status", (req, res) => {
    res.status(200).json({ status: 200, message: "ok" });
})

// express 5 cach all routing
app.get("/{*canbewhatever}", (req, res) => {
    // const para = req.params.canbewhatever ?? "";
    // console.log(para);

    res.sendFile(normalizePath("public/index.html"));
})

app.listen(3000, () => console.log("Server is running on port 3000"));
