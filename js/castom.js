"use strict";

let btn_sign_up = document.querySelector(".btn-sign-up");
let btn_sign_Ip = document.querySelector(".btn-sign-Ip");

let logIn = document.querySelector(".LogIn");
let signUP = document.querySelector(".signUP");

let click_SignIn = document.querySelector(".Click_SignIn");
let click_SignUn = document.querySelector(".Click_SignUn");

let body = document.getElementById("body");
let log_sign = document.querySelector(".Log-sign");

let login_sign_box = document.querySelector(".login-sign-box");

btn_sign_up.addEventListener("click", function() {

	signUP.style.marginLeft = "50%";
	signUP.style.zIndex = "2";
	logIn.style.marginLeft = "50%";
	logIn.style.zIndex = "1";
	login_sign_box.style.marginLeft = "50%";

	signUP.style.opacity = "1";
	logIn.style.opacity = "0";

	click_SignIn.style.opacity = "0";
	click_SignIn.style.transition = "0.5s";

	click_SignUn.style.opacity = "1";
	click_SignUn.style.transition = "0.5s";

	body.style.backgroundColor = "#D92F40";
	log_sign.style.backgroundColor = "#f55f6e";

});


btn_sign_Ip.addEventListener("click", function() {

	logIn.style.marginLeft = "0%";
	logIn.style.zIndex = "2";
	signUP.style.marginLeft = "0%";
	signUP.style.zIndex = "1";
	login_sign_box.style.marginLeft = "0%";

	logIn.style.opacity = "1";
	signUP.style.opacity = "0";

	click_SignIn.style.opacity = "1";
	click_SignIn.style.transition = "0.5s";

	click_SignUn.style.opacity = "0";
	click_SignUn.style.transition = "0.5s";
	

	body.style.backgroundColor = "#0287C3";
	log_sign.style.backgroundColor = "#31ABE1";

});



// Login Site Development

let Login_Username = "admin";
let Login_Password = "admin";


let form = document.getElementById("Form"); 

let login_Username_input = document.getElementById("Login_Username"); 
let login_Password_input = document.getElementById("Login_Password"); 

let login_btn = document.getElementById("Login_btn"); 

let close_icon = document.querySelector("#close");
let ok_icon = document.querySelector("#ok");

let close_icon_p = document.querySelector("#close_p");
let ok_icon_p = document.querySelector("#ok_p");



form.addEventListener("input", function() {

	let username_value = login_Username_input.value;
	let password_value = login_Password_input.value;

	if ( username_value == Login_Username ) {
		login_Username_input.style.border = "1px solid green";
		login_Username_input.innerHTML = username_value;
		ok_icon.style.display = "block";
		close_icon.style.display = "none";
	} else {
		login_Username_input.style.border = "1px solid red";
		ok_icon.style.display = "none";
		close_icon.style.display = "block";
	}

	if ( password_value == Login_Password ) {
		login_Password_input.style.border = "1px solid green";
		login_Password_input.innerHTML = password_value;
		ok_icon_p.style.display = "block";
		close_icon_p.style.display = "none";
	} else {
		login_Password_input.style.border = "1px solid red";
		ok_icon_p.style.display = "none";
		close_icon_p.style.display = "block";
	}

	if (username_value == "") {
		login_Username_input.style.border = "1px solid #333";
		ok_icon.style.display = "none";
		close_icon.style.display = "none";
	}
	if (password_value == "") {
		login_Password_input.style.border = "1px solid #333";
		ok_icon_p.style.display = "none";
		close_icon_p.style.display = "none";
	}

});




// Sign up input Site

let username_signUp = document.getElementById("Username_up");
let emailAddress = document.getElementById("Email_Address_up");
let password_signUp = document.getElementById("Password_up");
let c_password_signUp = document.getElementById("c_Password_up");

let signUp_form = document.getElementById("signUp_form");

let user_up_x = document.getElementById("user-up");
let user_up_ok = document.getElementById("user-up-2");

signUp_form.addEventListener("input", function() {

	let user_sign_value = username_signUp.value;
	let user_sign_Length = user_sign_value.length;

	if ( user_sign_Length >= 3 && user_sign_Length <= 15 ) {
		username_signUp.style.border = "1px solid green";
		user_up_x.style.display = "none";
		user_up_ok.style.display = "block";
	} else {
		username_signUp.style.border = "1px solid red";
		user_up_x.style.display = "block";
		user_up_ok.style.display = "none";
	}

	if (user_sign_value == "") {
		username_signUp.style.border = "1px solid #333";
		user_up_x.style.display = "none";
		user_up_ok.style.display = "none";
	}

	let email_value = emailAddress.value;
	let email_up_x = document.getElementById("email-up");
	let email_up_ok = document.getElementById("email-up-2");
	let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	if (email_value.match(regExp)) {
		emailAddress.style.border = "1px solid green";
		email_up_x.style.display = "none";
		email_up_ok.style.display = "block";
	} else {
		emailAddress.style.border = "1px solid red";
		email_up_x.style.display = "block";
		email_up_ok.style.display = "none";
	}
	if (email_value == "") {
		emailAddress.style.border = "1px solid #333";
		email_up_x.style.display = "none";
		email_up_ok.style.display = "none";
	}


	let password_sig_value = password_signUp.value;
	let password_sig_length = password_sig_value.length;
	let password_up_x = document.getElementById("password-up");
	let password_up_ok = document.getElementById("password-up-2");

	if (password_sig_length >= 8) {
		password_signUp.style.border = "1px solid green";
		password_up_x.style.display = "none";
		password_up_ok.style.display = "block";
	} else {
		password_signUp.style.border = "1px solid red";
		password_up_x.style.display = "block";
		password_up_ok.style.display = "none";
	}
	if (password_sig_value == "") {
		password_signUp.style.border = "1px solid #333";
		password_up_x.style.display = "none";
		password_up_ok.style.display = "none";
	}


	let c_password_value = c_password_signUp.value;
	let c_password_length = c_password_value.length;
	let c_password_up_x = document.getElementById("c_password-up");
	let c_password_up_ok = document.getElementById("c_password-up-2");

	if (c_password_value == password_sig_value) {
		c_password_signUp.style.border = "1px solid green";
		c_password_up_x.style.display = "none";
		c_password_up_ok.style.display = "block";
	} else {
		c_password_signUp.style.border = "1px solid red";
		c_password_up_x.style.display = "block";
		c_password_up_ok.style.display = "none";
	}
	if (c_password_value == "") {
		c_password_signUp.style.border = "1px solid #333";
		c_password_up_x.style.display = "none";
		c_password_up_ok.style.display = "none";
	}

})