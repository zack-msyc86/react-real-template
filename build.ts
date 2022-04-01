const { build } = require("esbuild");

const isDev = process.env.NODE_ENV === '"development"';
const watch = process.env.WATCH === 'true' || false;

build({
  define: { "process.env.NODE_ENV": process.env.NODE_ENV },
  target: "es2015",
  platform: "browser",
  entryPoints: ["src/main.tsx"],
  outfile: "src/public/index.js",
  bundle: true,
  minify: !isDev,
  sourcemap: isDev,
  treeShaking: true,
  watch: watch && {
    onRebuild(err, result) {
      console.log(`${new Date().toLocaleString()}: Rebuild`)
      if(err){
        console.log(JSON.stringify(err?.errors));
      }
      if(result?.warnings?.length){
        console.log(JSON.stringify(result?.warnings));
      }
    },
  },
})
.then(() => console.log(`${new Date().toLocaleString()}: Build Finish`) )
.catch(err => console.log(`Error: ${JSON.stringify(err)}`));