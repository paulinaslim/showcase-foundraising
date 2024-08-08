document.addEventListener("DOMContentLoaded", function () {
    const acceptBtn = document.querySelector(".accept");
    const refuseBtn = document.querySelector(".refuse");
    const analyticsBtn = document.querySelector(".confirm");
    const cookieBar = document.querySelector(".cookieconsent__bar");
    const noScript = document.getElementById("noscript");

    function appendGTMframe() {
        const iframe = document.createElement("iframe");
        iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-WVHWJDVX";
        iframe.height = "0";
        iframe.width = "0";
        iframe.style = "display:none;visibility:hidden";
        noScript.appendChild(iframe);
    }

    function onAcceptBtnClick() {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "G-D8C043FHK3");

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
        })(window, document, "script", "dataLayer", "GTM-WVHWJDVX");

        function consentGrantedAnalysis() {
            gtag("consent", "update", {
                analytics_storage: "granted",
            });
        }
        consentGrantedAnalysis();

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
        appendGTMframe();
    }

    function onAnalyticstBtnClick() {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "G-D8C043FHK3");

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
        })(window, document, "script", "dataLayer", "GTM-WVHWJDVX");

        function consentGrantedAnalysis() {
            gtag("consent", "update", {
                analytics_storage: "granted",
            });
        }
        consentGrantedAnalysis();
        appendGTMframe();
    }

    //Close Cookie Consent
    function closeCookieConsent() {
        cookieBar.classList.add("hidden");
    }
    acceptBtn.addEventListener("click", function (e) {
        onAcceptBtnClick();
        closeCookieConsent();
    });

    analyticsBtn.addEventListener("click", function (e) {
        onAnalyticstBtnClick();
        closeCookieConsent();
    });

    refuseBtn.addEventListener("click", function (e) {
        closeCookieConsent();
    });
});
