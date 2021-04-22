/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
// define the all sections
const sections = document.querySelectorAll("section");
// define the navBar with element Id
const navBar = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function creatListItem() {
  sections.forEach((section) => {
    const sectionID = section.getAttribute("id");
    const sectionNav = section.getAttribute("data-nav");
    //add navBar with unorderd list
    navBar.innerHTML += `<li><a class="menu__link" href="#${sectionID}">${sectionNav}</a></li>`;
  });
}
creatListItem();

// Add class 'active' to section when near top of viewport

const Position = (section) => {
  //where is the top of section
  return Math.floor(section.getBoundingClientRect().top);
  ;
};

// remove the active class
const removeActiveClass = (section) => {
  section.classList.remove("your-active-class");
};
// adding the active class
const addActiveClass = (scroll, section) => {
  if (scroll) {
    section.classList.add("your-active-class");
  }
};

//implementating the actual function

const sectionActivation = () => 
{
  //forEach loop to check if the section in viewport or not
  sections.forEach((section) => 
  {
    const sectionOffset = Position(section);
    // position of section in viewport
    inviewport = () => sectionOffset < 150 && sectionOffset >= -150;
    //if section not in viewport remove the activation
    removeActiveClass(section);
    //if section in viewport implement the function of add active 
    addActiveClass(inviewport(), section);
  });
};


// Scroll to anchor ID using scrollTO event

//while scrolling to detect active section and start to implement the sectionactivation function
window.addEventListener("scroll", sectionActivation);

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
// When the user scrolls the page, execute myFunction
