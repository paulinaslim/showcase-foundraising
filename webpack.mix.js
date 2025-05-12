const mix = require("laravel-mix");
const glob = require("glob");

mix.js("resources/js/app.js", "public/js").js(
    "resources/js/cookieConsent.js",
    "public/js"
);

glob.sync("resources/sass/**/*.scss").forEach((file) => {
    if (file !== "resources/sass/app.scss") {
        mix.sass(file, "public/css");
    }
});
mix.sass("resources/sass/app.scss", "public/css");

mix.options({
    processCssUrls: false,
});

if (mix.inProduction()) {
    mix.version();
}
