import Link from 'next/link'
import TeamCard from './teamCard';
const TeamSection = (props) => {
    return(
        <div className="wpo-team-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Meet The Committee</span>
                            <h2>Our Board Members</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                
                     <TeamCard name={"Karam Chowdhury"} imgsource={"images/bapaphotoes/board/KaramChPresident.png"} designation={"President"}/>
                     <TeamCard name={"Ershadur Siddique"} imgsource={'images/bapaphotoes/board/ErshadurVC.jpg'} designation={'1st Vice President'}/>
                     <TeamCard name={"Mohammad Ali Choudhury"} designation={"2nd Vice President"} imgsource={"images/bapaphotoes/board/2ndVP.jpg"}/>
                    
                </div>
            </div>
        </div>
    )
}

export default TeamSection;