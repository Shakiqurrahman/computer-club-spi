const OurActivities = () => {
  const activitiesData = [
    {
      id: 1,
      title: "WorkShop",
    },
    {
      id: 2,
      title: "Contests",
    },
    {
      id: 3,
      title: "Projects",
    },
    {
      id: 4,
      title: "Webinars",
    },
    {
      id: 5,
      title: "Programming Contest ",
    },
    {
      id: 6,
      title: "Gaming Competition",
    },
    {
      id: 7,
      title: "Hackathon",
    },
    {
      id: 8,
      title: "Graphics Contest",
    },
  ];
  return (
    <div>
      <p className="text-gray-500 font-thin text-cente">OUR</p>
      <h2 className="text-[45px] text-secondary font-semibold text-cente">Activities</h2>
      <div className="mt-8 grid lg:grid-cols-4 grid-cols-2 text-center gap-6">
        {activitiesData.map((data) => (
          <div key={data.id} className="p-5 hover:bg-gray-200/75 border border-gray-300  hover:border-secondary rounded-md duration-300">
            <h3 className="sm:text-lg font-medium text-secondary">{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurActivities;
