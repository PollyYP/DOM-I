const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let getNav = document.querySelectorAll("nav a");
getNav[0].textContent = siteContent["nav"]["nav-item-1"];
getNav[1].textContent = siteContent["nav"]["nav-item-2"];
getNav[2].textContent = siteContent["nav"]["nav-item-3"];
getNav[3].textContent = siteContent["nav"]["nav-item-4"];
getNav[4].textContent = siteContent["nav"]["nav-item-5"];
getNav[5].textContent = siteContent["nav"]["nav-item-6"];

getNav.forEach((e) => (e.style.color = "green"));

let createFirstLink = document.createElement("a");
createFirstLink.textContent = "Locations";
createFirstLink.href = "#";
createFirstLink.style.color = "green";
document.querySelector("nav").appendChild(createFirstLink);

let createSecondLink = document.createElement("a");
createSecondLink.textContent = "Models";
createSecondLink.href = "#";
createSecondLink.style.color = "green";
document.querySelector("nav").prepend(createSecondLink);

let slogan = document.querySelector("h1");
slogan.innerHTML = "Dom <br> is <br> awesome";

let getButton = document.querySelector("button");
getButton.textContent = siteContent["cta"]["button"];

let getFirstImg = document.getElementById("cta-img");
getFirstImg.setAttribute("src", siteContent["cta"]["img-src"]);

let getTitle = document.getElementsByTagName("h4");
getTitle[0].textContent = siteContent["main-content"]["features-h4"];
getTitle[1].textContent = siteContent["main-content"]["about-h4"];
getTitle[2].textContent = siteContent["main-content"]["services-h4"];
getTitle[3].textContent = siteContent["main-content"]["product-h4"];
getTitle[4].textContent = siteContent["main-content"]["vision-h4"];
getTitle[5].textContent = siteContent["contact"]["contact-h4"];

let getSecondImg = document.getElementById("middle-img");
getSecondImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let getTitleContent = document.getElementsByTagName("p");
getTitleContent[0].textContent =
  siteContent["main-content"]["features-content"];
getTitleContent[1].textContent = siteContent["main-content"]["about-content"];
getTitleContent[2].textContent =
  siteContent["main-content"]["services-content"];
getTitleContent[3].textContent = siteContent["main-content"]["product-content"];
getTitleContent[4].textContent = siteContent["main-content"]["vision-content"];
getTitleContent[5].innerHTML = "123 Way 456 Street <br> Somewhere, USA";
getTitleContent[6].textContent = siteContent["contact"]["phone"];
getTitleContent[7].textContent = siteContent["contact"]["email"];
getTitleContent[8].textContent = siteContent["footer"]["copyright"];
