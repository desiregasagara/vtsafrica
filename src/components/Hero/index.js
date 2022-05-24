import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Hero = () =>{

    return (
        <div style={{ display: "grid", width:"100%",marginBottom:"0.5%", }}>
      <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
            width: "100%",
           height: "86vh",
       
         
           objectPosition: "50% 50%",
           objectFit: "cover",
      
        }}
        layout="fullWidth"
       
        // You can optionally force an aspect ratio for the generated image
        
        // This is a presentational image, so the alt should be an empty string
        alt="Santorini,Greece by Jonathan Gallegos via Unsplash"
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={
            '../../images/Hero.png'
        }
        
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
        
       
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        <div className={styles.heroContainer}>
        <h1 className={styles.header}>FIND YOUR NEXT GREAT TRAVEL DESTINATION</h1>
        <AnchorLink to="/#destinations" className={styles.bLink} ><button className={styles.btn}>View Offers</button></AnchorLink>
        </div>
      </div>
    </div>

    )
}

export default Hero