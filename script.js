// THEME JAVASCRIPT
const bodyEl = document.body;
const switchEl = document.querySelector(".switch__ball");
const activeTheme = localStorage.getItem("theme");

if (activeTheme) {
  bodyEl.classList.add("dark");
}
switchEl.addEventListener("click", function () {
  bodyEl.classList.toggle("dark");
  if (bodyEl.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
  }
});

// THEME JAVASCRIPT ENDS

// NAVIGATION SCROLLING JAVASCRIPT START
const isScrolling = () => {
  const headerEl = document.querySelector(".primary-header" );
  let windowPosition = window.scrollY > 20;
  headerEl.classList.toggle("active", windowPosition);
};
window.addEventListener("scroll", isScrolling);
// NAVIGATION SCROLLING JAVASCRIPT START

setTimeout(function(){
  $('.loader_bg').fadeToggle();
},1000);