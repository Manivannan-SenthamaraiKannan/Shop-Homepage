import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer'
import PageHeader from './Components/PageHeader';
import Cards from './Components/Cards'
import Cart from './Components/Cart'
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
      <Router>
            <div className="App">
              <Header/>
                <Routes>
                    <Route path='/cart' element={<Cart />}/>
                </Routes>
                <PageHeader />
                <Cards />
              <Footer/>
            </div>
      </Router>
  );
}

export default App;
