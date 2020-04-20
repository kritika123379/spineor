import Headings from "./designLayouts/headings";

const Banner = () => {
  return (
    <div className="banner">
    <div>
    </div>
      <div className="inner">
        <Headings
          Tag="h1"
          text="Discover a place you'll love to live"
          className="banner-heading"
        />
      </div>

      <style jsx>{`
        .banner {
          width: 100%;
          background-image: url("https://www.trulia.com/javascript/moana//_next/static/assets/hiDpiExtraLarge-e3d56c6337c994b49d5b40cdc7df5bd7.jpg");
          color: #fff;
          height: 580px;
          display: flex;
          align-items: center;
        }
        .banner-heading{
          text-align: center;
          justify-content: center;
        }
        .inner {
          width: 100%;
          max-width: 1024px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        a {
          display: inline-flex;
        }
        p {
          color: #fff;
          margin: 0;
          transition: color 0.15s ease;
        }
        .mobile {
          display: none;
        }
        @media (max-width: 640px) {
          p {
            font-size: 14px;
          }
          p {
            display: none;
          }
          .mobile {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;