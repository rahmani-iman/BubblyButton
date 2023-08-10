const animateButton = (e) => {

    e.preventDefault;

    //reset animation
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },1000);
  };
  
  const bubblyButtons = document.getElementsByClassName('bubbly_button');
  
  for (let i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}