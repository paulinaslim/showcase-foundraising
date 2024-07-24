const mix = require("laravel-mix");
const glob = require("glob");

mix.js("resources/js/app.js", "public/js");

glob.sync("resources/sass/**/*.scss").forEach((file) => {
    mix.sass(file, "public/css");
});

mix.options({
    processCssUrls: false,
});

if (mix.inProduction()) {
    mix.version();
}
