import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache} from 
'@apollo/client';

import Header from "./components/Header";
import Home from './pages/Home';
import FlashCard from './pages/FlashCard';
import Dashboard from './pages/Dashboard';
import Card from './pages/Card';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        allCards: {
          merge(existing, incoming) {
            return incoming
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'https://flashcard-backend-app.herokuapp.com/graphql',
  cache
})

function App() {
  
  return (
    <>
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flashcards" element={<FlashCard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/card/:id" element={<Card />} />
        </Routes>
      </Router>
    </ApolloProvider>
    </>
  );
}

export default App;