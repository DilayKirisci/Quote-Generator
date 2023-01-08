// get new quote

function getNewQuote() {
	const quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

	if (!quotes.author) {
		author.textContent = "Unknown";
	} else {
		author.textContent = quotes.author;
	}
	if (quotes.text.length > 150) {
		quote.classList.add("long-quote");
	} else {
		quote.classList.remove("long-quote");
	}

	quote.textContent = quotes.text;
}

// store the quotes

let apiQuotes = [];

// Get quotes from API //

async function getQuotes() {
	const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
	try {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
	} catch (e) {}
}

getQuotes();

// Get the  DOM elements

const author = document.querySelector("#author");
const quote = document.querySelector("#quote");
const loader = document.querySelector("#loader");
const quoteContainer = document.querySelector(".quote-container");

// activate the buttons

const quoteBtn = document.querySelector("#new-quote-btn");

quoteBtn.addEventListener("click", getNewQuote);

// Tweet Quote

const twitterBtn = document.querySelector(".twitter-btn");

function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`;
	window.open(twitterUrl, "_blank");
}

twitterBtn.addEventListener("click", tweetQuote);
