const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//nav bar
let nav1 = document.querySelector("nav a:nth-of-type(1)");
nav1.textContent = siteContent["nav"]["nav-item-1"];
let nav2 = document.querySelector("nav a:nth-of-type(2)");
nav2.textContent = siteContent["nav"]["nav-item-2"];
let nav3 = document.querySelector("nav a:nth-of-type(3)");
nav3.textContent = siteContent["nav"]["nav-item-3"];
let nav4 = document.querySelector("nav a:nth-of-type(4)");
nav4.textContent = siteContent["nav"]["nav-item-4"];
let nav5 = document.querySelector("nav a:nth-of-type(5)");
nav5.textContent = siteContent["nav"]["nav-item-5"];
let nav6 = document.querySelector("nav a:nth-of-type(6)");
nav6.textContent = siteContent["nav"]["nav-item-6"];

//header title
let title = document.querySelector(".cta-text h1");
title.textContent = siteContent["cta"]["h1"];

//header image
let headerLogo = document.querySelector("#cta-img");
headerLogo.setAttribute("src", siteContent["cta"]["img-src"]);

//header button
let button = document.querySelector(".cta-text button");
button.textContent = siteContent["cta"]["button"];

//main content

//features
let featuresTitle = document.querySelector(".top-content .text-content:nth-of-type(1) h4");
featuresTitle.textContent = siteContent["main-content"]["features-h4"];
let featuresP = document.querySelector(".top-content .text-content:nth-of-type(1) p");
featuresP.textContent = siteContent["main-content"]["features-content"];
//about
let aboutTitle = document.querySelector(".top-content .text-content:nth-of-type(2) h4");
aboutTitle.textContent = siteContent["main-content"]["about-h4"];
let aboutP = document.querySelector(".top-content .text-content:nth-of-type(2) p");
aboutP.textContent = siteContent["main-content"]["about-content"];
//img
let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
//services
let servicesTitle = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4");
servicesTitle.textContent = siteContent["main-content"]["services-h4"];
let servicesP = document.querySelector(".bottom-content .text-content:nth-of-type(1) p");
servicesP.textContent = siteContent["main-content"]["services-content"];
//product
let productTitle = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
productTitle.textContent = siteContent["main-content"]["product-h4"];
let productP = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
productP.textContent = siteContent["main-content"]["product-content"];
//vision
let visionTitle = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
visionTitle.textContent = siteContent["main-content"]["vision-h4"];
let visionP = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");
visionP.textContent = siteContent["main-content"]["vision-content"];

//contact

let contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

let addressContent = document.querySelector(".contact p:nth-of-type(1)");
addressContent.textContent = siteContent["contact"]["address"];

let phone = document.querySelector(".contact p:nth-of-type(2)");
phone.textContent = siteContent["contact"]["phone"];

let email = document.querySelector(".contact p:nth-of-type(3)");
email.textContent = siteContent["contact"]["email"];

//copyright
let cr = document.querySelector("footer p");
cr.textContent = siteContent["footer"]["copyright"];