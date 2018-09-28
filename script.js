//delcare default vars
const acc = document.getElementsByClassName("accordion");

//loop through all accordion buttons
for (let i = 0; i < acc.length; i++) {

  //trigger an event after click
  acc[i].addEventListener("click", function() {

    //add in the active class
    this.classList.toggle("active");
    //select sibling element
    let panel = this.nextElementSibling;
    //if sibling is open, close it, if closed, open it
    if (panel.style.maxHeight){
      //panel is open open
      panel.style.maxHeight = null;

    } else {
      //panel is closed
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
