
import Sidebar from "../components/dashboard-comp/Sidebar";
import DFooter from "../components/dashboard-comp/DFooter";

const DTeachersPage = () => {
  const handleNoticeForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex overflow-hidden bg-white pt-16">
      <Sidebar />
      <div className="h-full w-full bg-white relative overflow-y-auto lg:ml-60 mt-6 sm:p-4">
        <div className="bg-blue-100 rounded-xl p-4 xl:p-6 max-w-[800px] mx-auto">
          <h1 className="text-3xl text-center font-semibold mb-6 text-secondary">
            Create a Teacher Bio!!
          </h1>
          <form onSubmit={handleNoticeForm}>
            <div className="flex flex-col gap-2">
              <input
                className="focus:outline-none p-3 rounded-md"
                type="text"
                placeholder="Teacher Name"
                required
              />
              <input
                className="focus:outline-none p-3 rounded-md"
                type="text"
                placeholder="Father Name"
              />
              <input
                className="focus:outline-none p-3 rounded-md"
                type="text"
                placeholder="Mother Name"
              />
              <input
                className="focus:outline-none p-3 rounded-md"
                type="text"
                placeholder="Address"
              />
              <input
                className="focus:outline-none p-3 rounded-md"
                type="text"
                placeholder="Department"
              />
              <input
                className="focus:outline-none p-3 rounded-md"
                type="email"
                placeholder="Email"
              />
              <input
                className="focus:outline-none p-3 rounded-md"
                type="number"
                placeholder="Phone Number"
              />

              <input
                className="bg-white focus:outline-none p-3 rounded-md"
                type="file"
              />
               <textarea
          className="focus:outline-none p-3 rounded-md resize-none"
          name="shortDesq"
          cols="20"
          rows="5"
          placeholder="Short Description"
        ></textarea>
              
      <button className="px-4 py-3 bg-secondary text-white rounded-lg hover:bg-white border border-transparent hover:border-secondary hover:text-secondary duration-300 font-semibold" type="submit">Create </button>
            </div>
          </form>
        </div>
      <DFooter />
      </div>
    </div>
  );
};

export default DTeachersPage;
