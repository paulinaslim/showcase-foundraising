import "./accordion";
import "./navbar";
import "./form";
import "./downloadPdf";
import "./cookieConsent";

import JsCookieConsent from "./cookieConsent";

document.addEventListener("DOMContentLoaded", function () {
    console.log("hallo cookies loaded");
    new JsCookieConsent();
});
