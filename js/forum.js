var splide = new Splide( '.splide', {
    perPage: 3,
    gap    : '1rem',
    breakpoints: {
      640: {
        perPage: 2,
        gap    : '.5rem',
        
        
      },
      480: {
        perPage: 1,
        gap    : '.3rem',
        
      },
    },
  } );
  
  
  splide.mount();
  
  
  
  
  $(function(){ 
          // Get all the buttons with class name 'like-review'
    const likeReviewButtons = document.querySelectorAll('.like-review');
    
    // Add click event listener to each button
    likeReviewButtons.forEach(button => {
      button.addEventListener('click', () => {
  
        button.innerHTML = '<i class="fa fa-heart" aria-hidden="true"></i> You liked this';
        
        const icon = button.querySelector('.fa-heart');
        icon.classList.add('animate-like');
      });
    });
     });
  
     
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btn_addNewPost");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}  