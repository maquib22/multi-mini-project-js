const singUpBtn = document.querySelector('.signup-btn');
const singInBtn = document.querySelector('.signin-btn');
const formsWrapper = document.querySelector('.form-wrapper');


singUpBtn.addEventListener('click', (e) => {
    e.preventDefault()    
    formsWrapper.classList.add('change');
})

singInBtn.addEventListener('click', (e) => {
    e.preventDefault()
    formsWrapper.classList.remove('change');

})