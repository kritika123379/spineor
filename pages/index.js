import { useAmp } from 'next/amp';
import Home from '../components/Home/home';
import { fetcher } from '../shared/globalFunc';
import SocialMeta from '../components/social-meta';
import { SkipNavContent } from '@reach/skip-nav';
import Layout from '../components/Layout';


export default (props) => {
  const isAmp = useAmp();
  return (
   <Layout>
    <Home/>
    </Layout>
  );
};

