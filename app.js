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
 * get and Define the  Global Variables
 *
 */
// get and define the all sections
const sections = document.querySelectorAll("section");
// get and defint the navBar with element Id
const ourNavBar = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 */

// build the nav links

const createNavList = (() => {
  // where is the top of section
  sections.forEach((section) => {
    let theSectionId = section.getAttribute("id");
    let sectionNavLink = section.getAttribute("data-nav");
    //add navBar links with list items
    ourNavBar.innerHTML += `<li><a class="menu__link" href="#${theSectionId}">${sectionNavLink}</a></li>`;
  });
})();

// select which Section is active according to the viewPort using the following function

const position = (section) => {
  // get the dimenstion and the top position of the section to activate or deactivate it
  return section.getBoundingClientRect().top;
};

// remove the active class from selected section
const removeActiveClass = (section) => {
  section.classList.remove("your-active-class");
};
// adding the active class to specific section that in the viewport 
const addActiveClass = (ViewValidation, section) => {
  ViewValidation ? section.classList.add("your-active-class") : pass ;
};
/**
 * End Helper Functions
 *
 *
 * Begin Main Functions
 *
 */

//implementating the actual function
const activateSection = () => {
  //forEach loop to check if the section in viewport or not
  sections.forEach((section) => {
    const sectionOffSet = position(section);
    inview = () => sectionOffSet < 220 && sectionOffSet >= -220;
    // if it in the viewport so Add active class if not remove the active class
    inview() ? addActiveClass(inview(), section) : removeActiveClass(section);
  });
};

// To detect which section in the viewPort while Scrolling the window
window.addEventListener("scroll", activateSection);
/**
 * End Main Functions
 **/
/* Navigation Part */

/* there is a property in the css make it much easier lets start with it*/

// document.('html').css
document.querySelector("html").style.scrollBehavior = "smooth";
/*end the Navigation part*/

