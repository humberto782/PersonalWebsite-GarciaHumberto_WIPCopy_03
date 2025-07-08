//Call Function querySelector of document and Store into variables to select through the DOM
const dropdownToggle = document.querySelector("#dropdown-toggle");
const dropdownMenu = document.querySelector("#dropdown-menu");

//Call Function addEventListener/event to occur when the dropdownToggle is clicked once
dropdownToggle.addEventListener("click", function() {
    //Call Function toggle with Property of variables to handle its style/toggle functionality
    dropdownMenu.classList.toggle("open");
});

//Call Function addEventListener/event to occur when anywhere in the document is clicked once
document.addEventListener("click", function(evt) {//the "e"/"evt" event parameter is being captured, accessing the event object properties since its passed but not captured by default
    //If Statement
    if (!dropdownToggle.contains(evt.target) && !dropdownMenu.contains(evt.target))
    {
        //Call Function remove with Property of variables to handle its style
        dropdownMenu.classList.remove("open");
    }
});

//Call Function addEventListener/event to occur when you resize the window
window.addEventListener("resize", closeDropdownMenu);

//Function closeDropdownMenu to close/remove its open menu, handled by resize of window
function closeDropdownMenu()
{
    //If Statement
    if (window.innerWidth > 500)
    {
        //Call Function remove with Property of variables to handle its style
        dropdownMenu.classList.remove("open");
    }
};