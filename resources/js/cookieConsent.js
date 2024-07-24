import Cookies from "js-cookie";
import Accordion from "accordion-js";

//! all attributes
//! data-jcc
//! data-jcc-disabled
//! data-jcc-script

//! data-jcc-detailcontent
//! data-jcc-detailtable
//! data-jcc-option

//! data-jcc-accept
//! data-jcc-refuse
//! data-jcc-details
//! data-jcc-savedetails

//! data-jcc-donottrack
//! data-jcc-donottrackclose
//! data-jcc-donottracktime

//! data-jcc-extmed
//! data-jcc-extmed-iframe
//! data-jcc-extmed-view
//! data-jcc-extmed-btn

export default class JsCookieConsent {
    constructor(settings = {}) {
        this.attrName = settings.attrName || "jcc";
        this.cookieconsentEl = document.querySelector(
            `[data-${this.attrName}]`
        );
        this.extmedCookieName = `${this.attrName}-externalmedia`;

        window[`${this.attrName}`] = this;

        if (this.cookieconsentEl) {
            //create settings
            this.settings = {
                expireDays: settings.expireDays || 30,
                optionCookie: settings.optionCookie || "cookieoption",

                options: settings.options || {
                    required: {},
                    analysis: {},
                    marketing: {},
                },

                doNotTrack: settings.doNotTrack || false,
                doNotTrackHideTime: settings.doNotTrackHideTime || 5000,
                doNotTrackAnimationTime:
                    settings.doNotTrackAnimationTime || 2000,
            };

            this.init();
            this.initEvents();

            //check if ExternalMedia option is set
            if (this.settings.options.externalmedia) {
                new ExternalMedia(
                    this.attrName,
                    this.settings.optionCookie,
                    this.extmedCookieName
                );
            }
        } else {
            this.consoleMessage();
        }
    }

    init() {
        this.domain = window.location.hostname;
        this.isIE = window.navigator.userAgent.includes("Trident");
        this.isDoNotTrackEnabled = false;

        //init DOM
        this.detailContent = this.cookieconsentEl.querySelector(
            `[data-${this.attrName}-detailcontent]`
        );
        this.detailTable = this.cookieconsentEl.querySelector(
            `[data-${this.attrName}-detailtable]`
        );

        this.isDisabled = document.querySelector(
            `[data-${this.attrName}-disabled]`
        );
        this.cookieOptionInputs = Array.from(
            this.cookieconsentEl.querySelectorAll(
                `[data-${this.attrName}-option]`
            )
        );

        this.acceptBtns = Array.from(
            document.querySelectorAll(`[data-${this.attrName}-accept]`)
        );
        this.refuseBtns = Array.from(
            document.querySelectorAll(`[data-${this.attrName}-refuse]`)
        );
        this.detailsBtn = this.cookieconsentEl.querySelector(
            `[data-${this.attrName}-details]`
        );
        this.saveDetailsBtn = this.cookieconsentEl.querySelector(
            `[data-${this.attrName}-savedetails]`
        );

        this.changeCookieSettingsBtns = Array.from(
            document.querySelectorAll(
                `[data-${this.attrName}-changeSettingsBtn]`
            )
        );

        this.trackingScripts = Array.from(
            document.querySelectorAll(`[data-${this.attrName}-script]`)
        );

        //init element
        let cookie = Cookies.get(this.settings.optionCookie);
        this.currentCookieOptions = {};
        try {
            if (cookie) this.currentCookieOptions = JSON.parse(cookie);
        } catch (error) {
            this.currentCookieOptions = {};
            cookie = false;
        }

        if (!cookie) {
            //init doNotTrack
            this.initDoNotTrack();

            if (!this.isDisabled && !this.isDoNotTrackEnabled) {
                //open cookieconsent
                this.cookieconsentEl.classList.remove("hidden");
            }
        } else {
            if (!this.isDoNotTrackEnabled) this.changeScriptTagType();
            this.removeCookies();
        }
    }

    initEvents() {
        if (this.acceptBtns)
            this.acceptBtns.forEach((btn) =>
                btn.addEventListener("click", this.onAcceptBtnClick.bind(this))
            );

        if (this.refuseBtns)
            this.refuseBtns.forEach((btn) =>
                btn.addEventListener("click", this.onRefuseBtnClick.bind(this))
            );

        if (this.changeCookieSettingsBtns)
            this.changeCookieSettingsBtns.forEach((btn) =>
                btn.addEventListener(
                    "click",
                    this.onChangeCookieSettingsBtnClick.bind(this)
                )
            );

        if (this.detailContent) {
            this.detailAccordion = new Accordion(this.detailContent, {
                duration: 350,
                activeClass: "is-open",
            });

            new Accordion(this.detailTable, {
                duration: 350,
                activeClass: "is-open",
            });

            this.detailsBtn &&
                this.detailsBtn.addEventListener(
                    "click",
                    this.onDetailsBtnClick.bind(this)
                );
            this.saveDetailsBtn &&
                this.saveDetailsBtn.addEventListener(
                    "click",
                    this.onSaveDetailsBtnClick.bind(this)
                );
        } else {
            this.consoleMessage("detailcontent");
        }
    }

    //Cookie Option
    setCookieOption(option) {
        if (option) {
            let expires = new Date();
            expires.setTime(
                expires.getTime() + 3600000 * 24 * this.settings.expireDays
            );

            Cookies.set(this.settings.optionCookie, option, {
                expires: expires,
            });
            this.currentCookieOptions = option;
        } else {
            this.consoleMessage("cookie");
        }
    }

    createCookieOptionFromInputs(optionValue = "inputValue") {
        if (this.cookieOptionInputs.length) {
            let option = {};

            this.cookieOptionInputs.forEach((el) => {
                const optionName = el.dataset[`${this.attrName}Option`];

                if (!this.settings.options[optionName].required) {
                    if (optionValue === "inputValue") {
                        option[optionName] = el.checked;
                    } else {
                        option[optionName] = optionValue;
                    }
                }
            });

            this.setCookieOption(option);
        } else {
            this.consoleMessage("option");
        }
    }

    //On btn clicks
    onAcceptBtnClick() {
        //Set CookieOption
        this.createCookieOptionFromInputs(true);
        //Load Scripts
        this.changeScriptTagType();
        //Close Cookie Consent
        this.closeCookieConsent();
        //Show ExternalMedia Elements
        this.showExternalMediaElements();
    }

    onRefuseBtnClick() {
        //Set CookieOption
        this.createCookieOptionFromInputs(false);
        //Remove Cookies
        this.removeCookies();
        //Load Scripts
        this.changeScriptTagType();
        //Close Cookie Consent
        this.closeCookieConsent();
    }

    onDetailsBtnClick() {
        if (this.detailContent) {
            this.detailAccordion.open(0);

            this.detailsBtn.classList.add("hidden");
            this.saveDetailsBtn.classList.remove("hidden");
        } else {
            this.consoleMessage("detailcontent");
        }
    }

    onSaveDetailsBtnClick() {
        //Set CookieOption
        this.createCookieOptionFromInputs();
        //Remove Cookies
        this.removeCookies();
        //Load Scripts
        this.changeScriptTagType();
        //Close Cookie Consent
        this.closeCookieConsent();
    }

    onChangeCookieSettingsBtnClick() {
        if (this.cookieconsentEl.classList.contains("hidden")) {
            this.cookieconsentEl.classList.remove("hidden");
            this.onDetailsBtnClick();

            this.cookieOptionInputs.forEach((el) => {
                const optionName = el.dataset[`${this.attrName}Option`];
                const optionState = this.currentCookieOptions[optionName];

                if (optionState) {
                    el.checked = true;
                }
            });
        }
    }

    //Close Cookie Consent
    closeCookieConsent() {
        this.cookieconsentEl.classList.add("hidden");
    }

    changeScriptTagType(type = "javascript", singleOptionToDisable = "") {
        if (this.trackingScripts.length) {
            this.trackingScripts.forEach((el) => {
                let dataValue = el.dataset[`${this.attrName}Script`];
                const option = this.currentCookieOptions[dataValue];

                if (dataValue === singleOptionToDisable && type === "plain") {
                    el.type = "text/plain";
                } else if (
                    singleOptionToDisable === "all" &&
                    type === "plain"
                ) {
                    el.type = "text/plain";
                }

                if (option && type === "javascript") {
                    const newScriptEl = document.createElement("script");
                    for (let i = 0; i < el.attributes.length; i++) {
                        const attribute = el.attributes[i];
                        if (attribute.value !== "") {
                            newScriptEl.setAttribute(
                                attribute.name,
                                attribute.value
                            );
                        }
                        newScriptEl.setAttribute("type", "text/javascript");
                    }
                    newScriptEl.text = el.text;

                    el.parentNode.insertBefore(newScriptEl, el);
                    el.parentNode.removeChild(el);
                } else if (
                    typeof option === "undefined" &&
                    type === "javascript"
                ) {
                    this.consoleMessage("scriptoptionjavascript");
                }
            });

            //init all changed trackingScripts again (important for changeSettings function)
            this.trackingScripts = Array.from(
                document.querySelectorAll(`[data-${this.attrName}-script]`)
            );
        } else {
            this.consoleMessage("script");
        }
    }

    //Remove Cookies
    removeCookies() {
        Object.keys(this.settings.options).forEach((key) => {
            const settings = this.settings.options[key];
            const cookies = settings.cookies || 0;
            const isRequired = settings.required || false;
            const isAllowed = this.currentCookieOptions[key];

            if (!isRequired && cookies.length && !isAllowed) {
                cookies.forEach((cookie) => {
                    Cookies.remove(cookie, {
                        path: "",
                        domain: this.isIE ? "" : this.domain,
                    });
                });
            } else if (!cookies) {
                this.consoleMessage("optionobjcookies");
            }
        });
    }

    //Do Not Track
    initDoNotTrack() {
        if (this.settings.doNotTrack) {
            if (
                window.doNotTrack ||
                navigator.doNotTrack ||
                navigator.msDoNotTrack ||
                "msTrackingProtectionEnabled" in window.external
            ) {
                // The browser supports Do Not Track!
                if (
                    window.doNotTrack === "1" ||
                    navigator.doNotTrack === "yes" ||
                    navigator.doNotTrack === "1" ||
                    navigator.msDoNotTrack === "1" ||
                    window.external.msTrackingProtectionEnabled()
                ) {
                    // Do Not Track is enabled!
                    this.isDoNotTrackEnabled = true;
                }
            }

            if (this.isDoNotTrackEnabled) {
                this.doNotTrackEl = document.querySelector(
                    `[data-${this.attrName}-donottrack]`
                );
                this.doNotTrackTimeEl = document.querySelector(
                    `[data-${this.attrName}-donottracktime]`
                );

                if (this.doNotTrackEl) {
                    this.doNotTrackEl.addEventListener(
                        "mouseout",
                        this.resumeTimeout.bind(this)
                    );
                    this.doNotTrackEl.addEventListener(
                        "mouseover",
                        this.pauseTimeout.bind(this)
                    );

                    this.doNotTrackElCloseBtn = this.doNotTrackEl.querySelector(
                        `[data-${this.attrName}-donottrackclose]`
                    );
                    this.doNotTrackElCloseBtn &&
                        this.doNotTrackElCloseBtn.addEventListener(
                            "click",
                            this.onDoNotTrackElCloseBtnClick.bind(this)
                        );

                    this.showDoNotTrackEl();
                } else {
                    this.consoleMessage("donottrack");
                }
            }
        }
    }

    showDoNotTrackEl() {
        this.doNotTrackEl.classList.remove("hidden");
        this.createCookieOptionFromInputs(false);

        if (this.settings.doNotTrackHideTime !== -1) {
            this.doNotTrackTimeOut = new Timer(
                () => {
                    this.hideDoNotTrackEl();
                },
                this.settings.doNotTrackHideTime,
                this.doNotTrackTimeEl
            );
        }
    }

    hideDoNotTrackEl() {
        this.doNotTrackEl.classList.add("is-animated");

        setTimeout(() => {
            this.doNotTrackEl.classList.add("hidden");
            this.doNotTrackEl.classList.remove("is-animated");
        }, this.settings.doNotTrackAnimationTime);
    }

    resumeTimeout() {
        this.doNotTrackTimeOut && this.doNotTrackTimeOut.resume();
    }

    pauseTimeout() {
        this.doNotTrackTimeOut && this.doNotTrackTimeOut.pause();
    }

    onDoNotTrackElCloseBtnClick() {
        this.doNotTrackTimeOut && this.doNotTrackTimeOut.stop();
        this.hideDoNotTrackEl();
    }

    //An Function to Set Cookies with the CookieConsent-Script (please use this function whenever you need to set a cookie in your project)
    setCookie(option, cookiename, cookievalue = "", expiresDays = 1) {
        const ccOptions = this.settings.options;

        if (option && cookiename && expiresDays) {
            let expires = "";

            if (!ccOptions[option].session) {
                expires = new Date();
                expires.setTime(expires.getTime() + 3600000 * 24 * expiresDays);
            }

            Cookies.set(cookiename, cookievalue, { expires: expires });
        } else {
            console.error(`CookieConsent can't create the cookie.`);
        }
    }

    //Console messages for error calls
    consoleMessage(error = "default") {
        switch (error) {
            case "option":
                console.error(
                    `CookieConsent DOM not found: You must define an element with the attributes data-${this.attrName}-option!`
                );
                break;
            case "detailcontent":
                console.error(
                    `CookieConsent DOM not found: You must define an element with the attribute data-${this.attrName}-detailcontent!`
                );
                break;
            case "script":
                console.error(
                    `CookieConsent DOM not found: You must define an element with the attribute data-${this.attrName}-script!`
                );
                break;
            case "scriptoption":
                console.error(
                    `CookieConsent Option not found: The value from data-${this.attrName}-script was not declared as option!`
                );
                break;
            case "cookie":
                console.error(`CookieConsent cookie could not be set!`);
                break;
            case "optionobjcookies":
                console.error(
                    `CookieConsent Option not found: options-obj cookies was not set!`
                );
                break;
            case "donottrack":
                console.error(
                    `CookieConsent "Do not Track" is enabled but can't find DOM: You must define an element with the attribute data-${this.attrName}-donottrack!`
                );
                break;
            default:
                console.error(
                    `CookieConsent DOM not found: You must define an element with the attribute data-${this.attrName}!`
                );
                break;
        }
    }

    showExternalMediaElements() {
        Array.from(
            document.querySelectorAll(`[data-${this.attrName}-extmed]`)
        ).forEach((el) => {
            console.log(el);
        });
    }
}

//Timer for "do-not-track"
class Timer {
    constructor(callback, delay, timeEl) {
        this.delay = delay;
        this.callback = callback;
        this.timerId = delay;
        this.start = new Date();
        this.remaining = delay;

        this.timeEl = timeEl;
        this.progressPercent = 0;

        this.resume();
    }

    pause() {
        window.clearTimeout(this.timerId);
        this.remaining -= new Date() - this.start;

        if (this.timeEl) window.clearInterval(this.progress);
    }

    resume() {
        this.start = new Date();
        this.timerId = window.setTimeout(this.callback, this.remaining);

        if (this.timeEl) {
            this.progressInterval(this.remaining);
        }
    }

    stop() {
        window.clearTimeout(this.timerId);
        if (this.timeEl) window.clearInterval(this.progress);
    }

    progressInterval(currentTime) {
        let progressPercent = 0;
        let time = 0;
        const startTime = new Date();

        this.progress = setInterval(() => {
            time = currentTime;
            time -= new Date() - startTime;

            if (time <= 0) {
                progressPercent = 100;
                clearInterval(this.progress);
            } else {
                progressPercent = ((this.delay - time) / this.delay) * 100;
            }

            this.timeEl.style.width = `${progressPercent}%`;
        }, 10);
    }
}

// ExternalMedia Option
class ExternalMedia {
    constructor(attrName, optionCookieName, extmedCookieName) {
        Array.from(
            document.querySelectorAll(`[data-${attrName}-extmed]`)
        ).forEach(
            (el) =>
                new ExternalMediaElement(
                    el,
                    attrName,
                    optionCookieName,
                    extmedCookieName
                )
        );
    }
}

class ExternalMediaElement {
    constructor(el, attrName, optionCookieName, extmedCookieName) {
        this.cookiename = extmedCookieName;
        this.src = el.dataset[`${attrName}Extmed`];
        this.iframe = el.querySelector(`[data-${attrName}-extmed-iframe]`);
        this.view = el.querySelector(`[data-${attrName}-extmed-view]`);
        this.btn = el.querySelector(`[data-${attrName}-extmed-btn]`);

        const JCCcookie = Cookies.get(optionCookieName);
        const optionCookie = JCCcookie ? JSON.parse(JCCcookie) : null;
        const externalMediaCookie = Cookies.get(this.cookiename);

        if (optionCookie?.externalmedia || externalMediaCookie) {
            this.showIframe();
        }

        this.btn &&
            this.btn.addEventListener("click", this.onBtnClick.bind(this));
    }

    onBtnClick() {
        this.setExternalMediaCookie();
        this.showIframe();
    }

    showIframe() {
        this.iframe.src = this.src;
        this.view.classList.add("hidden");
        this.iframe.classList.remove("hidden");
    }

    setExternalMediaCookie() {
        Cookies.set(this.cookiename, true);
    }
}
