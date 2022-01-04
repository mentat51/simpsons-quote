import React from 'react';
import axios from 'axios';
import './App.css';

import QuoteCard from './components/QuoteCard';

function App() {
  const [quote, setQuote] = React.useState({});

  const changeQuote = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    //extract the data from the received response
    .then((response) => response.data)
    //use this data to update the state
    .then((data) => {
      console.log(data[0])
      setQuote(data[0]);
    });
  }

  React.useEffect(() => {
    changeQuote();
  }, []);
 
  return (
    <div>
     <button onClick={()=>changeQuote()}>Get a new quote</button>

      <QuoteCard {...quote} />
    </div>
  );

}

export default App;
