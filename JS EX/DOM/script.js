/*document.head.innerHTML="<title>DOM-HEAD</title>"
//document.body.innerHTML="<p>hello  world</p>"   //insert a tag
//document.body.innerHTML += "hai" //insert a text
let tag = document.createElement('h1')
document.body.append(tag)
tag.textContent = "welcome"

//create div element
let div = document.createElement('div')
div.style.width="150px"
div.style.height="150px"
div.style.backgroundColor="blue";
document.body.append(div)

let divpara =document.createElement("p");
divpara.textContent="Dhinesh";
divpara.style.color='white';
div.appendChild(divpara);   //insert into parent
//divpara.style.textAlign="center";
divpara.style.padding="40%";



//link
let link=document.createElement("a");
document.body.append(link);
link.textContent="home";
link.setAttribute("href","https://www.google.com/");

//get attribute
console.log(link.getAttribute("href"));
//alert(link.getAttribute("href"));

//remove attribute
link.removeAttribute('href');


//remove element
link.remove();

//image
let img = document.createElement("img");
img.src="img.jpg";
//image style
img.style.width="300px";
img.style.height="300px"
img.style.paddingTop="20px"
img.style.borderRadius="10%"
document.body.append(img);
img.style.paddingLeft="10px"

let no1 = prompt("enter first number");
let no2 = prompt("enter second number");

let sum = (parseInt(no1)+parseInt(no2));
alert(sum);
*/




///  call  using id

/*let input =document.createElement('p')
input.id="username";
document.body.append(input);
let doc = document.getElementById("username")

doc.textContent="this is contetnt"
document.body.append(doc);
doc.style.color="blue" */

////

//var doc1 = document.getElementsByClassName("class1");
//console.log(doc1);






//     query selector 
//let query=document.querySelector("h1")
//query.style.color="blue";


//  query seletor all
/*

let all=document.querySelectorAll("h1")
console.log(all);

for(let i = 0; i<all.length;i++){
    all[i].style.backgroundcolor="blue";
}
*/








/*
let tag=document.getElementsByClassName("ol");
console.log(tag[0].textContent);
console.log(tag[0].innerText);
*/


//select child element
let child=document.querySelector(".child");
let parent=document.querySelector(".parent");

console.log(child.parentElement)
console.log(parent.childNodes)

//select the orginal element
let orginal =document.querySelector(".orginal");

//clone the element modify the clone

let clone = orginal.cloneNode(true);
clone.textContent+="new";
clone.classList.add
















