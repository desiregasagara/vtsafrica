import * as React from 'react';
import * as styles from './styles.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const Contact =()=> {
    return(
        <div style={{ display: "grid", width:"100%"  }} id="contact" className={styles.contact}>
        <StaticImage
            style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
                width: "100%",
            //height: "82vh",
        
            
            objectPosition: "50% 50%",
            objectFit: "cover",
            
            }}
            layout="fullWidth"
        
            // You can optionally force an aspect ratio for the generated image
            
            // This is a presentational image, so the alt should be an empty string
            alt=""
            // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
            src={
                '../../images/Background.png'
            }
            className={styles.img}
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
            <h3 className={styles.header}>Book With Confidence</h3>
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" className={styles.form} onSubmit="process(event)">
            <div className={styles.cform}>
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className={styles.ccontainer}>
                <div className={styles.fcontainer}>
                    <label for="fname" required>
                        <p className={styles.text}>Name*</p>
                        <input type="text"name="name" id="name" className={styles.formControl} required /> 
                    </label>
                </div>
                <div className={styles.fcontainer} data-sal="slide-up" data-sal-delay= "200" data-sal-easing="linear">
                    <label for="femail" >
                    <p className={styles.text}>Email*</p>
                        <input type="email"name="email" id="email"  className={styles.formControl} required /> 
                    </label>
                    </div>
                <div className={styles.fcontainer}>
                    <label for="flocation" required>
                        <p className={styles.text}>Where to?*</p>
                        <input type="text"name="location" id="location" className={styles.formControl} placeholder="e.g. Nairobi, Kenya" required /> 
                    </label>
                </div>
                </div>
            </div>
            <div className={styles.btnDiv}>
            <button type="submit" id="submit" className={styles.btn}>
                        Submit
                    </button>
                    </div>
            </form>
        </div>
      </div>
    </div>
    )
}

export default Contact