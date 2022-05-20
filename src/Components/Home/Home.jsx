import Header from "../Header/Header";
import { Wrapper } from "./Home.styles";
import mobile from "../../Images/image-hero-mobile.png";
import desktop from "../../Images/image-hero-desktop.png";
import audiophile from "../../Images/client-audiophile.svg";
import databiz from "../../Images/client-databiz.svg";
import meet from "../../Images/client-meet.svg";
import maker from "../../Images/client-maker.svg";
import { useWindowWidth } from "../../Hooks/useWindowWidth";

const Home = () => {
  const imageUrl = useWindowWidth() >= 768 ? desktop : mobile;

  return (
    <>
      <Header />
      <Wrapper className="main grid">
        <section className="main__image">
          <img src={imageUrl} alt="hero" className="hero__image" />
        </section>
        <section className="main__content container">
          <div>
            <h1 className="title">
              Make <span className="title__span">remote work</span>
            </h1>
            <p className="description">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="btn-cta">Learn more</button>
          </div>
          <div className="sponsors grid">
            <img src={databiz} alt="databiz logo" />
            <img src={audiophile} alt="audiophile logo" />
            <img src={meet} alt="meet logo" />
            <img src={maker} alt="maker logo" />
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Home;
