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

//         function calculateRevenue() {
//             const area = document.getElementById('areaSelect').value;
//             const bedrooms = document.getElementById('bedroomsSelect').value;
//             const furnishing = document.getElementById('furnishingSelect').value;

//             if (area && bedrooms && furnishing) {
//                 alert(`Calculating revenue for: \nArea: ${area}\nBedrooms: ${bedrooms}\nFurnishing: ${furnishing}`);
//             } else {
//                 alert('Please select all options to estimate the revenue.');
//             }
//         }

function sendToWhatsApp() {
  // Capture form data
  var area = document.getElementById("areaSelect").value;
  var bedrooms = document.getElementById("bedroomsSelect").value;
  var furnishing = document.getElementById("furnishingSelect").value;

  // Validate that the user has selected all fields
  if (area && bedrooms && furnishing) {
      // Construct the WhatsApp message
      var message = `Area: ${area}%0A` + 
                    `Bedrooms: ${bedrooms}%0A` + 
                    `Furnishing: ${furnishing}`;

      // WhatsApp API link
      var phoneNumber = "7593968558"; // Replace with the recipient's phone number
      var whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

      // Open WhatsApp with the pre-filled message
      window.open(whatsappLink, '_blank');
  } else {
      alert("Please fill in all the fields.");
  }
}