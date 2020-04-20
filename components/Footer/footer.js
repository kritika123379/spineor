import Link from 'next/link';
import Container from '../container';
import withPure from '../hoc/pure';
import Youtubesvg from "./Youtubesvg"
import Facebook from "./Facebook"
import Linkedin from "./Linkedin"

export default withPure(() => (
  <div className= "topp">
  <Container wide dark>
    <Container>
      <footer>
        <div className="grid f5">
          <div>
            <h4 className="fw5">Quick Links</h4>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <Link href="/abour">
                <a>About</a>
              </Link>
            </p>
            <p>
              <Link href="/success-stories">
                <a>Success Stories</a>
              </Link>
            </p>
            <p>
              <Link href="/insights">
                <a>Insights</a>
              </Link>
            </p>
            <p>
              <Link href="/career">
                <a>Career</a>
              </Link>
            </p>
            <p>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </p>
          </div>
          <div>
            <h4 className="fw5">Services</h4>
            <p>
              <a>Open Source Implementation </a>
            </p>
            <p>
              <a>Scala Programming</a>
            </p>
            <p>
              <a>Restful API'S </a>
            </p>
            <p>
              <a>Automated Devops Deployment</a>
            </p>
            <p>
              <a>Big Data Analytics</a>
            </p>
            <p>
              <a> Native Apps Building</a>
            </p>
          </div>
          <div className="service">
            <p>
              <a>Full/Mean Stack Development</a>
            </p>
            <p>
              <a>Third Party Integrations</a>
            </p>
            <p>
              <a> Crypto Currency Development</a>
            </p>
            <p>
              <a>Java Programming</a>
            </p>
            <p>
              <a>Us Staffing</a>
            </p>
          </div>
          <div>
            <h4 className="fw5">Contact</h4>
            <p>
              <a>
                +91(991)502-1146
              </a>
            </p>
            <p>
              <a>
                hr@spineor.com
              </a>
            </p>
            <div className="flex-container">
              <div className="facebook"><Facebook /></div>
              <div className="linkedin"><Linkedin /></div>
              <div className="youtube"><Youtubesvg /></div>
            </div>
          </div>
        </div>
<style jsx>{`

.footer-box {
    position: relative;
    width: 1344px;
    height: 434px;
    left: 0px;
    top:5415px;
    background: #000000;
}
.quick-links {
    position: absolute;
    width: 125px;
    height: 28px;
    left: 94px;
    top: 88px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
}

.service-links {
    position: absolute;
    width: 125px;
    height: 28px;
    left: 406px;
    top: 88px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
}

.contact {
    position: absolute;
    width: 125px;
    height: 28px;
    left: 1044px;
    top: 88px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
}

.quick-links-inner {
    position: absolute;
    width: 129px;
    height: 186px;
    left: 94px;
    top: 146px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 170%;
    color: #EBEBEB;
}

.service-inner {
    position: absolute;
    width: 258px;
    height: 186px;
    left: 406px;
    top: 146px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 170%;
    color: #EBEBEB;
}

            .center {
              text-align: center;
            }

            .flex-container {
              display: flex;
              flex-direction: row;
              margin-top: 50px;
            }

            .facebook {
                background-color: white;
                border: 2px solid #F1F1F1;
                box-sizing: border-box;
                border-radius: 4px;
                margin-right: 10px;
            }

            .linkedin {
              background-color: white;
              border: 2px solid #F1F1F1;
              box-sizing: border-box;
              border-radius: 4px;
              margin-right: 10px;
            }
          
            .youtube {
                background-color: #FFFFFF;
                border: 2px solid #F1F1F1;
                box-sizing: border-box;
                border-radius: 4px;
            }

            .grid {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              grid-row-gap: 2rem;
            }

            footer {
              padding: 2rem 0 4rem;
              min-height: 200px;
            }
            a,
            p,
            .copyright {
              color: #FFFFFF;
            }
            h4 a {
              color: inherit;
            }
            a {
              color: #FFFFFF;
            }
            .copyright {
              margin-top: 3rem;
            }
            .copyright div {
              margin-top: 0.5rem;
            }
            h4 {
              margin-bottom: 0.75rem;
            }
            p {
              margin-top: 0;
              margin-bottom: 0.25rem;
            }


            @media screen and (max-width: 700px) {
              .grid {
                grid-template-columns: 1fr;
              }
              h4,
              p {
                margin: 0;
              }
              a {
                display: block;
                padding-top: 15px;
                padding-bottom: 15px;
              }
              .flex-container {
                margin-left: 100px
              }
              .service {
                margin-top: -30px
              }
            }
          `}
        </style>
      </footer>
    </Container>
  </Container>
  </div>
));