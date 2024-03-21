import Hero from "../components/Hero";
import OurActivities from "../components/OurActivities";
import OurMission from "../components/OurMission";
import OurVision from "../components/OurVision";
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
      <div className="my-32">
      <OurMission />
      </div>
      <div className="my-32">
      <OurVision />
      </div>
    </div>
  );
};

export default HomePage;
