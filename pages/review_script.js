// empty array to store user reviews
var reviews = [];

function printToPage() {
  let userReview = document.getElementById("user_review").value;
  // if review is not empty
  if (userReview.trim() !== "") {
    // adds to array (appends)
    reviews.push(userReview);
    
    // update the reviews onscreen
    updateDisplay();

    // clear input field
    document.getElementById("user_review").value = "";
    alert("thanks for the review! (boolean)")
  } else {
    // if review is empty (this is technically boolean. The best kind of boolean! Better than boolean!)
    alert("No empty reviews! (boolean)")
  }
}

// function to display user input
function updateDisplay() {
  let review_container = document.getElementById("reviews");
  review_container.innerHTML = "<h3>REVIEWS:</h3>";

  // loop to display the array of strings
  for (var i = 0; i < reviews.length; i++) {
    // creates new paragraph element
    let review_paragraph = document.createElement("p")
    // adds quotation marks and appends to page
    review_paragraph.textContent = '"' + reviews[i] + '"';
    review_container.appendChild(review_paragraph);
  }

}