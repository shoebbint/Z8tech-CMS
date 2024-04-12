
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home/Home'
import Footer from './Components/Shared/Footer/Footer'
import Forum from './Components/Forum/Forum'
import MyCourses from './Components/Students/My-courses/MyCourses'
import CourseDetails from './Components/Students/Course-details/CourseDetails'
import Contact from './Components/Contact/Contact'
import Faqs from './Components/Faqs/Faqs'
import Blog from './Components/Blog/Blog'
import Login from './Components/Shared/Login/Login'
import Register from './Components/Shared/Register/Register'
import About from './Components/About/About'
import AllCourses from './Components/All-courses/AllCourses'


function App() {


  return (
    <>
<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/forum' element={<Forum></Forum>}></Route>
  <Route path='/coursedetails' element={<CourseDetails></CourseDetails>}></Route>
  <Route path='/mycourses' element={<MyCourses></MyCourses>}></Route>
  <Route path='/contact' element={<Contact></Contact>}></Route>
  <Route path='/faq' element={<Faqs></Faqs>}></Route>
  <Route path='/blog' element={<Blog></Blog>}></Route>
  <Route path='/login' element={<Login></Login>}></Route>
  <Route path='/register' element={<Register></Register>}></Route>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/allcourses' element={<AllCourses></AllCourses>}></Route>
</Routes>

<Footer></Footer>
    </>
  )
}

export default App
