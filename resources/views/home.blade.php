@extends('layouts.app')

@section('content')
    <div class='page-wrapper panels' data-barba="container" data-barba-namespace="home">
        @include('partials.hero')
        @include('partials.cards')
        @include('partials.about')
        @include('partials.story')
        @include('partials.form')
    </div>
@endsection
