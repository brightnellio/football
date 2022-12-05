const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const email = document.getElementById('mail');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpass');
// const country = document.getElementById('country');
// const city = document.getElementById('city');
// const contact = document.getElementById('contact');
// const image = document.getElementById('image');

form.addEventListener('next', (e)=>{
	addCustomer(e);
});

form.addEventListener('submit', (e)=>{
	addCustomer(e);
});
	// trim to remove the whitespaces
const addCustomer = (e) =>{
	const firstnameValue = firstname.value.trim();
	const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
    const passValue = password.value.trim();
	const cpassValue = cpassword.value.trim();
    // const countryValue = country.value.trim();
    // const cityValue = city.value.trim();
    // const contactValue = contact.value.trim();
    // const imageValue = image.value.trim();


	if(firstnameValue === ''){
		setEmptyFor(firstname, 'First name cannot be blank');
		e.preventDefault();
	}else if(!isName(firstnameValue)){
		setEmptyFor(firstname, 'Format Invalid: Eg. Joshua');
		e.preventDefault();
	}
	else{
		setNotEmptyFor(firstname);
	}

	if(lastnameValue === ''){
		setEmptyFor(lastname, 'Last name cannot be blank');
		e.preventDefault();
	}else if(!isName(lastnameValue)){
		setEmptyFor(lastname, 'Format Invalid: Eg. Opoku');
		e.preventDefault();
	}
	else{
		setNotEmptyFor(lastname);
	}


	if(emailValue === '') {
		setEmptyFor(email, 'Email cannot be blank');
		e.preventDefault();
	} else if (!isEmail(emailValue)) {
		setEmptyFor(email, 'Format Invalid: Eg. wulffy@gmail.com');
		e.preventDefault();
	} else {
		setNotEmptyFor(email);
	}

	if(passValue === '') {
		setEmptyFor(password, 'Password cannot be blank');
		e.preventDefault();
	} else if(!isPassword(passValue)){
		setEmptyFor(password, '8 or more include:0-9 | A-Z | a-z | #?!@$%^&*-');
		e.preventDefault();
	}else {
		setNotEmptyFor(password);
	}

	if(cpassValue === ''){
		setEmptyFor(cpassword, 'Re-password cannot be blank');
		e.preventDefault();
	} else if(passValue !== cpassValue){
		setEmptyFor(cpassword, 'Passwords do not match');
		e.preventDefault();
	} else{
		setNotEmptyFor(cpassword);
	}	

	// if(countryValue === ''){
	// 	setEmptyFor(country, 'Country cannot be blank');
	// 	e.preventDefault();
	// }else if(!isCountry(countryValue)){
	// 	setEmptyFor(country, 'Format not valid: Eg. Ghana');
	// 	e.preventDefault();
	// }else{
	// 	setNotEmptyFor(country);
	// }

	// if(cityValue === ''){
	// 	setEmptyFor(city, 'City cannot be blank');
	// 	e.preventDefault();
	// }else if(!isCity(cityValue)){
	// 	setEmptyFor(city, 'Format not valid: Eg. Accra');
	// 	e.preventDefault();
	// }else{
	// 	setNotEmptyFor(city);
	// }

	// if(contactValue === ''){
	// 	setEmptyFor(contact, 'Phone cannot be blank');
	// 	e.preventDefault();
	// } else if(!isContact(contactValue)){
	// 	setEmptyFor(contact, 'Format not valid: Eg. 0123456789');
	// 	e.preventDefault();
	// } else{
	// 	setNotEmptyFor(contact);
	// }

	// if(imageValue === ''){
	// 	setEmptyFor(image, 'Select Product Image');
	// 	e.preventDefault();
	// } else{
	// 	setNotEmptyFor(image);
	// }

	if(firstnameValue !== '' && lastnameValue != '' && emailValue != '' && passValue !== '' && cpassValue !== '' && passValue === cpassValue && countryValue !== '' && cityValue != '' && contactValue !== '' && imageValue !== '' ){
		Loader();
		Loader.show();
		alert("Format Acceptable");
	}
}	
	


function setEmptyFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setNotEmptyFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isName(firstname) {
	return  /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*$/.test(firstname);
}

function isName(lastname) {
	return  /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*$/.test(lastname);
}

function isEmail(email) {
	return /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
}

function isPassword(password) {
	return  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
}

// function isCountry(country) {
// 	return  /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*$/.test(country);
// }

// function isCity(city) {
// 	return  /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*$/.test(city);
// }

// function isContact(contact) {
// 	return   /^\+?([0-9]{1,3})\)?([\d ]{9,15})$/.test(contact);
// }


