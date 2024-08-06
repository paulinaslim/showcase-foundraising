const mix = require("laravel-mix");
const glob = require("glob");

mix.js("resources/js/app.js", "public/js").js(
    "resources/js/cookieConsent.js",
    "public/js"
);

mix.sass("resources/sass/app.scss", "public/css");

mix.options({
    processCssUrls: false,
});

if (mix.inProduction()) {
    mix.version();
}
