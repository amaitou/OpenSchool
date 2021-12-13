
import React, {Component} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Landing from './components/landing/Landing'
import About from './components/about/About'
import Blogs from './components/blogs/Blogs'
import Sb from './components/scrollbtn/Sb'
import Courses from './components/courses/Courses'
import Contact from './components/contact/Contact'
import Notfound from './components/notfound/Notfound'


class App extends Component
{
    render()
    {
  		return (
          <BrowserRouter>
            <>
              <Sb />
              <div className = '_navbar'>
                  <Navbar />
              </div>

              <div className = '_body'>
                  <Routes>
                      <Route exact path = '/' element = {<Landing />} />
                      <Route path = '/OpenSchool' element = {<Landing />} />
                      <Route path = '/about' element = {<About />} />
                      <Route path = '/blogs/*' element = {<Blogs />} />
                      <Route path = '/courses/*' element = {<Courses />} />
                      <Route path = '/contact' element = {<Contact />} />
                      <Route path = '*' element = {<Notfound />} />
                  </Routes>
              </div>

              <div className = '_footer'>
                <Footer />
              </div>
            
            </>
          </BrowserRouter>
        )
    }
}
export default App
