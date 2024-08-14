@extends('layouts.app')

@section('content')
    <section id="contact-page" class="parallax-thumbnail-wrapper">
        <img class="thumbnail" src="{{ asset('images/tree.jpg') }}" alt="tree pink" />



        <div class="contact-content ">

            <div class="contact-intro ">

                <h1 id="split-text" class="headline">Thank you</h1>

                <p class="paragraph">
                    Thank you for contacting us. We will get back to you as soon as possible
                </p>
            </div>

            @include('partials.cards')

            <div class="text">

            </div>
        </div>
    </section>
@endsection
