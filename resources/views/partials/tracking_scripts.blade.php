<!-- Google Analytics -->

@if (env('APP_ENV') === 'live')
    <script type="text/plain" data-jcc-script="analysis">
        {{-- (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-11129740-1', 'auto');
        ga('set', 'anonymizeIp', true);
        ga('send', 'pageview'); --}}
    </script>
@else
    <script type="text/plain" data-jcc-script="analysis">
        {{-- (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-11129740-8', 'auto');
        ga('set', 'anonymizeIp', true);
        ga('send', 'pageview'); --}}
    </script>
@endif

<!-- End Google Analytics -->

<!-- Google Tag Manager -->

{{-- Set defaults for Consent mode --}}
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-N56WJYPHGT"></script>
<script>
    window.dataLayer = window.dataLayer || [];

    // function gtag() {
    //     dataLayer.push(arguments);
    // }
    // gtag('js', new Date());

    // gtag('config', 'G-N56WJYPHGT');
</script>
<!-- Google tag (gtag.js) -->


{{-- <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments)
    }
    gtag("consent", "default", {
        ad_storage: "denied",
        analytics_storage: "denied",
        functionality_storage: "denied",
        personalization_storage: "denied",
        security_storage: "granted",
        wait_for_update: 500
    });
    gtag("set", "ads_data_redaction", true);
</script> --}}

{{-- initialize GTM --}}

@if (env('APP_ENV') === 'live')
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-MTSDBTB');
    </script>
@else
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-NCB75W6');
    </script>
@endif

{{-- update GTM analysis_storage consent --}}
<script type="text/plain" data-jscookieconsent-script="analysis">
    function consentGrantedAnalysis() {
        gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
      consentGrantedAnalysis();
</script>

{{-- update GTM ad_storage consent --}}
<script type="text/plain" data-jscookieconsent-script="marketing">
    function consentGrantedMarketing() {
        gtag('consent', 'update', {
          'ad_storage': 'granted'
        });
      }
      consentGrantedMarketing();
</script>

<!-- End Google Tag Manager -->



@if (env('APP_ENV') === 'live')
    <!-- Facebook Pixel Code -->
    <script type="text/plain" data-jscookieconsent-script="marketing">
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '143955369299078');
        fbq('track', 'PageView');
     </script>
    <!-- End Facebook Pixel Code -->
@endif
