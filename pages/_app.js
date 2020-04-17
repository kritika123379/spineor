import { DefaultSeo } from 'next-seo'
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../next-seo.config'

export default function MyApp({ Component, pageProps }) {
  return (
    /* Here we call NextSeo and pass our default configuration to it  */
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}