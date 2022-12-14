import React, {Fragment} from 'react';
import Header from '../components/header'
import Hero from '../components/hero'
import Hero3 from '../components/hero3'

import Mission from '../components/mission'
import About from '../components/about'
import CaseSlide from '../components/case'
import CounterSection from '../components/counter'
import TeamSection from '../components/team'
import WorldSection from '../components/world'
import BlogSection from '../components/BlogSection'
import Footer from '../components/footer'
import Scrollbar from '../components/scrollbar'
import {ToastContainer} from 'react-toastify';
import Head from 'next/head'
import EventSection from '../components/event';



const HomePage =() => {
    return(
        <Fragment>
            <Head>
                <title>Home Page</title>
            </Head>
            {/* <ToastContainer/> */}
            <Header/>
            {/* <Hero/> */}
            <Hero3/>
            <EventSection/>
            
            {/* <Mission subclass={'section-padding'}/> */}

            {/* <Mission/> */}
            <About/>
            {/* <CaseSlide/> */}

            {/* <CounterSection/> */}
            <TeamSection/>
            {/* <WorldSection/> */}
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;


