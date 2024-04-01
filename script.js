const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

// show input error message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.classList.add("error");
    const small = formControl.querySelector("small");
    small.innerText = message;
}

//check required fields
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if(input.value.trim()===""){
            showError(input,`${getFieldName(input.id)} is required`);
        }else{
            showSuccess(input)
        }
    });
}

// check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input.id)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showError(input,`${getFieldName(input.id)} must be less than ${max} characters`);
    }else{
        showSuccess(input);
    }
}

// get fieldname
function getFieldName(input){
    return input.charAt(0).toUpperCase() + input.slice(1);
}


// check valid email
function checkEmail(input){
    const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(res.test(input.value)){
        showSuccess(input);
    }else{
        showError(input,"Email is not vaild")
    }
}

// show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.classList.add("success");

}

// check password match

function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,"Password do not match")
    }
}


// event listener
form.addEventListener('submit', function(e){
    e.preventDefault();
    // if(username.value === ''){
    //     showError(username,'Username is required');
    // }else{
    //     showSuccess(username);
    // }

    // if(email.value === ''){
    //     showError(email,'Email is required');
    // }else if(!isValidEmail(email.value)){
    //     showError(email,"Email is not valid");
    // }else{
    //     showSuccess(email);
    // }

    // if(password.value === ''){
    //     showError(password,'Password is required');
    // }else{
    //     showSuccess(password);
    // }
    
    // if(password2.value === ''){
    //     showError(password2,'Password 2 is required');
    // }else{
    //     showSuccess(password2);
    // }
    checkRequired([username,email,password,password2]);
    checkLength(username, 3, 15);
    checkLength(password,6, 25);
    checkEmail(email);
    checkPasswordMatch(password,password2);
});