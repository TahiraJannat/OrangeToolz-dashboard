function ShowMyDiv(Obj) {
  let elements = document.getElementsByTagName("div");
  for (let i = 0; i < elements.length; i++)
    if (elements[i].className == "tabcontent")
      elements[i].style.display = "none";

  document.getElementById(Obj.rel).style.display = "block";
  //------------------------------------

  let ulElements = document.getElementById("tab-ul");
  let liElements = ulElements.getElementsByTagName("li");
  for (let i = 0; i < liElements.length; i++) liElements[i].className = "";

  Obj.parentNode.className = "selected";
}

function dropDown(e) {
  let dropdownContent = e.nextElementSibling;
  if (e.classList.contains("active-dropdown")) {
    dropdownContent.style.maxHeight = 0;
    e.classList.remove("active-dropdown");
  } else {
    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
    e.classList.add("active-dropdown");
  }
}

//Activating Currnet Cards and Delete Icon
let cardsParent = document.getElementById("cards-parent");
// console.log(`💩 ~ file: index.js ~ line 38 ~ cardsParent`, cardsParent);
let btns = cardsParent.getElementsByClassName("card-single");

let dltBtns = cardsParent.getElementsByClassName("delete-btns");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let currentCards = document.getElementsByClassName("middle-card");
    let dltButtnsAddedClass = document.getElementsByClassName("icon-bg-active");

    let dltButtnsIconsAddedClass =
      document.getElementsByClassName("icon-active");

    //Removing delete icons class
    if (dltButtnsAddedClass[0]) {
      dltButtnsAddedClass[0].className =
        dltButtnsAddedClass[0].className.replace(" icon-bg-active", "");

      dltButtnsIconsAddedClass[0].className =
        dltButtnsIconsAddedClass[0].className.replace(" icon-active", "");
    }
    // removing cards class
    if (currentCards[0]) {
      currentCards[0].className = currentCards[0].className.replace(
        " middle-card",
        ""
      );
    }
    // console.log(
    //   `💩 ~ file: index.js ~ line 45 ~ currentCards`,
    //   this.childNodes[3]?.childNodes[1]?.childNodes[0]
    // );

    this.className += " middle-card"; //ading cards class
    this.childNodes[3].childNodes[1].className += " icon-bg-active"; //adding delete spans class
    this.childNodes[3].childNodes[1].childNodes[0].className += " icon-active"; //adding delete icons class
  });
}
