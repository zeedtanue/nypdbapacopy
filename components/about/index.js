import VideoModal from '../ModalVideo'
import Link from 'next/link'

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>About BAPA</span>
                                <h2>Bangladesh American Police Association</h2>
                            </div>
                            <p>The founding principle of BAPA is to share information about our collective experiences for the betterment of fellow Law Enforcement Officers in addition to building a bridge between the Bangladeshi community and Law Enforcement.</p>
                            <p>We are forever grateful for all the founding members coming together in 2015 to establish the Association & for their contributions in BAPA’s success to this date </p>
                            <p>MISSION</p>
                            
                                <li>Foster relationship through camaraderie among Law Enforcement Officers of Bangladeshi Heritage. </li>
                                <li>Help recruit more Bangladeshi Americans into Law Enforcement.</li>
                                <li>Assist fellow Members of Service to attain their professional goals and be a helping hand in times of need. </li>
                                <li>Take initiatives that will bridge the gap between Law Enforcement and the Bangladeshi American community.</li>    
                                
                            {/* <div className="btns">
                                <Link href="/DonatePage">
                                        <a  className="theme-btn" onClick={ClickHandler}>Donate Now</a>
                                </Link>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal/>
                                    </li>
                                    <li className="video-text">
                                        Watch Our Video
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3">
                            <img src='images/bapaphotoes/bnwpolice.jpg' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;