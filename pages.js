// // grabbing a particular tag in the html and changing the HTMl and the style on loading the page

// const tag = document.querySelector("h2");

// // on the tag, pick the html and make it equal to 'this is a test' in red
// tag.innerHTML = "this is a test";
// tag.style.color = "red";

// computers count from zero so we want to match it up. the pageNumber has to start somewhere so we can add to it.
let pageNumber = 0;

// content for the new pages

const pages = [
  {
    copy: "a Brooklyn-based graphic designer",
    background: "#edc7a9",
    circle: "#3e78ed",
  },
  {
    copy: "Kanye West's biggest fan",
    background: "#a1fffe",
    circle: "#e34a47",
  },
  {
    copy: "looking for a job at the start of October",
    background: "#d3c7f3",
    circle: "#f7fe00",
  },
  {
    copy: `letting you <a href="pdf.pdf">download her PDF</a>`,
    background: "#faffb8",
    circle: "#b472e6",
  },
];

// picking the footer and inside that is the image with the class of next or previous or h2
const nextTag = document.querySelector("footer img.next");
const previousTag = document.querySelector("footer img.prev");
const randomTag = document.querySelector("footer img.random");
const outputTag = document.querySelector("h2");
const circleTag = document.querySelector("section div.circle");
const bodyTag = document.querySelector("body");

const next = function () {
  // this takes the pageNumber as above and adds one to it with each click
  pageNumber = pageNumber + 1;

  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }

  updateSection();
};

// pick a random slide

const random = function () {
  pageNumber = Math.floor(Math.random() * pages.length);
  updateSection();
};

const previous = function () {
  pageNumber = pageNumber - 1;
  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }
  updateSection();
};

const updateSection = function () {
  // this is what we want to run when the click happens
  outputTag.innerHTML = pages[pageNumber].copy;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.backgroundColor = pages[pageNumber].background;
};

// adding an event listener to the next tag - listening for a tag
nextTag.addEventListener("click", function () {
  next();
});

// on click of previous tag, run this
previousTag.addEventListener("click", function () {
  previous();
});

// on click of random tag, run this
randomTag.addEventListener("click", function () {
  random();
});

// get pages changing on press of keyboard arrow keys
document.addEventListener("keyup", function (event) {
  console.log(event);
  // if key being pressed is ArrowRight
  if (event.key == "ArrowRight") {
    next();
  }
  // if key being pressed is ArrowLeft
  if (event.key == "ArrowLeft") {
    previous();
  }
});
