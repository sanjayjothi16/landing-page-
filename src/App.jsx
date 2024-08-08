import React from 'react'
import Nav from './content/Nav'
import Header from './content/Header'
import Section from './content/Section'
import Info from './content/Info'
import Users from './content/Users'
import Email from './content/Email'
import Foot from './content/Foot'
function App() {
  return <>
    {/* <!-- Navigation--> */}
       <Nav/>
        {/* <!-- Masthead--> */}
        <Header/>
        {/* <!-- Icons Grid--> */}
         <Section/>
        {/* <!-- Image Showcases--> */}
        <Info/>
        {/* <!-- Testimonials--> */}
         <Users/>
        {/* <!-- Call to Action--> */}
       <Email/>
        {/* <!-- Footer--> */}
      <Foot/>
  </>
}

export default App
