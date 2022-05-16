import { Wrapper } from "./Home.styles";
import mobile from "../../Images/image-hero-mobile.png";

const Home = () => {
  return (
    <Wrapper className="main grid">
      <section className="main__image">
        <img src={mobile} alt="hero" />
      </section>
      <section className="main__content container">
        <div>
          <h1 className="title"> Make remote work</h1>
          <p className="description">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="btn-cta">Learn more</button>
        </div>
        <div className="sponsors grid"></div>
      </section>
    </Wrapper>
  );
};

export default Home;
