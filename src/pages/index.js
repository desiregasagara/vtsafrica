import * as React from 'react'
import Contact from '../components/Contact'
import Explore from '../components/Explore'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Service from '../components/Services'
import '../Sass/basics.scss'
import { Link } from 'gatsby'


const IndexPage = () =>
{
  return(
    <div>
        <head>
        <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <Link rel="manifest" href="/site.webmanifest"/>
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#000"></meta>
        <title>Victoria Travel Services | Book Flights and Holidays | Travel Leaders Rwanda  </title>
      </head>
      <NavBar/>
      <Hero/>
      <Explore/>
      <Service/>
      <Contact/>
      
    </div>

  )

}

export default IndexPage