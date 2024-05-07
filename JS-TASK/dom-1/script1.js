alert("welcome")
let country = prompt("Enter your country")
let age=prompt("enter your age")




if (age >= 18 && country == "india"){
    let print =document.createElement('h1');
    print.textContent=("you are eligibe");
    document.body.append(print); 
    print.style.color="blue";
}
else{
    let print2 =document.createElement('h5') ;
    print2.textContent=("you are not eligibe");
    document.body.append(print2); 
    print2.style.color='brown';
}

