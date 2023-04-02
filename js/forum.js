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
  
     
  