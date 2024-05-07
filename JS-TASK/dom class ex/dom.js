//title
document.head.innerHTML="<title>DOM</title>"
// document.body.innerHTML="<p>Hello World</p>" //insert a tag
// document.body.innerHTML+="text"  //insert a text

// //insert a element 
// let tag = document.createElement("h1")  //create a element
// tag.textContent="welcome"               //create a contet=nt
// document.body.append(tag)               // insert a element

// //create a div element

// let div = document.createElement("div") // create a div element
// div.style.width="250px";
// div.style.height="250px";
// div.style.backgroundColor="blue";
// document.body.append(div);

// //insert a content into div

// let divpara = document.createElement("h3")
// divpara.textContent="child";
// divpara.style.color="white";
// div.appendChild(divpara);
// divpara.style.textAlign="center"
// divpara.style.paddingTop="50%";

// //link

// let link=document.createElement("a");
// document.body.append(link)
// link.textContent="google" ;
// link.setAttribute("href","https://www.google.com/");

//get atribute
// console.log(link.getAttribute("href"))
// //alert(link.getAttribute("href"));

// //remove attribute

// link.removeAttribute('href');

//remove element

// link.remove();

// //image
// let img = document.createElement("img");
// img.src="img.jpg"
// document.body.append(img)

// //image style

// img.style.height="300px" ;
// img.style.width="300px";
// img.style.borderRadius="15px"
// img.style.paddingTop="15px"


//prompt addition
//let no1=prompt("Enter a First Number");
//let no2=prompt("Enter a Second Number");

//let sum = (parseInt(no1)+parseInt(no2));

//document.write(sum);
//alert(sum);

//call using id

// let setid = document.createElement("h2");
// setid.id="user";
// document.body.append(setid)
// let doc = document.getElementById("user")

// doc.textContent="id selector"
// document.body.append(doc);
// doc.style.color="blue";


// //class
// let cls = document.getElementsByClassName("city");
// console.log(cls)

// //add using class

// let add=document.createElement("h3");
// add.className="city";
// document.body.append(add);
// add.textContent="added";
// console.log(add)

// //query selector

// let queryse = document.querySelector("h3")
// queryse.style.color="blue"


// //query selector all

// let all = document.querySelectorAll("h3");
// console.log(all);

// for(let i=0;i<all.length; i++){
//     all[i].style.color="yellow"
// }


//diff b/w text conntent and inner text

let tag = document.getElementsByClassName("ol");

console.log(tag[0].textContent);
console.log(tag[0].innerText);

//select child element
let child=document.querySelector(".child");
let parent=document.querySelector(".parent");

console.log(child.parentElement)
console.log(parent.childNodes)

//select the orginal element
let orginal =document.querySelector(".orginal");










