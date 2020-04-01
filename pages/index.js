import { useAmp } from 'next/amp';
import Home from '../components/Home/home'
import Page from '../components/page';
import Footer from '../components/footer';
import ListProperty from '../components/listProperty';
import fetch from 'node-fetch'
import { fetcher } from '../shared/globalFunc';
import Link from 'next/link';
import SocialMeta from '../components/social-meta';
import { SkipNavContent } from '@reach/skip-nav';

export default (props) => {
  const isAmp = useAmp();

  return (
<Home/>
    // <Page title="Houseeasy - The Real estate site">
    //   <SocialMeta
    //     image="/static/twitter-cards/home.jpg"
    //     title="Houseeasy - The Real estate site"
    //     url="https://houseasy.co"
    //     description="Production grade React applications that scale. The world’s leading companies use Next.js to build static and dynamic websites and web applications."
    //   />
    //   <SkipNavContent />
        
    //   <Footer />
    // </Page>
  );
};

