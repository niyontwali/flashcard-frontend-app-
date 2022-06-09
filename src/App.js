import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache} from 
'@apollo/client';

import Header from "./components/Header";
import Home from './pages/Home';
import FlashCard from './pages/FlashCard';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'https://proj-mgmt-system.herokuapp.com/graphql',
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
          <Route path="/flashcard" element={<FlashCard />} />
        </Routes>
      </Router>
    </ApolloProvider>
    </>
  );
}

export default App;