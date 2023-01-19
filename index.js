// Sidebar
const sidebarLinks = document.querySelectorAll(".sidebar-link");
const notification = document.getElementById("#notification");
const tag = document.querySelector(".small");

// Popup Notification
const popupNotification = document.querySelector(".popup");

// Messsage (Sidebar) & Message-right
const message = document.querySelector(".messageSidebar");
const rightMessage = document.querySelector(".messages");
const messageTag = document.querySelector(".tag");

// Search Message
const searchMessage = document.querySelector(".search");
const messagee = document.querySelectorAll(".mess");
const names = document.querySelectorAll(".upper");

// Theme
const theme = document.querySelector(".theme");
const modal = document.querySelector(".modal");
const cancel = document.querySelector(".canceel");
var root = document.querySelector(":root");

// Theme Font Sizes
const pickSizes = document.querySelectorAll(".pick-size span");

// Theme Color Change
const allColors = document.querySelectorAll(".colors span");

// Background
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

// ------------
const removeActive = function () {
  sidebarLinks.forEach(function (linkk) {
    linkk.classList.remove("active");
  });
};

sidebarLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    removeActive();
    link.classList.add("active");

    if (link.id != "notification") {
      popupNotification.style.display = "none";
    } else {
      popupNotification.style.display = "block";
      tag.style.display = "none";
    }
  });

  message.addEventListener("click", function () {
    rightMessage.style.boxShadow = "0 0 .8rem var(--color-primary)";
    messageTag.style.display = "none";
    setTimeout(function () {
      rightMessage.style.boxShadow = "none";
    }, 2000);
  });

  theme.addEventListener("click", function () {
    modal.classList.remove("active");
  });
});

cancel.addEventListener("click", function () {
  modal.classList.add("active");
});

// ---------
const messageSearch = function () {
  const value = searchMessage.value.toLowerCase();
  messagee.forEach(function (chat) {
    let search = chat.textContent.toLowerCase();
    if (search.indexOf(value) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

searchMessage.addEventListener("keyup", messageSearch);

// ---------
const changeSize = function () {
  pickSizes.forEach(function (size) {
    size.classList.remove("active");
  });
};

pickSizes.forEach(function (size) {
  size.addEventListener("click", function () {
    changeSize();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-left", "5.4rem");
    } else if (size.classList.contains("size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-left", "-7rem");
    } else if (size.classList.contains("size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-left", "-18rem");
    } else if (size.classList.contains("size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-left", "-25rem");
    } else if (size.classList.contains("size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "-12rem");
      root.style.setProperty("--sticky-top-left", "-35rem");
    }

    document.querySelector("html").style.fontSize = fontSize;
  });
});

// ----------
const changeColor = function () {
  allColors.forEach(function (color) {
    color.classList.remove("active");
  });
};

allColors.forEach(function (color) {
  color.addEventListener("click", function () {
    let primaryHue;
    changeColor();
    color.classList.toggle("active");

    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 327;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 55;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 196;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 21;
    }

    root.style.setProperty("--primaryHue", primaryHue);

    // document.querySelector(":root").style.setProperty("--primaryHue", primaryHue);
  });
});

// Theme Background
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = function () {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
};

bg1.addEventListener("click", function () {
  lightColorLightness = "15%";
  whiteColorLightness = "20%";
  darkColorLightness = "95%";

  bg1.classList.add("active");
  bg2.classList.remove("active");
  bg3.classList.remove("active");

  changeBg();

  window.location.reload();
});

bg2.addEventListener("click", function () {
  lightColorLightness = "15%";
  whiteColorLightness = "20%";
  darkColorLightness = "95%";

  bg2.classList.add("active");
  bg1.classList.remove("active");
  bg3.classList.remove("active");

  changeBg();
});

bg3.addEventListener("click", function () {
  lightColorLightness = "0%";
  whiteColorLightness = "20%";
  darkColorLightness = "95%";

  bg3.classList.add("active");
  bg1.classList.remove("active");
  bg2.classList.remove("active");

  changeBg();
});
