document.addEventListener('DOMContentLoaded', function () {
  const loadingOverlay = document.getElementById('loading-overlay');
  loadingOverlay.style.opacity = '0';
  setTimeout(() => {
      loadingOverlay.style.display = 'none';
  }, 500); // Adjust the timeout duration if needed
});

// About section Heading and Paragraph Animation
document.addEventListener("DOMContentLoaded", function() {
    // Function to add animation classes
    function animateOnScroll(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const heading = document.getElementById('animatedHeading');
          const paragraph = document.getElementById('animatedParagraph');
          
          heading.classList.add('animate__animated', 'animate__fadeInLeft');
          paragraph.classList.add('animate__animated', 'animate__fadeInRight');
          
          // Stop observing after animation is added
          observer.unobserve(entry.target);
        }
      });
    }

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(animateOnScroll, {
      threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Target the section to observe
    const section = document.getElementById('animateSection');
    observer.observe(section);
  });

//   Speciality section animarions
//Speciality 1
document.addEventListener("DOMContentLoaded", function() {
    // Function to add animation classes
    function animateOnScroll(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const heading = document.getElementById('s1-animates');
          
          heading.classList.add('animate__animated');

          // Set a timeout to add the animation class with a delay
          setTimeout(() => {
            heading.classList.add('animate__fadeInUp');
        }, 500); 

          // Stop observing after animation is added
          observer.unobserve(entry.target);
        }
      });
    }

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(animateOnScroll, {
      threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Target the section to observe
    const section = document.getElementById('s1-animated');
    observer.observe(section);
  });

  //Speciality 2
document.addEventListener("DOMContentLoaded", function() {
    // Function to add animation classes
    function animateOnScroll(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const heading = document.getElementById('s2-animates');
          
          heading.classList.add('animate__animated');

          // Set a timeout to add the animation class with a delay
          setTimeout(() => {
            heading.classList.add('animate__fadeInUp');
        }, 600);

          // Stop observing after animation is added
          observer.unobserve(entry.target);
        }
      });
    }

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(animateOnScroll, {
      threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Target the section to observe
    const section = document.getElementById('s2-animated');
    observer.observe(section);
  });
  //Speciality 3
document.addEventListener("DOMContentLoaded", function() {
    // Function to add animation classes
    function animateOnScroll(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const heading = document.getElementById('s3-animates');
          
          heading.classList.add('animate__animated');

          // Set a timeout to add the animation class with a delay
          setTimeout(() => {
            heading.classList.add('animate__fadeInUp');
        }, 700);

          // Stop observing after animation is added
          observer.unobserve(entry.target);
        }
      });
    }

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(animateOnScroll, {
      threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Target the section to observe
    const section = document.getElementById('s3-animated');
    observer.observe(section);
  });
  //Speciality 4
document.addEventListener("DOMContentLoaded", function() {
    // Function to add animation classes
    function animateOnScroll(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const heading = document.getElementById('s4-animates');
          
          heading.classList.add('animate__animated');

          // Set a timeout to add the animation class with a delay
          setTimeout(() => {
            heading.classList.add('animate__fadeInUp');
        }, 800); 

          // Stop observing after animation is added
          observer.unobserve(entry.target);
        }
      });
    }

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(animateOnScroll, {
      threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Target the section to observe
    const section = document.getElementById('s4-animated');
    observer.observe(section);
  });