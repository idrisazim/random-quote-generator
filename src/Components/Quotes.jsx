import React, { useState } from "react";
import "./CSS/Quotes.css";
import twitter_icon from "./Assets/Twitter-x.png";
import reload_icon from "./Assets/reload.png";

const Quotes = () => {

  let quotes = [];
  
  const [quote, setQuote] = useState({
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
  });

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const random = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };
  
  const twitter = () => {
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`);
  };

  loadQuotes();

  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quote.author.split(',')[0]}</div>
          <div className="icons">
            <img src={reload_icon} onClick={()=>{random()}} alt="." />
            <img src={twitter_icon} onClick={()=>{twitter()}} alt="." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
