import "./accordion";
import "./navbar";
import "./form";
import "./cookieConsent";

import JsCookieConsent from "./cookieConsent";

document.addEventListener("DOMContentLoaded", function () {
    console.log("hallo cookies loaded");
    new JsCookieConsent();
});
