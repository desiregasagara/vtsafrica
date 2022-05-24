import * as React from 'react'
import Contact from '../components/Contact'
import Explore from '../components/Explore'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Service from '../components/Services'
import '../Sass/basics.scss'


const IndexPage = () =>
{
  return(
    <div>
      <NavBar/>
      <Hero/>
      <Explore/>
      <Service/>
      <Contact/>
      
    </div>

  )

}

export default IndexPage