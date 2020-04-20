import { useAmp } from 'next/amp';
import Home from '../components/Home/home';
import { fetcher } from '../shared/globalFunc';
import SocialMeta from '../components/social-meta';
import { SkipNavContent } from '@reach/skip-nav';
import Layout from '../components/Layout';
import Header from "../components/Header/header";
import Events from '../components/Common/Events';
import Servicenav from '../components/Header/Servicenav';
import Insights from '../components/Insights/insights';
import Ourvalues from '../components/Common/Ourvalues';



export default (props) => {
  const isAmp = useAmp();
  return (

   <div>
    <Home/>
   </div>
   
    
  );
};

