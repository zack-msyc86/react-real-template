const { build } = require('esbuild');
const bs = require('browser-sync').create();
const fse = require('fs-extra');

const isDev = process.argv.includes('--dev');
const outdir = 'dist';

try {
  fse.rmSync(outdir, { recursive: true, force: true });
  fse.mkdirSync(outdir);
  fse.copyFileSync('src/public/index.html', `${outdir}/index.html`);
} catch (err) {
  console.error(`initialize dist failed:`, err);
  process.exit(1);
}

build({
  define: { 'process.env.NODE_ENV': process.env.NODE_ENV },
  target: 'es2015',
  platform: 'browser',
  entryPoints: ['src/main.tsx'],
  inject: ['config/react-shim.ts'],
  outdir,
  bundle: true,
  minify: !isDev,
  sourcemap: isDev,
  treeShaking: true,
  watch: isDev && {
    onRebuild(err, result) {
      console.log(`${new Date().toLocaleString()}: Rebuild`)
      if(err){
        console.log(err?.errors);
      }
      if(result?.warnings?.length){
        console.log(result?.warnings);
      }
    },
  },
}).then(result => {
  if (isDev) {
    console.log(`${new Date().toLocaleString()}: Watching source files...`);
    bs.init({
      server: outdir,
      watch: true
    }, (err) => {
      if (err) {
        console.error(`${new Date().toLocaleString()}: Serve Failed:`, err);
        bs.exit();
      }
    });
  } else {
    console.log(`${new Date().toLocaleString()}: Build Finish`)
  }
}).catch(err => {
  console.log(`Error: ${JSON.stringify(err)}`)
  process.exit(1);
});