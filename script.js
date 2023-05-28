const sendBtn = document.querySelector(".email-btn");
const errorMsg = document.querySelector(".error-msg");
const themeChanger= document.querySelector(".checkbox");
const Root = document.querySelector(':root');
const inputEl = document.querySelector(".input-field");
themeChanger.addEventListener('click', ()=>{
  if(themeChanger.checked)
    lightTheme();
  else
    darkTheme();
});
function lightTheme(){
  Root.style.setProperty('--main', '#ffffff');
  Root.style.setProperty('--dark-blue', '#ffffff');
  Root.style.setProperty('--testimonials', '#e6dddd');
  Root.style.setProperty('--footer', "#070439");
  document.querySelector(".logo").style.filter = "invert(100%)";
  document.querySelector(".menu").style.color = 'var(--black)';
  document.querySelector("header").style.backgroundImage = "url('images/illustration-light.svg')";
  document.querySelector(".intro-section").style.color = 'var(--black)';
  document.querySelector(".features").style.filter = "invert(100%)";
  document.querySelector(".productive-img img").src = './images/illustration-productive-light.svg';
  document.querySelector(".productive-info").style.color = 'var(--black)';
  document.querySelector(".productive-link a").style.color = 'var(--blue)';
  document.querySelector(".testimonials").style.color = 'var(--black)';
  document.querySelector(".early-access").style.backgroundColor = '#585989';
  document.querySelector(".early-access").style.color = 'var(--white)';
}
function darkTheme(){
  Root.style.setProperty('--main', '#181f2a');
  Root.style.setProperty('--dark-blue', '#1c2431');
  Root.style.setProperty('--testimonials', '#202a3c');
  Root.style.setProperty('--footer', "#0b1523");
  document.querySelector(".logo").style.filter = "invert(0%)";
  document.querySelector(".menu").style.color = 'var(--white)';
  document.querySelector("header").style.backgroundImage = "url('images/illustration-intro.png')";
  document.querySelector(".intro-section").style.color = 'var(--white)';
  document.querySelector(".features").style.filter = "invert(0%)";
  document.querySelector(".productive-img img").src = './images/illustration-stay-productive.png';
  document.querySelector(".productive-info").style.color = 'var(--white)';
  document.querySelector(".productive-link a").style.color = 'var(--cyan)';
  document.querySelector(".testimonials").style.color = 'var(--white)';
  document.querySelector(".early-access").style.backgroundColor = 'var(--dark-blue)';
}
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const timeoutFunc = setTimeout(() => {
  errorMsg.style.display = "none";
}, 3000);

sendBtn.addEventListener("click", function () {
  if (inputEl.value.length === 0 || !inputEl.value.match(emailValidation)) {
    errorMsg.style.display = "inline";
    errorMsg.textContent = "Please enter a valid email address";
    return timeoutFunc;
  } else {
    errorMsg.style.display = "inline";
    errorMsg.style.color = "green";
    errorMsg.textContent = "Thank you for subscribing to our newsletter!";
    return timeoutFunc;
  }
});

