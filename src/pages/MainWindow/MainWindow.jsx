
import {Routes, Route, Navigate} from 'react-router-dom'
import { Navbar } from '../../components/Navbar/Navbar'
import { Landing } from '../Landing/Landing'
import { SocialBar } from '../../components/SocialBar/SocialBar'
import { Footer } from '../../components/Footer/Footer'
import { Generality } from '../Generality/Generality'

export default function MainWindow() {
    return (
        <div>
            <SocialBar/>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/generalidades' element={<Generality/>}/>
                <Route path='*' element={<Navigate to='/' replace/>}></Route>
            </Routes>
            <Footer/>
        </div>
    )
}