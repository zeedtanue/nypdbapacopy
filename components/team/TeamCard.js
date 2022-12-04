import React from 'react'
import Link from 'next/link'
const TeamCard = ({ imgsource, name, designation}) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
    <div className="wpo-team-wrap">
      <div className="wpo-team-img">
        <img src={imgsource} alt=""/>
      </div>
      <div className="wpo-team-content">
        <div className="wpo-team-text-sub">
            <h2><Link href="/volunteerPage"><a>{name}</a></Link></h2>
            <span>{designation}</span>
            <ul>
                <li><Link href="/volunteerPage"><a><i className="ti-facebook"></i></a></Link></li>
                <li><Link href="/volunteerPage"><a><i className="ti-twitter"></i></a></Link></li>
                <li><Link href="/volunteerPage"><a><i className="ti-google"></i></a></Link></li>
                <li><Link href="/volunteerPage"><a><i className="ti-instagram"></i></a></Link></li>
            </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TeamCard