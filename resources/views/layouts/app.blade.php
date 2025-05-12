<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fundraising Showcase</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="robots" content="noindex,follow" />
    <script src="https://cdn.jsdelivr.net/npm/vivus@latest/dist/vivus.min.js"></script>
    <script src="https://unpkg.com/@barba/core"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Observer.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollToPlugin.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/TextPlugin.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/MotionPathPlugin.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Flip.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>

    <script src="https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>
    <script src="https://unpkg.com/split-type"></script>
    <script type="importmap">
        {
          "imports": {
            "three": "https://cdn.jsdelivr.net/npm/three@0.167.1/build/three.module.js",
            "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.167.1/examples/jsm/"
          }
        }
      </script>




</head>

<link rel="stylesheet" href="{{ mix('css/app.css') }}">

</head>

<body data-barba="wrapper">
    <noscript id="noscript"></noscript>
    <ul class="transition">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>

    <div class="transition-inside-out"></div>

    <nav>
        @include('partials.nav')
    </nav>

    <main id="content" class="content">
        @yield('content')
    </main>

    <footer class="footer ">
        @include('partials.footer')
    </footer>
    @include('partials.cookie_consent')
    <script src="{{ mix('js/app.js') }}"></script>

</html>
