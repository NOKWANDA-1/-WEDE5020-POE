
// location: [latitude, longitude]
const locationCoords = [-25.47448, 30.97033];

// the map
const map = L.map('map').setView(locationCoords, 13);

//  Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

//  a marker with popup
L.marker(locationCoords)
  .addTo(map)
  .bindPopup('<b>Nokwanda\'s Baked goods</b><br>Come visit us.')
  .openPopup();


function sortMenu() {
  const sortValue = document.getElementById("sort-price").value;
  
  // Find all menu sections on the page
  const menuLists = document.querySelectorAll(".menu-list");

  menuLists.forEach(list => {
    // Get all list items (excluding the <br> tags)
    const items = Array.from(list.querySelectorAll("li"));

    // Skip sorting if default is selected
    if (sortValue === "default") return;

    // Sort items numerically based on data-price attribute
    items.sort((a, b) => {
      const priceA = parseFloat(a.getAttribute("data-price"));
      const priceB = parseFloat(b.getAttribute("data-price"));

      if (sortValue === "high-to-low") {
        return priceB - priceA;
      } else if (sortValue === "low-to-high") {
        return priceA - priceB;
      }
    });

    // Clear list and re-append sorted items with their breaks
    list.innerHTML = "";
    items.forEach(item => {
      list.appendChild(item);
      list.appendChild(document.createElement("br")); 
    });
  });
}

document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    
    
    const interest = document.getElementById('interest').value;
    const chosenDate = document.getElementById('date').value;
    const responseBox = document.getElementById('responseBox');

    // Generate a simulated dynamic response based on selection
    let cost = "Calculated upon request";
    let availability = "Available";

    if (interest === "services") {
        cost = "R150 / hour";
        availability = "Limited slots available for " + chosenDate;
    } else if (interest === "products") {
        cost = "Standard wholesale pricing applies";
        availability = "In Stock";
    } else if (interest === "volunteer") {
        cost = "Free (R0)";
        availability = "Always open!";
    }

    // Display response to the user on the webpage
    responseBox.style.display = "block";
    responseBox.innerHTML = `
        <h3>Enquiry Processing Details</h3>
        <p><strong>Status:</strong> ${availability}</p>
        <p><strong>Estimated Cost:</strong> ${cost}</p>
        <p><em>Your enquiry details have been securely transmitted.</em></p>
    `;
    

});