
// Project 1 - A Random Quote Generator


var quotes =[
  { quote : "That's what she said.",
    source: "The Office",
    year: 2002
    },

  { quote : "60% of the time works everytime.",
    source: "Anchorman",
    year: 2004
    },

  { quote : "I'll be back.",
    source: "Terminator",
    year: 1984
    },

  { quote : "Water can flow or it can crash. Be water, my friend.",
    source: "Bruce Lee",
    year: 2000

    },
  { quote : "The main reason people struggle financially is because they have spent years in school but learned nothing about money. The result is that people learn to work for money...but never learn to have money work for them.",
    source: "Robert Kiyosaki",
    year: "1997"
    },

  { quote : "When you’re a carpenter making a beautiful chest of drawers, you’re not going to use a piece of plywood on the back, even though it faces the wall and nobody will see it. You’ll know it’s there, so you’re going to use a beautiful piece of wood on the back. For you to sleep well at night, the aesthetic, the quality, has to be carried all the way through.",
    source: "Steve Jobs",
    year: 1985
  },

  { quote: "Stay hungry, stay foolish.",
    source: "Steve Jobs",
    year: 1985
  },

  { quote: "Be kind whenever possible. It is always possible.",
    source: "Dalai Lama",
    year: 2014
  },

  { quote: "Well done is better than well said.",
    source: "Benjamin Franklin",
    year: 1737
  },

  { quote: "I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life.",
    source: "Michael Jordan",
 
  },

  { quote: "I can accept failure, but I can't accept not trying.",
    source: "Michael Jordan",
    
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
// random quote will get pushed to a variable which then can be printed out
// var result = getRandomQuote(quotes);

var colorRange = 255;
function randomColor() {
  var num = [];
  for (var i = 0; i < 3; i++){
  num.push(Math.floor(Math.random()*(colorRange+1)));
  }
  return num;
}

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
    document.body.style.background = 'rgb('+ randomColor() +')';
}


// add click event
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

printQuote();

