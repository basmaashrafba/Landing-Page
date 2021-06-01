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
// get and define the navBar with element Id
const ourNavBar = document.getElementById("navbar__list");
const ourNavBarLinks=document.querySelectorAll('.menu__link')

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

function myFunction() {
  let menu = document.getElementById("navbar__list");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
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
const addActiveClass = (ViewValidation,section) => {
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
    inview = () => sectionOffSet < 200 && sectionOffSet >= -200;
    // if it in the viewport so Add active class if not remove the active class
    if( inview() == true ){
      addActiveClass(inview(), section)
      let getNav=section.getAttribute('id')
        let current_navlink=document.querySelector(`li>a[href='#${getNav}']`)
        current_navlink.parentNode.classList.add('active')
        if(current_navlink.parentNode.previousElementSibling){
          current_navlink.parentNode.previousElementSibling.classList.remove('active')
        }
        if( current_navlink.parentNode.nextElementSibling){
          current_navlink.parentNode.nextElementSibling.classList.remove('active')
        }
    }
    else{
      removeActiveClass(section);
    }
  });
};

// To detect which section in the viewPort while Scrolling the window
window.addEventListener("scroll", activateSection);

/**
 * End Main Functions
 **/
/* Navigation Part */

/* there is a property in the css make it much easier lets start with it*/

const links = document.querySelectorAll("section");

links.forEach((item)=>{
  item.addEventListener("click",function(clk)
  {
    clk.preventDefault();
    let style=document.getElementById(item.getAttribute("data-nav"))
    style.scrollIntoView({behavior:"smooth"});
  });
});

/*end the Navigation part*/

