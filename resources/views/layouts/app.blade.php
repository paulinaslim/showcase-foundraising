<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fundraising Showcase</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">


    {{-- @include('partials.tracking_scripts') --}}
</head>

<body>
    @include('partials.nav')
    <div class="content">
        @yield('content')
    </div>
    @include('partials.footer')

    <script src="{{ mix('js/app.js') }}"></script>
    {{-- @include('partials.cookie_consent') --}}



</body>

</html>
