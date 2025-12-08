const indicator = document.querySelector(".scroll-indicator .progress"); //selects elements with scrollindicator 

function updateScrollIndicator() {
    // why document.body.scrolltop is used , because some old browsers accept the this only.. 
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // this ensures cross-browser compatibility...
  const scrollHeight =
  //document.documentElement.scrollHeight means full size height..
  //document.documentElement.clientHeight means visible screen height...
  //scrollheight calculates maximum scrollable distance...

    document.documentElement.scrollHeight -document.documentElement.clientHeight;

  // Prevent division by zero
  const scrolled = scrollHeight > 0
    ? (scrollTop / scrollHeight) * 100
    : 0;

  indicator.style.width = `${scrolled}%`; // shows how much  progress bar has filled on scrolling...
}

// Update on scroll
window.addEventListener("scroll", updateScrollIndicator); // when user will starts scrolling the updatescrollindicator function will start running..

// Update when window resizes
window.addEventListener("resize", updateScrollIndicator); // when the user will resize the window, then udatescrollindicator function will run..

// Run once on page load
updateScrollIndicator();




