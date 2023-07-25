
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home/Home'
import Footer from './Components/Shared/Footer/Footer'
import Forum from './Components/Forum/Forum'
import MyCourses from './Components/Students/My-courses/MyCourses'
import CourseDetails from './Components/Students/Course-details/CourseDetails'


function App() {


  return (
    <>
<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/forum' element={<Forum></Forum>}></Route>
  <Route path='/coursedetails' element={<CourseDetails></CourseDetails>}></Route>
  <Route path='/mycourses' element={<MyCourses></MyCourses>}></Route>
</Routes>

<Footer></Footer>
    </>
  )
}

export default App
