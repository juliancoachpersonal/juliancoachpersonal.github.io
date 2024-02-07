import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainWindow from './pages/MainWindow/MainWindow'

function App() {
  return(
    <BrowserRouter>
      <Routes>
          <Route path='/*' element={<MainWindow/>}></Route>
          <Route path='/login' element={<h1>Login</h1>}></Route>
          <Route path='/generalities' element={<h1>Generalidades</h1>}></Route>
      </Routes>
      
    </BrowserRouter>
    
  )
}

export default App