import Hero from "../components/Hero";
import WhyJoinUs from "../components/WhyJoinUs";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="my-32">
      <WhyJoinUs />
      </div>
    </div>
  );
};

export default HomePage;
