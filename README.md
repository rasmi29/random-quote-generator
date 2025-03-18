# Random Quote Generator

A lightweight, elegant web application that generates random quotes with author attributions. This project offers a clean interface with social sharing capabilities and visual customization options.

![Random Quote Generator Screenshot](https://drive.google.com/file/d/1LjfxYzaT_1RUkmE0YYB7SeVX3qLXDpwT/view?usp=drive_link)

## ✨ Demo

[Live Demo](https://random-quote-generator-rasmi.netlify.app/)

## 🎯 Features

- **Random Quote Generation**: Fetch and display inspirational quotes along with their authors
- **Social Sharing**: Easily share quotes directly to Twitter
- **Copy to Clipboard**: One-click copying of quotes for use elsewhere
- **Export Background**: Save the current quote with its background as an image
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Visual Customization**: Different background styles for each quote

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript

## 📋 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rasmi29/random-quote-generator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd random-quote-generator
   ```

3. Open `index.html` in your browser to run the application locally.

## 🚀 Usage

- Click the "New Quote" button to generate a random quote
- Use the share to X button to share the current quote on Twitter
- Click the copy button to copy the quote to your clipboard
- Use the export button to download the current view as an image



## 🧩 API
- This project uses [[Freeapi](https://api.freeapi.app/api/v1/public/quotes/quote/random)] to fetch random quotes.
- This project uses [[Picsum](https://picsum.photos/200)] to fetch random background images.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



## 📞 Contact

Your Name - [@Rasmiranjan29](https://twitter.com/rasmiranjan09) - rasmiranjansahoo702@gmail.com

Project Link: [https://github.com/rasmi29/random-quote-generator](https://github.com/rasmi29/random-quote-generator)

## 💡 Implementation Notes

### Share to X/Twitter
```javascript
// Creates a Twitter Web Intent URL with quote text and author
shareOnX.addEventListener("click",()=>{
    const text = encodeURI(`Quote of the Day -> ${quote.textContent} .
        
        Written by -> ${author.textContent}💫`);
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(twitterShareUrl, '_blank');
})
```

### Copy to Clipboard
```javascript
// Uses Clipboard API to copy the current quote and author
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
```

### Download as Image
```javascript

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
```
