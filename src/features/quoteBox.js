import React,{useState,useEffect} from 'react';
import axios from 'axios';

/* requirement from FCC
User Story #1: I can see a wrapper element with a corresponding id="quote-box".

User Story #2: Within #quote-box, I can see an element with a corresponding id="text".

User Story #3: Within #quote-box, I can see an element with a corresponding id="author".

User Story #4: Within #quote-box, I can see a clickable element with a corresponding id="new-quote".

User Story #5: Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".

*/

export const QuoteBox = ()=>{

  const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  const [quotes,setQuotes]=useState([]);
  const [quote,setQuote] = useState('');


//connect to API load all quotes and set a randon quote when the webpage is conneted
   useEffect(() => {
    let loaded = true;
    axios.get(url)
      .then(res => {
        if(loaded) {
          setQuotes(res.data.quotes);
          setQuote(res.data.quotes[Math.floor(Math.random() * 100)])

        }
      })
    return () => loaded = false;
  }, [])


//pick a random quote from the quotes list
  const onClick = ()=>{
    setQuote(quotes[Math.floor(Math.random() * 100)])
  }
  
/*
User Story #6: On first load, my quote machine displays a random quote in the element with id="text".

User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".

User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.

User Story #9: My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.

User Story #10: I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.

User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.
*/
return (
  <div id="quote-box" style={{backgroundColor:'LightGrey',border:'1px solid white',margin:'auto',textAlign:'center',width:'500px',height:'400px'}}>
  <p>Random Quote Machine </p>
    
    <p id="text">"{quote.quote}"</p>
    <p id="author">{quote.author}</p>
  
    <button id="new-quote" onClick={onClick}>new quote</button>
    <button>
    <a id="tweet-quote" href="http://www.twitter.com/intent/tweet" target="_blank">tweet quote</a>
    </button>

  </div>
 )
}
