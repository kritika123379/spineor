import { useAmp } from 'next/amp';
import Home from '../components/Home/home'
import Page from '../components/page';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header'
import ListProperty from '../components/listProperty';
import fetch from 'node-fetch'
import { fetcher } from '../shared/globalFunc';
import Link from 'next/link';
import SocialMeta from '../components/social-meta';
import { SkipNavContent } from '@reach/skip-nav';
import Success from '../components/Success/success-stories';
import About from './About';
import Service from "./Service";


import FAQS from '../components/FAQ/faqs';
import Header from '../components/Header/header';


export default (props) => {
  const isAmp = useAmp();

  return (
    <div>
    <Header/>
    <FAQS/>
    {/* <Home/> */}
    <Home/>
    <Footer/>
    {/* <Success/> */}
    </div>
  );
};

