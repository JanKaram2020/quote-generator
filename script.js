const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const newQuoteButton = document.querySelector(".new-quote");
const tweetButton = document.querySelector(".twitter-button");
const loading = document.querySelector(".loading");
const getQuote = async () => {
  loading.style.display = "inline";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en";
  const res = await fetch(proxyUrl + apiUrl);
  const data = await res.json();
  if (data.quoteAuthor === "") {
    author.innerText = "Unknown";
  } else {
    author.innerText = data.quoteAuthor;
  }
  quote.innerText = data.quoteText;
  loading.style.display = "none";
};
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=
  ${quote.innerText} - ${author.innerText}.
  this quote is generated using Jan's quote generator.`;
  window.open(twitterUrl, "_blank");
}
newQuoteButton.addEventListener("click", getQuote);
tweetButton.addEventListener("click", tweetQuote);
