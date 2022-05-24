import * as React  from "react";
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './styles.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Explore = () => {
    return(
        <div id="destinations" className={styles.destinations}>
            <div className={styles.etitle} >
                <h2 className={styles.eheader}><span className={styles.espan}>Popular Destinations</span></h2>
                <p className={styles.description}> Explore the world for less</p>
            </div>
            <div className={styles.imageContainer}>
                <AnchorLink to="/#contact" className={styles.contactLink}>
                <div className={styles.container} >
                    <StaticImage
                        style={{
                        gridArea: "1/1",
                        // You can set a maximum height for the image, if you wish.
                        borderRadius:"25px",
                        boxShadow:"5px 5px 25px gray",

                        }}
                        layout="fullWidth"
                        // You can optionally force an aspect ratio for the generated image
                    
                        // This is a presentational image, so the alt should be an empty string
                        alt="Eiffel Tower, Paris, France by Daniel Bounliane via Unsplash "
                        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                        src={
                        "../../images/paris.jpg"
                        }
                        formats={["auto", "webp", "avif"]}
                    />
                    <div
                        style={{
                        // By using the same grid area for both, they are stacked on top of each other
                        gridArea: "1/1",
                        position: "relative",
                        // This centers the other elements inside the hero component
                        placeItems: "center",
                        marginTop:"98%",
                        textAlign:"center",
                        display: "grid",
                        cursor: "pointer",
                        }}
                    >
                        {/* Any content here will be centered in the component */}
                        <div className={styles.imageText}>
                            <StaticImage src="../../images/location.png" className={styles.locationIcon}/>
                            <p className={styles.descriptions}>Paris, France</p>
                        </div>    
                    </div>
                </div>
                </AnchorLink>
                <AnchorLink to="/#contact" className={styles.contactLink}>
                <div className={styles.container} >
                    <StaticImage
                        style={{
                        gridArea: "1/1",
                        // You can set a maximum height for the image, if you wish.
                        borderRadius:"25px",
                        boxShadow:"5px 5px 25px gray",

                        }}
                        layout="fullWidth"
                        // You can optionally force an aspect ratio for the generated image
                    
                        // This is a presentational image, so the alt should be an empty string
                        alt="Hot Air Balloons, Temelecalum, United States by Kenny Krosky via Unsplash"
                        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                        src={
                        "../../images/Temelecalum.jpg"
                        }
                        formats={["auto", "webp", "avif"]}
                    />
                    <div
                        style={{
                        // By using the same grid area for both, they are stacked on top of each other
                        gridArea: "1/1",
                        position: "relative",
                        // This centers the other elements inside the hero component
                        placeItems: "center",
                        marginTop:"98%",
                        textAlign:"center",
                        display: "grid",
                        cursor: "pointer",
                        }}
                    >
                        {/* Any content here will be centered in the component */}
                        <div className={styles.imageText}>
                            <StaticImage src="../../images/location.png" className={styles.locationIcon2}/>
                            <p className={styles.descriptions}>Temelecalum, United States</p>
                        </div>    
                    </div>
                </div>
                </AnchorLink>
                <AnchorLink to="/#contact" className={styles.contactLink}>
                <div className={styles.container} >
                    <StaticImage
                        style={{
                        gridArea: "1/1",
                        // You can set a maximum height for the image, if you wish.
                        borderRadius:"25px",
                        boxShadow:"5px 5px 25px gray",

                        }}
                        layout="fullWidth"
                        // You can optionally force an aspect ratio for the generated image
                    
                        // This is a presentational image, so the alt should be an empty string
                        alt="Lady in front of leaning tower, Pisa, Italy, by Jakob Owens via Unsplash"
                        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                        src={
                        "../../images/Pisa.jpg"
                        }
                        formats={["auto", "webp", "avif"]}
                    />
                    <div
                        style={{
                        // By using the same grid area for both, they are stacked on top of each other
                        gridArea: "1/1",
                        position: "relative",
                        // This centers the other elements inside the hero component
                        placeItems: "center",
                        marginTop:"98%",
                        textAlign:"center",
                        display: "grid",
                        cursor: "pointer",
                        }}
                    >
                        {/* Any content here will be centered in the component */}
                        <div className={styles.imageText}>
                            <StaticImage src="../../images/location.png" className={styles.locationIcon3}/>
                            <p className={styles.descriptions}>Pisa, Italy</p>
                        </div>    
                    </div>
                </div>
                </AnchorLink>
            </div>
        </div>
    )

}

export default Explore