
var reviews = [];

function printToPage() {
  let userReview = document.getElementById("user_review").value;
  // document.getElementById('output').textContent = "User: " + (user_review);
  if (userReview.trim() !== "") {
    // adds to array (appends)
    reviews.push(userReview);
    
    // update the reviews onscreen
    updateDisplay();

    // clear input field
    document.getElementById("user_review").value = "";
  }
}

// function to display user input
function updateDisplay() {
  let review_container = document.getElementById("reviews");
  review_container.innerHTML = "<h3>REVIEWS:</h3>";

  // loop to display the array of strings
  for (var i = 0; i < reviews.length; i++) {
    let review_paragraph = document.createElement("p")
    review_paragraph.textContent = '"' + reviews[i] + '"';
    review_container.appendChild(review_paragraph);
  }

}