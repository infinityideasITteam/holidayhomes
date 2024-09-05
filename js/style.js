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

        function calculateRevenue() {
            const area = document.getElementById('areaSelect').value;
            const bedrooms = document.getElementById('bedroomsSelect').value;
            const furnishing = document.getElementById('furnishingSelect').value;

            if (area && bedrooms && furnishing) {
                alert(`Calculating revenue for: \nArea: ${area}\nBedrooms: ${bedrooms}\nFurnishing: ${furnishing}`);
            } else {
                alert('Please select all options to estimate the revenue.');
            }
        }