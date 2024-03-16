import Hero from "../components/Hero";
import OurActivities from "../components/OurActivities";
import WhyJoinUs from "../components/WhyJoinUs";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="my-32">
      <WhyJoinUs />
      </div>
      <div className="my-32">
      <OurActivities />
      </div>
    </div>
  );
};

export default HomePage;
