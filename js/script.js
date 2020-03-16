
// Project 1 - A Random Quote Generator


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




// create get random quote function
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



// create printeQuote function
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


// add click event
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

printQuote();

// Remember to delete the comments that came with this file, and replace them with your own code comments.
