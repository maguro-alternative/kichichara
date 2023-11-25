import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/router';

function App() {
  return (
    <>
      {/* ルーター追加 */}
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </>
  )
}

export default App
