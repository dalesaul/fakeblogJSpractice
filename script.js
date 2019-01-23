// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

document.querySelector(".article__header").innerHTML = "Welcome to the Dale blog";
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
const artHeadImp = document.querySelectorAll(".article__header")
for (let i = 0; i < artHeadImp.length; i++){
artHeadImp[i].classList="article__header important";
console.log(artHeadImp[i]);
}
// Obtain a reference the element with a class of dashed and remove it.
const dashedThing = document.querySelector(".dashed")
dashedThing.classList.remove("dashed");
console.log(dashedThing);
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
const goldFooter = document.querySelector(".article__footer")
goldFooter.classList.add("goldenrod")
console.log(goldFooter);