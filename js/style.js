window.onscroll = function() {myFunction()};
        var navbar = document.querySelector(".navbar");
        var sticky = navbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
        }
function sendToWhatsApp() {
  // Capture form data
  var area = document.getElementById("areaSelect").value;
  var bedrooms = document.getElementById("bedroomsSelect").value;
  var property = document.getElementById("propertyType").value;
  var furnishing = document.getElementById("furnishingSelect").value;
  

  // Validate that the user has selected all fields
  if (area && bedrooms && property && furnishing) {
      // Construct the WhatsApp message
      var message = `Area: ${area}%0A` + 
                    `Bedrooms: ${bedrooms}%0A` + 
                    `Property: ${property}%0A` + 
                    `Furnishing: ${furnishing}`;

      // WhatsApp API link
      var phoneNumber = "971505875495"; // Replace with the recipient's phone number
      var whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

      // Open WhatsApp with the pre-filled message
      window.open(whatsappLink, '_blank');
  } else {
      alert("Please fill in all the fields.");
  }
}

function getInto() {
    // Capture form data
    var namee = document.getElementById("namee").value;
    var email = document.getElementById("email").value;
    var message1 = document.getElementById("message1").value;
  
    // Validate that the user has selected all fields
    if (namee && email && message1) {
        // Construct the WhatsApp message
        var message = `Get into Touch %0A Name: ${namee}%0A` + 
                      `Email: ${email}%0A` + 
                      `Message: ${message1}`;
  
        // WhatsApp API link
        var phoneNumber = "971505875495"; // Replace with the recipient's phone number
        var whatsappMess = `https://wa.me/${phoneNumber}?text=${message}`;
  
        // Open WhatsApp with the pre-filled message
        window.open(whatsappMess, '_blank');
    } else {
        alert("Please fill in all the fields.");
    }
  }