const container = document.querySelector('.container');
const headingSpan2 = document.querySelector('.heading-span-2');

document.querySelector('.signup-btn').addEventListener("click", () =>{
    container.classList.add('change');
    setTimeout(() =>{
        headingSpan2.textContent = 'Up'
    },2000)
})

document.querySelector('.signin-btn').addEventListener("click", () =>{
    container.classList.remove('change');
    setTimeout(() =>{
        headingSpan2.textContent = 'In'
    },2000)

});


const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const error = (input, message) => {
    const inputWrapper = input.parentElement;
    inputWrapper.className = "form-input-wrapper error ";
    inputWrapper.querySelector('.message').textContent = message;
}

const checkRequiredFields = (inputArr) => {
    inputArr.forEach((input) => {
        if(input.value.trim() === '') {
            error(input, `${input.id} is required`)
        }else {
            //Success
        }
    })
}