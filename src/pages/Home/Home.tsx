import Layout from "../../components/Layout/Layout";
import "./Home.scss";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <h1 className="home__header">Welcome to Shred Shed</h1>
        <div className="home__intro">
          <p>
            Welcome to Shred Shed – The Ultimate Destination for Guitar
            Enthusiasts! <br /> <br />
            At Shred Shed, we're passionate about all things guitar. Whether
            you're a seasoned musician, a budding guitarist, or simply someone
            with an appreciation for the art of six strings, you've arrived at
            the perfect place. Our mission is to bring together the world of
            guitars in one harmonious space, offering you a comprehensive
            platform to compare prices, discover your dream instrument, and
            connect with top sellers from around the web. Join us in exploring
            the universe of guitars and unlock a world of melodies, riffs, and
            endless possibilities."
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
