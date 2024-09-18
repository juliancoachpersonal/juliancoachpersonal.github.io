import {HashRouter, Routes, Route} from 'react-router-dom'
import MainWindow from './pages/MainWindow/MainWindow'


function App() {

  return(
    <HashRouter>
      <Routes>
          <Route path='/*' element={<MainWindow/>}></Route>
          <Route path='/login' element={<h1>Login</h1>}></Route>
          <Route path='/generalities' element={<h1>Generalidades</h1>}></Route>
      </Routes>
      
    </HashRouter>
    
  )
}

export default App