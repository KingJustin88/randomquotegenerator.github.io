/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// // Study guide for this project -
//  https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes =[
  { quote : "That's what she said",
    source: "The Office",

    year: 2002
    },
  { quote : "60% of the time works everytime",
    source: "Anchorman",

    year: 2004
    },
  { quote : "I'll be back",
    source: "Terminator",

    year: 1984
    },
  { quote : "Water can flow or it can crash. Be water, my friend",
    source: "Bruce Lee",


    },
  { quote : "Pivot!",
    source: "Friends",

    year: 1994
    }
];



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Create the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote(array){
  // this generates random number index
  var quote_position = Math.floor(Math.random() * quotes.length);

  // loops through the array of quotes with the set index from the random number
  for(var i = 0; i < array.length; i += 1){
    var random_quote = array[quote_position];
  }
  return random_quote;
}
// random quote wil get pushed to a variable which then can be printed out
var result = getRandomQuote(quotes);
console.log(result);


/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote(){
    // create message variable
    var message = "";
    // have getRandomQuote(quotes) to a variable
    var result = getRandomQuote(quotes);
    // then set a message variable and add quote, year, and sources
    message = "<p class= 'quote'>" + result.quote + "</p>";
    message += "<p class= 'source'>" + result.source;
    message += "<span class= 'year'>" + result.year + "</span>"
    message += "</p>";

    // then display the message
    document.getElementById('quote-box').innerHTML = message;
}



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
