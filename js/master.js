// Function
//To Sections Scrolling Function
function scrollingToSections(elements) {
  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      document.querySelector(`.${e.target.dataset.section}`).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
////////
// handleActive Function
function handleActive(e) {
  e.target.parentElement.querySelectorAll(".active").forEach((el) => {
    el.classList.remove("active");
  });
  e.target.classList.add("active");
}
////////

// Start Landing
let landingPage = document.querySelector(".landing");
let randomNum;
let imgsArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
];
let backGroundOption = true;
let backGroundInterval;
if (backGroundOption === true) {
  function randomBackGround() {
    backGroundInterval = setInterval(() => {
      randomNum = Math.floor(Math.random() * imgsArray.length);
      landingPage.style.backgroundImage = `url("./imgs/${imgsArray[randomNum]}")`;
    }, 5000);
  }
}
let navigations = document.querySelectorAll(".LinksLi");

document.getElementById("toggle").onclick = function (e) {
  e.stopPropagation();
  document.querySelector("header").style.backgroundColor = "rgb(0 0 0 / 0.9)";
  document.querySelector(".links").classList.toggle("liOpen");
  if (document.querySelector(".links").classList.contains("liOpen")) {
    document.querySelector(".links").classList.remove("liClose");
    document.querySelector(".SpanOne").classList.add("SpanOne1");
    document.querySelector(".SpanTwo").classList.add("SpanTwo2");
    document.querySelector(".SpanThree").classList.add("SpanThree3");
    document.querySelector(".introduction-text").style.zIndex = "-1";
  } else {
    document.querySelector(".links").classList.add("liClose");
    document.querySelector("header").style.backgroundColor = "rgb(0 0 0 / 0)";
    document.querySelector("header").style.transitionDelay = "0.3s";
    document.querySelector(".introduction-text").style.transitionDelay = "0.3s";

    document.querySelector(".SpanOne").classList.remove("SpanOne1");
    document.querySelector(".SpanTwo").classList.remove("SpanTwo2");
    document.querySelector(".SpanThree").classList.remove("SpanThree3");
    document.querySelector(".introduction-text").style.zIndex = "1";
  }
};

navigations.forEach((link) => {
  link.addEventListener("click", (e) => {
    document.querySelector(`.${e.target.dataset.section}`).scrollIntoView({
      behavior: "smooth",
    });
    document.querySelector(".links").classList.remove("liOpen");
    document.querySelector(".SpanOne").classList.remove("SpanOne1");
    document.querySelector(".SpanTwo").classList.remove("SpanTwo2");
    document.querySelector(".SpanThree").classList.remove("SpanThree3");
    document.querySelector(".introduction-text").style.zIndex = "1";
  });
});
// End Landing

// Start Special Features
let text = document.querySelector(".special-feature");

window.addEventListener("scroll", () => {
  let featuresOffsetTop = text.offsetTop;
  let featuresOffsetHeight = text.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowScroll = this.pageYOffset;

  if (windowScroll > featuresOffsetTop + featuresOffsetHeight - windowHeight) {
    document.querySelector(".feature-text").style.left = "0px";
    document.querySelector(".learn-more").style.right = "0px";
  }
});

// End Special Features

// Start Our Rates

let rateSpan = document.querySelector(".our-rates .container");

window.onscroll = () => {
  let rateSpanOffsetTop = rateSpan.offsetTop;
  let rateSpanOffsetHeight = rateSpan.offsetHeight;
  let rateSpanWindowHeight = this.innerHeight;
  let rateSpanWindowScroll = this.pageYOffset;

  if (
    rateSpanWindowScroll >
    rateSpanOffsetTop + rateSpanOffsetHeight - rateSpanWindowHeight
  ) {
    let mySpan = document.querySelectorAll(".rates .box span");
    mySpan.forEach((span) => {
      span.style.width = span.dataset.progress;
      span.style.color = "white";
    });
  }
};
// End Our Rates
// Start PLaces
let myImages = document.querySelectorAll(".images .box img");
let myBox = document.querySelectorAll(".images .box");

myBox.forEach((box) => {
  box.addEventListener("click", (e) => {
    let popupOverlay = document.createElement("div");
    popupOverlay.classList.add("popup");
    document.body.appendChild(popupOverlay);

    let popupBox = document.createElement("div");
    popupBox.classList.add("popup-box");

    let popupImage = document.createElement("img");
    popupImage.className = "popup-image";
    popupBox.appendChild(popupImage);
    popupImage.src = box.firstElementChild.src;

    document.body.appendChild(popupBox);

    // TextBox Headline Popup

    let popupTextBox = document.createElement("div");
    popupTextBox.className = "popup-textbox";

    let popupNewHeadline = document.createElement("h3");

    let popupHeadline = box.lastElementChild.firstElementChild.innerHTML;
    popupNewHeadline.innerHTML = popupHeadline;
    popupNewHeadline.className = "popup-headline";

    popupTextBox.appendChild(popupNewHeadline);
    document.body.appendChild(popupTextBox);

    // TextBox P Popup
    let popupP = document.createElement("div");
    popupP.classList.add("popup-p");
    let para = document.createElement("p");

    for (let i = 1; i <= myBox.length; i++) {
      if (
        box.lastElementChild.firstElementChild.classList.contains(`image${i}`)
      ) {
        para.classList.add("para");

        if (i === 1) {
          para.innerHTML = `<span>Why go:</span> The ultimate tropical island experience.
          <br> <span>Best season:</span> April and May or October and November
          <br> <span>Insider's tip:</span> There's a small café near the beach serving delicious yet straightforward local seafood.`;
        }
        if (i === 2) {
          para.innerHTML = `<span>Why go:</span> Heavenly beach and stunning backcountry to go on the longest coastal drive in the world!
          <br> <span>Best season:</span> July to November is whale season around Fraser Island.
          <br><span>Insider's tip:</span> The crystal-clear and bubbling Champagne Pools offer a truly unique opportunity for a dip!`;
        }
        if (i === 3) {
          para.innerHTML = `<span>Why go:</span> Peaceful isolation and exquisite sunsets.
          <br><span>Best season:</span> October to March
          <br><span>Insider's tip:</span> Snorkel nearby Turtle Island for beautiful coral reefs and an abundance of tropical fish.`;
        }
        if (i === 4) {
          para.innerHTML = `<span>Why go:</span> Palm trees, sun & sand — a taste of Colombia at its best!
          <br><span>Best season:</span> January and February
          <br><span>Insider's tip:</span> A small domestic airport at Santa Marta offers cheap and convenient access to the area.`;
        }
        if (i === 5) {
          para.innerHTML = `<span>Why go:</span> Travel back in time and explore the African coast how it was before the onset of mass tourism.
          <br><span>Best season:</span> The cool and dry season runs May to October.
          <br><span>Insider's tip:</span> Whales can often be spotted off the Ifaty coast between July and August.`;
        }
        if (i === 6) {
          para.innerHTML = `<span>Why go:</span> Considered to be one of the best areas in the South Pacific with plenty of activities from lounging to snorkeling offshore, in one of the many coral reefed lagoons.
          <br><span>Best season:</span> May through October when the ocean temperatures average in the high 20s.
          <br><span>Insider's tip:</span> Don't miss the numerous traditional Samoan dancing programs on the beach which includes an elaborate fire dance.`;
        }
        if (i === 7) {
          para.innerHTML = `<span> Why go:</span> Matira beach is often referred to as the “Aquarium”, due to the large amount of colourful tropical fish that live offshore.
          <br><span>Best season:</span> Bora Bora offers pleasant, year round water temperatures that range from 26° C in the winter months (June – October) to 29° C during the summer months.
          <br><span>Insider's tip:</span> There is no public transportation on the island. Consider renting a car, scooter or a bicycle to get around.`;
        }
        if (i === 8) {
          para.innerHTML = `<span>Why go:</span> Water sport activities along the Coral Coast are a must do for travelers and include scuba diving, snorkeling as well as surfing.
          <br><span>Best season:</span> Year-round temperatures are constant in the high 20s with less rain during the months of July through September.
          <br><span>Insider's tip:</span> Horseback riding along the shoreline is a relaxing way to spend an afternoon after challenging yourself to a morning of water sports.`;
        }
        if (i === 9) {
          para.innerHTML = `<span>Why go:</span> The chance to dive one of Asia's most exceptional marine ecosystems.
          <br><span> Best season:</span> April to June generally offers the best visibility for divers.
          <br><span>Insider's tip:</span> Dive amongst literally thousands of Barracuda at the aptly named Barracuda Point.`;
        }
        if (i === 10) {
          para.innerHTML = `<span>Why go:</span> Coral reefs, wildlife and endless beautiful sandy beaches.
          <br><span>Best season:</span> Mid-May to mid-October
          <br><span>Insider's tip:</span> Surfers may have more luck of catching a wave at nearby Tofino beach!`;
        }
        if (i === 11) {
          para.innerHTML = `<span>Why go:</span> Adventure, adrenaline and relaxation rolled into a secluded beach destination.
          <br><span>Best season:</span> October to December
          <br><span>Insider's tip:</span> Head south of the ruins to experience Tulum Beach at its best!`;
        }
        if (i === 12) {
          para.innerHTML = `<span>Why go:</span> To walk on the soft, fine and squeaky sand made mostly of pure silica.
          <br><span>Best season:</span> January to March
          <br><span>Insider's tip:</span> Low tide yields some of the most dramatic views of this fantastic beach.`;
        }
      }
    }

    popupP.appendChild(para);
    document.body.appendChild(popupP);

    // Stopping Popup

    popupOverlay.onclick = () => {
      document.querySelector(".popup").remove();
      document.querySelector(".popup-box").remove();
      document.querySelector(".popup-textbox").remove();
      document.querySelector(".popup-p").remove();
    };
  });
});

// End PLaces

// Start Testimonials
let boxs = document.querySelectorAll(".testimonials .box");

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("open-box");
  });
});
// End Testimonials

// Start Settings Box
let colorsList = document.querySelectorAll(".colors-list li");

colorsList.forEach((ele) => {
  ele.onclick = function (e) {
    document.documentElement.style.setProperty(
      "--main-color",
      `${ele.getAttribute("data-color")}`
    );
    handleActive(e);
    window.localStorage.setItem("color", `${ele.getAttribute("data-color")}`);
  };
});
document.querySelector(".set-icon").addEventListener("click", () => {
  document.querySelector(".settings-box").classList.toggle("open");
  document.querySelector(".set-icon").classList.toggle("fa-spin");
});
// Start Switch Colors

if (window.localStorage.getItem("color") !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    `${window.localStorage.getItem("color")}`
  );
  colorsList.forEach((e) => {
    e.classList.remove("active");
  });
  colorsList.forEach((e) => {
    if (
      e.getAttribute("data-color") === `${window.localStorage.getItem("color")}`
    ) {
      e.classList.toggle("active");
    } else {
      e.classList.remove("active");
    }
  });
}

// End Switch Colors

// Start Switch Background Changing
backGroundOption = true;

let spans = document.querySelectorAll(".control span");
spans.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    handleActive(e);
    ele.classList.add("active");
    window.localStorage.setItem("active", `${ele.innerHTML}`);
    if (ele.classList.contains("active") === ele.classList.contains("on")) {
      backGroundOption = true;
      randomBackGround();
    }
    if (ele.classList.contains("active") === ele.classList.contains("off")) {
      backGroundOption = false;
      clearInterval(backGroundInterval);
    }
    window.localStorage.setItem(
      "background-Image",
      `${landingPage.style.backgroundImage}`
    );
  });
});

if (window.localStorage.getItem("active") === "off") {
  clearInterval(backGroundInterval);
  landingPage.style.backgroundImage =
    window.localStorage.getItem("background-Image");

  spans.forEach((ele) => {
    ele.classList.remove("active");
    document.querySelector(".control .off").classList.add("active")
  });
} else {
  // backGroundOption = true;
  randomBackGround();
  spans.forEach((ele) => {
    ele.classList.remove("active");
    document.querySelector(".control .on").classList.add("active")
  });
}
// End Switch Background Changing

// Start Nav bullets

let checkedBullets = document.querySelectorAll(".bullet");

checkedBullets.forEach((bullet) => {
  bullet.onclick = (e) => {
    handleActive(e);
  };
});
scrollingToSections(checkedBullets);

// Controling Nav bullets
let navControl = document.querySelectorAll(".control-bullets span");
let navControlContainer = document.querySelector(".nav-bullets");
// let controlling = navControl.forEach((blt) => {});

navControl.forEach((blt) => {
  blt.onclick = (e) => {
    handleActive(e);
    if (blt.dataset.display === "show") {
      navControlContainer.style.display = "block";
    } else {
      navControlContainer.style.display = "none";
    }
    window.localStorage.setItem(
      "display",
      `${navControlContainer.style.display}`
    );
  };
});

if (window.localStorage.getItem("display") === "none") {
  navControlContainer.style.display = "none";
  navControl.forEach((blt) => {
    blt.classList.remove("active");
  });
  document.querySelector(".control-bullets .off").classList.add("active");
} else {
  navControlContainer.style.display = "block";
  navControl.forEach((blt) => {
    blt.classList.remove("active");
  });
  document.querySelector(".control-bullets .on").classList.add("active");
}
// End Nav bullets

// Start Reset
let resetButton = document.querySelector(".settings-box .reset");

resetButton.onclick = () => {
  window.localStorage.clear();
  window.location.reload();
};

// End Reset

// End Settings Box
