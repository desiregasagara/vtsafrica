import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";



const NavBar = () => {
    return(
        <div className={styles.navbar}> 
            <div className={styles.contact}>
                <a href = "mailto: info@vtsafrica.com"><div className={styles.border}><StaticImage src='../../images/Gmail.jpeg' alt=' Victoria Travel Gmail link' className={styles.clogo}/></div></a>
                <div className={styles.border2}><StaticImage src='../../images/fbook.png' alt=' Victoria Travel Facebook link' className={styles.clogo}/></div>
                <div className={styles.border2}><StaticImage src='../../images/igram.jpeg' alt=' Victoria Travel Instagram link' className={styles.clogo}/></div>
                <a href = "https://wa.me/250783788860"><div className={styles.border1}><StaticImage src='../../images/wapp.png' alt=' Victoria Travel Whatsapp link' className={styles.clogo}/></div></a>
                <a href="tel:250783788860" className={styles.numberLink}><div className={styles.number}>+250 783 788 860</div></a>

            </div>
            <div className={styles.nav}>
                
                <StaticImage src='../../images/logo.jpg' alt=' Victoria Travel Services Logo' className={styles.logo}/>
            <div className={styles.wnav}>  <a href = "https://wa.me/250783788760" className={styles.flexLogo}><div className={styles.border2}><StaticImage src='../../images/wapp.png' alt=' Victoria Travel Whatsapp link' className={styles.clogo2}/></div></a></div> 
                <label className={styles.label} for="toggle" >&#9776;</label>
                <input type="checkbox" id="toggle" className={styles.toggle}/>

                
                <div className={styles.navInner}>
                <nav>
                    <ul className={styles.navlinks}>
                        <AnchorLink to='/#home'  className={styles.navlink}>Home</AnchorLink>
                        <AnchorLink to='/#destinations' className={styles.navlink}>Destinations</AnchorLink>
                        <AnchorLink to='#services' className={styles.navlink}>Services</AnchorLink>
                    </ul>
                </nav>
                <AnchorLink to="/#contact" className={styles.bLink} ><button className={styles.btn}>Book Now</button></AnchorLink>
                </div>
                
            </div>
        
        </div>
    )
}

export default NavBar;