import {Routes, Route, Link} from 'react-router-dom'

import Aboutpage from './pages/Aboutpage';
import HomePage from './pages/Homepage';
import Newspage from './pages/Newspage';
function Routers(){
    return(
        <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<Aboutpage/>}></Route>
        <Route path='/news' element={<Newspage/>}></Route>
      </Routes>
    )
}
export default Routers;