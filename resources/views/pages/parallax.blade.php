@extends('layouts.app')

@section('content')
    <section id="parallax-wrapper">
        <div class="parallax-separator parllax-top">
        </div>
        <div id="parallax">
            <h1 class="heading parallax-heading ">Welcome to my parallax <br>
                <span class='span-line span-negative'></span>
                <br>
                <span class='span-line span-positive'></span>
            </h1>
            <img data-speed='-0.5'class="parallax-img" src="{{ asset('images/2.png') }}" alt="Museum Picture">
            <img data-speed='-8' class="parallax-img"src="{{ asset('images/3.png') }}" alt="Museum Picture">
            <img data-speed='-0.8' class="parallax-img"src="{{ asset('images/4.png') }}" alt="Museum Picture">
            <img data-speed='-4' class="parallax-img" src="{{ asset('images/5.png') }}" alt="Museum Picture">
            <img data-speed='-9' class="parallax-img" src="{{ asset('images/4.png') }}" alt="Museum Picture">
            <img data-speed='-3' class="parallax-img" src="{{ asset('images/2.png') }}" alt="Museum Picture">
            <img data-speed='-4.5' class="parallax-img" src="{{ asset('images/2.png') }}" alt="Museum Picture">
            <img data-speed='-1' class="parallax-img" src="{{ asset('images/3.png') }}" alt="Museum Picture">
            <img data-speed='-8' class="parallax-img" src="{{ asset('images/5.png') }}" alt="Museum Picture">
            <img data-speed='-4' class="parallax-img" src="{{ asset('images/4.png') }}" alt="Museum Picture">

            <div class="content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nostrum numquam! Architecto veritatis
                fugiat quidem ad totam quibusdam rerum velit officiis? Reprehenderit deserunt dicta error alias pariatur
                culpa numquam ratione.Fugiat accusantium minus ipsum, asperiores eligendi nam modi accusamus laudantium
                maiores dolore reprehenderit provident animi iste? Est necessitatibus accusamus enim laborum? Cupiditate
                tempore rem ad numquam provident, excepturi optio nihil.

            </div>
            <div>

            </div>


        </div>

        <div class="parallax-content">


        </div>
        <div class="parallax-separator parallax-bottom">
            <h2>goodbye</h2>
        </div>
    </section>
@endsection
