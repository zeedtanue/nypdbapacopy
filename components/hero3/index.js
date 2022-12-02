import Link from 'next/link'

const Hero3 = (props) => {

    return(
        <section className="hero hero-style-3">
            <div className="hero-slider">
                <div className="slide">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-12 slide-caption">
                                <div className="slide-title">
                                    <h2>Bangladesh American Police Association</h2>
                                </div>
                                <div className="slide-subtitle">
                                    <p>Mission and tagline for the Association</p>
                                    <p>Mission and tagline for the Association</p>
                                </div>
                                {/* <div className="btns">
                                    <Link href="/DonatePage"><a className="theme-btn">Donate Now</a></Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="right-vec">
                    </div>  
                </div>
            </div>
    </section>
    )
}

export default Hero3;