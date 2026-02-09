# Places You’ve Been

## Author
Keiden wainainai

---

## Project Description
Places You’ve Been is a JavaScript web application that allows users to record and view places they have visited. Each place is created as an object using a constructor function and contains information such as location, landmarks, time of year, and notes. When a user clicks on a place name, the full details of that place are displayed.

This project focuses on practicing JavaScript objects, constructors, prototypes, and basic test-driven development concepts.

---

## Technologies Used
- HTML
- CSS
- JavaScript

---

## Setup Instructions
1. Clone or download the repository
2. Open the project folder
3. Open `index.html` in a web browser
4. Fill in the form to add a place
5. Click a place name to view its details

---

## Business Logic
- A `Place` constructor is used to create place objects
- Each place object contains:
  - location
  - landmarks
  - timeOfYear
  - notes
- A prototype method `getDetails()` returns formatted place details
- All place objects are stored in an array

---

## Tests (Pseudo Code)

### Describe: Place()
Test: It should create a Place object with correct properties

Code:
```javascript
const place = new Place("Nairobi", "CBD", "July", "Busy city");
