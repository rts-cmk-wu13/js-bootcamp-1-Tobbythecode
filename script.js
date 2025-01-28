let quotes = ["to be or not to be that is the question", "so many books, so little time", "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", "A friend is someone who knows all about you and still loves you.", "To live is the rarest thing in the world. Most people exist, that is all.", "Friendship ... is born at the moment when one man says to another", "What! You too? I thought that no one but myself", "If you tell the truth, you don't have to remember anything.", "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "In three words I can sum up everything I've learned about life: it goes on."     ];
let quoteListElm = document.querySelector(".quotelist")
let quoteHtml = Math.floor(Math.random() * quotes.length);
let i = 0;


console.log(quotes[i]);
console.log(quotes.length); 

quoteListElm.innerHTML = quotes[quoteHtml]


// console.log(quotes);
// quotes.forEach(function(quote) {
//     console.log(quote);
// quoteListElm.innerHTML += `<blockquote class="quotelist">${quote}</blockquote>`


