const email = document.getElementById('mail');
const password = document.getElementById('password');


form.addEventListener('submit', (e)=>{
    loginValidate(e);

});

const loginValidate = (e) =>{
    const emailValue = email.value.trim();
    const passValue = password.value.trim();

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
    if(emailValue != '' && passValue !== '' && isPassword(emailValue)){
		Loader();
		Loader.show();
		alert("Format Acceptable. Login Success");
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

function isEmail(email) {
	return  /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
}

function isPassword(password) {
	return  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
}