function validate(){
    var uname=document.getElementById('uname').value;
    var name=document.getElementById('name').value;
    var email =document.getElementById('email').value;
    var password=document.getElementById('pwrd').value;
    var agree = document.getElementById('agree').checked;

    if(uname === ''){
        alert("please enter your user name");
        return;
    }
    if(name === ''){
        alert("please enter your name");
        return;
    }
    if(email === ''){
        alert("please enter your email");
        return;
    }
    if(password === ''){
        alert("please enter your password");
        return;
    }
    if (agree!=true) {
        alert('Please agree to the terms and conditions');
        return;
    }
    //alert("form submitted successfully")
    return;
}

var form = document.getElementById('myform')

form.addEventListener('submit',function(){
    alert('form submiited')

})


form.addEventListener('reset',function(){
    alert('form resetted')
    
})

