import React from 'react'
import Link from 'next/link'

const HeaderTopbar = () => {
    return(	
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-call"></i>+11111235678</li>
                                <li><i className="fi flaticon-envelope"></i> email@nypdbapa.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><Link href="/LoginPage"><a>Login</a></Link></li>
                                <li><Link href="/SignUpPage"><a>Sign Up</a></Link></li>
                                <li><Link href="/DonatePage"><a className="theme-btn">Donate Now</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;