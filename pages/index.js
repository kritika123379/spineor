import { useAmp } from 'next/amp';
import Home from '../components/Home/home';
import { fetcher } from '../shared/globalFunc';
import SocialMeta from '../components/social-meta';
import { SkipNavContent } from '@reach/skip-nav';
import Layout from '../components/Layout';
import Header from "../components/Header/header";
import Events from '../components/Common/Events';

import Insights from '../components/Insights/insights';
import Ourvalues from '../components/Common/Ourvalues';
import Navbar from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Services from '../components/Common/Services';

export default (props) => {
  const isAmp = useAmp();
  return (

   <div>
    <Ourvalues/>
    </div>
   
    
  );
};

