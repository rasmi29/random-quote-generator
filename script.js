const quote = document.getElementById("quote");
const copy = document.getElementById("copy");
const author = document.getElementById("author");
const newQuote = document.getElementById("new");
const shareOnX = document.getElementById("shareOnX");
const exportBtn = document.getElementById("export");
const display = document.querySelector(".quote-display");

const loadNew = async function () {
  try {
    const data = await fetch(
      `https://api.freeapi.app/api/v1/public/quotes/quote/random`
    );
    const result = await data.json();
    quote.innerText = result.data.content;
    author.innerText = result.data.author;
    //image
    const response = await fetch(`https://picsum.photos/200`);
    display.style.backgroundImage = `url(${response.url})`;
  } catch (error) {
    console.error(`error during data fetching ${error}`);
    display.style.backgroundImage = `url(./photo.avif)`;
  }
};

newQuote.addEventListener("click", loadNew);

loadNew();

copy.addEventListener("click", () => {
  navigator.clipboard
    .writeText(quote.textContent)
    .then(() => {
      console.log("text copied to clipboard");
      alert("text copied to clipboard!");
    })
    .catch((error) => {
      console.error("error copying text: ", error);
    });
});

shareOnX.addEventListener("click",()=>{
    const text = encodeURI(`Quote of the Day -> ${quote.textContent} .
        
        Written by -> ${author.textContent}💫`);
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(twitterShareUrl, '_blank');
})

exportBtn.addEventListener('click', function() {
    const styles = window.getComputedStyle(display);
    console.log(styles.backgroundImage);
    const backgroundImage = styles.backgroundImage;
    const imageUrl = backgroundImage.slice(5, -2); // remove the url("...")
    //temporary <a> element 
    const link = document.createElement('a');
    link.href = imageUrl; 
    link.download = 'background-image.jpg'; 
    //dynamically click 
    link.click();
  });
