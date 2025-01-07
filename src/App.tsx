import './App.css'
import Headers from './shared/components/Headers'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsDetail from './shared/components/CardsDetail';
import Cards from './shared/components/Cards';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter basename="/e-commerce">
      <Headers />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart" element={<CardsDetail />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
