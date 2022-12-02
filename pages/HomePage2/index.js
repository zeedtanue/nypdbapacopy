import React, {Fragment} from 'react';
import Header from '../../components/header'
import Hero2 from '../../components/hero2'
import Mission from '../../components/mission'
import About from '../../components/about'
import CaseSlide from '../../components/case'
import CounterSection from '../../components/counter'
import TeamSection from '../../components/team'
import WorldSection from '../../components/world'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const HomePage2 =() => {
    return(
        <Fragment>
             <Head>
                <title>Home Page 2</title>
            </Head>
            <Header/>
            <Hero2/>
            <Mission subclass={'section-padding'}/>
             <About/>
            <CaseSlide/>
            <CounterSection/>
            <TeamSection/>
            <WorldSection/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage2;