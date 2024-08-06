@extends('layouts.app')

@section('content')
    <section class="animations page-wrapper" data-barba="container" data-barba-namespace="animations">
        <h4 class="headline">Aniamtions showcase</h4>

        <div class="animations-library">



            <div class="animation-wrapper">
                <h4>CSS Keyframes</h4>
                <p class="desc">Simple Aniamtion, with diffrent:
                <ul class="list">
                    <li>animation-deley</li>
                    <li>animation-duration</li>
                </ul>
                </p>
                <div class="canvas">
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="moon"></div>
                </div>
            </div>

            <div class="animation-wrapper ">
                <h4 class="desc">CSS Timing Functions</h4>
                <div class="timing-wrapper">
                    <p class="desc"> Ease</p>
                    <div class="circle ease"></div>

                    <p class="desc"> Ease-in</p>
                    <div class="circle ease-in"></div>

                    <p class="desc"> Ease-out</p>
                    <div class="circle ease-out"></div>

                    <p class="desc"> Ease-in-out</p>
                    <div class="circle ease-in-out"></div>

                    <p class="desc">Linear</p>
                    <div class="circle linear"></div>

                    <p class="desc">cubic-bezier</p>
                    <div class="circle cubic-bezier"></div>

                    <p class="desc">steps</p>
                    <div class="circle steps"></div>
                </div>
            </div>

            <div class="animation-wrapper hover-wrapper">
                <h4>CSS Transition - Hover Effect </h4>
                <p class="desc">Hover Effect with Transition </p>
                <button class="hover button">Hover me!</button>
                <br>
                <p class="desc">Raw Hover Effect</p>
                <button class="hover-raw button">Hover me!</button>
            </div>

            <div class="animation-wrapper keyframes">
                <h4>CSS Keyframes</h4>

                <div class="animations-list">
                    <button class="animated-button button">Animate me!
                    </button>
                    <div class="heart"></div>
                </div>


                <div class="info-box">
                    <p>CSS Library: Animista
                    <ul>
                        <li>
                            <a href="https://animista.net/play/attention/">Vibration</a>
                        </li>
                        <li>
                            <a href="https://animista.net/play/attention/pulsate">Heartbeat</a>
                        </li>
                    </ul>
                    </p>

                </div>
            </div>



            <div class="animation-wrapper aniamted-svg">
                <h4>SVG Animation</h4>
                <p class="desc">Animation direct in svg tag</p>
                <div class="wrapper">
                    <svg width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="150" cy="50" r="25" style="stroke:#afacac;fill:#afacac;">
                            <animateMotion path="M0,0 q60,100 100,0 q60,-20 100,0" begin="0s" dur="10s"
                                repeatCount="indefinite" />
                        </circle>
                    </svg>
                </div>


            </div>
            <div class="animation-wrapper aniamted-svg">
                <h4>SVG Animation</h4>
                <p class="desc">Animation direct in svg tag</p>

                <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="lightgrey" d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />

                    <circle r="5" fill="red">
                        <animateMotion dur="10s" repeatCount="indefinite"
                            path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
                    </circle>
                </svg>
            </div>


            <div class="animation-wrapper vivus">
                <h4>SVG Animation with Vivus.js (Drawing Effect)</h4>
                <object id="vivus-svg" type="image/svg+xml" data="{{ asset('images/vivus.svg') }}"></object>
                <p class="req">*svg requirements </p>
            </div>







            <div class="animation-wrapper aniamted-xyz">
                <div>
                    <h4>3D Animation - Cube</h4>
                    <ul class="list">
                        <li>create cube div and then 6 faces within cube</li>

                        <li>Set the Cube: dimensions, position relative,transform-style: preserve-3d </li>
                        <li>each face position absolute and transform: translate on axis XYZ.</li>
                        <li>Apply rotation and with keyframes animation to the cube</li>
                    </ul>
                </div>
                <div class="cube">
                    <div class="face front"></div>
                    <div class="face back"></div>
                    <div class="face left"></div>
                    <div class="face right"></div>
                    <div class="face top"></div>
                    <div class="face bottom"></div>
                </div>
            </div>


            <div class="animation-wrapper universe-io">
                <h4 class="light">CSS Keyframes - Loading</h4>
                <p class="light">PURE! Only copy-paste from
                    <a class="light" href="https://uiverse.io/Nawsome/wet-mayfly-23">universe.io</a>
                </p>
                <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
                    <div class="wheel"></div>
                    <div class="hamster">
                        <div class="hamster__body">
                            <div class="hamster__head">
                                <div class="hamster__ear"></div>
                                <div class="hamster__eye"></div>
                                <div class="hamster__nose"></div>
                            </div>
                            <div class="hamster__limb hamster__limb--fr"></div>
                            <div class="hamster__limb hamster__limb--fl"></div>
                            <div class="hamster__limb hamster__limb--br"></div>
                            <div class="hamster__limb hamster__limb--bl"></div>
                            <div class="hamster__tail"></div>
                        </div>
                    </div>
                    <div class="spoke"></div>
                </div>
            </div>



        </div>




    </section>
    {{-- <section class="cards" style="margin: 5rem 2rem 1rem 2rem">
        <div class="card">
            <a href="#form">
                <h4>I'm an Artist</h4>
                <p>Art sadipscing elitraliquyam, sed diam nonumy eirmod tempor inviduntmagna ut labore et dolore magna.
                </p>
                <div class="icon">
                    <img src="{{ asset('images/artist.png') }}" alt="icon artist">
                </div>
                <button class="cta">Artist Application</button>
            </a>

        </div>

        <div class="card">
            <a href="#form">
                <h4>I'm a Business</h4>
                <p>Tetur sadipscing elitr, sed diam non tempor invidunt ut labore et dolore magna aliquyam abore et.</p>
                <div class="icon">
                    <img src="{{ asset('images/bsn.png') }}" alt="icon business">
                </div>
                <button class="cta">Business Application</button>
            </a>

        </div>

        <div class="card">
            <a href="#form">
                <h4>I'm a Supporter</h4>
                <p>Sadipscing elit nonumy eirmod tempor i, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam.</p>
                <div class="icon">
                    <img src="{{ asset('images/support.png') }}" alt="icon support">
                </div>
                <button class="cta">
                    Supporter Application</button>
            </a>
        </div>



    </section> --}}
@endsection
