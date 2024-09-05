import { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };
  const handleClick = () => {
    getQuote();
  };

  return (
    <>
      <div style={{textAlign : 'center'}}>
        <h2>Quote Generator</h2>
        <h1>{quote}</h1>
        <p>{author}</p>
        <button onClick={handleClick}>New Quote</button>
      </div>
    </>
  );
};

export default Quote;
