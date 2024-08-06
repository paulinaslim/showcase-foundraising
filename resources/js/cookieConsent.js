document.addEventListener("DOMContentLoaded", function () {
    console.log("hallo cookies loaded");
    const acceptBtn = document.querySelector(".accept");
    const refuseBtn = document.querySelector(".refuse");
    const confirmBtn = document.querySelector(".confirm");
    const cookieBar = document.querySelector(".cookieconsent__bar");

    function onAcceptBtnClick() {
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("consent", "default", {
            ad_storage: "denied",
            analytics_storage: "denied",
            functionality_storage: "denied",
            personalization_storage: "denied",
            security_storage: "granted",
            wait_for_update: 500,
        });
        gtag("set", "ads_data_redaction", true);

        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                "gtm.start": new Date().getTime(),
                event: "gtm.js",
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", "G-D8C043FHK3");

        function consentGrantedAnalysis() {
            gtag("consent", "update", {
                analytics_storage: "granted",
            });
        }
        function consentGrantedMarketing() {
            gtag("consent", "update", {
                ad_storage: "granted",
            });
        }
        consentGrantedMarketing();

        !(function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () {
                n.callMethod
                    ? n.callMethod.apply(n, arguments)
                    : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = "2.0";
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
        })(
            window,
            document,
            "script",
            "https://connect.facebook.net/en_US/fbevents.js"
        );
        fbq("init", "814646264176277");
        fbq("track", "PageView");

        consentGrantedAnalysis();
    }

    function onRefuseBtnClick() {
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("consent", "default", {
            ad_storage: "denied",
            analytics_storage: "denied",
            functionality_storage: "denied",
            personalization_storage: "denied",
            security_storage: "granted",
            wait_for_update: 500,
        });
        gtag("set", "ads_data_redaction", true);
        console.log("refuse");
        closeCookieConsent();
    }

    //Close Cookie Consent
    function closeCookieConsent() {
        cookieBar.classList.add("hidden");
        console.log("cookie closed");
    }
    acceptBtn.addEventListener("click", function (e) {
        onAcceptBtnClick();
        closeCookieConsent();
    });

    confirmBtn.addEventListener("click", function (e) {
        onAcceptBtnClick();
        closeCookieConsent();
    });

    refuseBtn.addEventListener("click", function (e) {
        onRefuseBtnClick();
        closeCookieConsent();
    });
});
