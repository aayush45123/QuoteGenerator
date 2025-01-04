const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

// Fetch a random quote from the ZenQuotes API
async function fetchQuote() {
  try {
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random");

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    quoteElement.textContent = `"${data[0].q}"`;
    authorElement.textContent = `- ${data[0].a}`;
  } catch (error) {
    quoteElement.textContent = "Failed to load quote. Please try again.";
    authorElement.textContent = "";
    console.error("Error fetching quote:", error);
  }
}

// Event listener for button click
newQuoteButton.addEventListener("click", fetchQuote);

// Fetch and display the first quote on page load
fetchQuote();
