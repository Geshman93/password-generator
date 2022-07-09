const btn1 = document.querySelector('#generate');

btn1.addEventListener('click', () => {

    let passwordLength = document.querySelector('#passwordLenght').value;
    let output = document.querySelector('.output-feild');
    let charSet = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()':;.,></\||ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * charSet.length);
        password += charSet.substring(randomNumber, randomNumber + 1);
    }

    output.value = password;


});

const remove = () => {
    let output = document.querySelector('.output-feild');
    output.value = '';
}

const btn2 = document.querySelector('#copy');

btn2.addEventListener('click', () => {

    let output = document.querySelector('.output-feild').value;

    if (output.length == 0) {
        alert("you haven't generated any password");
    } else {
        navigator.clipboard.writeText(output);
        alert('password copied!')
        remove()
    }

});
