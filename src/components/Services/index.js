import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";


const Service = () =>{
    return(
        <div id="services" className={styles.services}>
            <div className={styles.etitle} >
                <h2 className={styles.eheader}><span className={styles.espan}>Our Services</span></h2>
            </div>
            <div className={styles.container}>
                <AnchorLink to="/#contact" className={styles.contactLink}>
                <div className={styles.sblock}>
                    <StaticImage src='../../images/ticket.jpeg' alt="Air Tickets by Amir Hanna via Unsplash" className={styles.simage}/>
                    <span className={styles.serviceSpan}>
                        <p>Air Ticketing</p>
                    </span>
                </div>
                </AnchorLink>

                <AnchorLink to="/#contact" className={styles.contactLink}>
                <div className={styles.sblock}>
                    <StaticImage src='../../images/gtravel.jpeg' alt="Group walking into beach by Oliver Sjostrom via Unsplash " className={styles.simage}/>
                    <span className={styles.serviceSpan}>
                        <p>Group Travel</p>
                    </span>
                </div>
                </AnchorLink>
                
                <AnchorLink to="/#contact" className={styles.contactLink}>
                <div className={styles.sblock}>
                    <StaticImage src='../../images/Study.jpeg' alt="Student studying in cafe by Reinhart Julian via Unsplash " className={styles.simage}/>
                    <span className={styles.serviceSpan}>
                        <p>Study Abroad</p>
                    </span>
                </div>
                </AnchorLink>
                </div>
                <div className={styles.container}>

                <AnchorLink to="/#contact" className={styles.contactLink}>    
                <div className={styles.sblock2}>
                    <StaticImage src='../../images/Visa.jpeg' alt="American Passports by Brianna R via Unsplash" className={styles.simage}/>
                    <span className={styles.serviceSpan}>
                        <p>Visa Applications</p>
                    </span>
                </div>
                </AnchorLink>

                <AnchorLink to="/#contact" className={styles.contactLink}>
                <div className={styles.sblock2}>
                    <StaticImage src='../../images/family.jpeg' alt="Family kayaking in forest by Philippe Oursel via Unsplash" className={styles.simage}/>
                    <span className={styles.serviceSpan}>
                        <p>Family Trip Packages</p>
                    </span>
                </div>
                </AnchorLink>
            </div>
            <hr style={{margin:" 2% 10%",}}></hr>
        </div>
    )
}

export default Service