const express = require('express');
const cors = require('cors');
const uuid = require('uuid');

const app = express();
app.use(express.json());
app.use(cors());

let quotes = [
  {
    id: uuid(),
    author: 'Dr. Seuss',
    text: "Don't cry because it's over, smile because it happened.",
    favourite: false,
  },
  {
    id: uuid(),
    author: 'Frank Zappa',
    text: "So many books, so little time.",
    favourite: false,
  },
  {
    id: uuid(),
    author: 'Oscar Wilde',
    text: "Be yourself; everyone else is already taken.",
    favourite: false,
  },
];

function getAllQuotes(req, res) {
  const authHeaderIsPresent = req.headers.authorization;

  if (authHeaderIsPresent) {
    return res.json(quotes);
  }
  
  return res.status(401).json({
    message: 'Authorization required to view quotes'
  });
}

function getQuoteById(req, res) {
  const authHeaderIsPresent = req.headers.authorization;

  if (authHeaderIsPresent) {
    return res.json(quotes.find(friend => friend.id === req.params.id));
  }
  
  return res.status(401).json({
    message: 'Authorization required to view quote'
  });
}

function postNewQuote(req, res) {
  const authHeaderIsPresent = req.headers.authorization;

  if (authHeaderIsPresent) {
    const quote = { id: uuid(), ...req.body, favourite: false };
    quotes.push(quote);
    return res.json(quotes);
  }
  return res.status(401).json({
    message: 'Authorization required to add quote'
  });
}

function deleteQuoteById(req, res) {
  const authHeaderIsPresent = req.headers.authorization;

  if (authHeaderIsPresent) {
    quotes = quotes.filter(friend => friend.id !== req.params.id);
    return res.json(quotes);
  }

  return res.status(401).json({
    message: 'Authorization required to delete quote'
  });
}

function replaceQuoteById(req, res) {
  const authHeaderIsPresent = req.headers.authorization;

  if (authHeaderIsPresent) {
    const updatedQuote = { id: req.params.id, ...req.body };
    quotes = quotes.map(quote => {
      if (quote.id === req.params.id) {
        return updatedQuote;
      }
      return quote;
    })
    return res.json(quotes);
  }

  return res.status(401).json({
    message: 'Authorization required to update quote'
  });
}

function login(req, res) {
  const { username, password } = req.body;
  if (username === 'lambda' && password === '1234') {
    res.json({ 
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkxhbWJkYSIsImlhdCI6MTUxNjIzOTAyMn0.Kyvj80Qkr_2IRPITOaAq6umVHYIgan9r58RS7TzAoAk' 
    });
  } else {
    res.status(401).json({ 
      message: 'YOU SHALL NOT PASS! Please try again.' 
    });
  }
}

app.get('/api/quotes', getAllQuotes);
app.get('/api/quotes/:id', getQuoteById);
app.post('/api/quotes', postNewQuote);
app.delete('/api/quotes/:id', deleteQuoteById);
app.put('/api/quotes/:id', replaceQuoteById);
app.post('/api/login', login);

app.listen(5000, () => console.log(
  '\nQuotes server listening on port 5000!\n',
));