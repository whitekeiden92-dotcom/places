// Constructor
function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

// Prototype method
Place.prototype.getDetails = function () {
  return `
    <h3>${this.location}</h3>
    <p><strong>Landmarks:</strong> ${this.landmarks}</p>
    <p><strong>Time of Year:</strong> ${this.timeOfYear}</p>
    <p><strong>Notes:</strong> ${this.notes}</p>
  `;
};

// ================= UI LOGIC =================

const places = [];

document.getElementById("placeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const location = document.getElementById("location").value;
  const landmarks = document.getElementById("landmarks").value;
  const season = document.getElementById("season").value;
  const notes = document.getElementById("notes").value;

  const newPlace = new Place(location, landmarks, season, notes);
  places.push(newPlace);

  displayPlaces();
  this.reset();
});

function displayPlaces() {
  const list = document.getElementById("placesList");
  list.innerHTML = "";

  places.forEach(function (place, index) {
    const li = document.createElement("li");
    li.textContent = place.location;
    li.addEventListener("click", function () {
      showDetails(index);
    });
    list.appendChild(li);
  });
}

function showDetails(index) {
  document.getElementById("details").innerHTML =
    places[index].getDetails();
}

 