import Sidebar from "../../components/dashboard-comp/Sidebar";
import DFooter from "../../components/dashboard-comp/DFooter";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const DCreateNotice = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    notic_name: "",
    details: "",
    date: "",
  });

  console.log(form);

  const handleChange = (name, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const fetchPath = `https://computer-club-spi.onrender.com/api/notic/create`;
  const handleNoticeForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await axios.post(fetchPath, form);
      const res = await data.data;
      if (res) {
        toast.success("Data created");
        window.location.replace("/admin/dashboard/notice");
      }

      setForm({
        notic_name: "",
        details: "",
        date: "",
      });
    } catch (error) {
      console.log(error);
      // setError(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex overflow-hidden bg-white pt-16">
      <Sidebar />
      <div className="h-full w-full bg-white relative overflow-y-auto lg:ml-60 mt-6 sm:p-4">
        <div className="bg-blue-100 rounded-xl p-4 xl:p-6 max-w-[800px] mx-auto">
          <h1 className="text-3xl text-center font-semibold mb-6 text-secondary">
            Create a Notice!!
          </h1>
          <form onSubmit={handleNoticeForm}>
            <div className="flex flex-col gap-2">
              <input
                className="focus:outline-none p-3 rounded-md"
                type="text"
                placeholder="Notice Name"
                required
                value={form.notic_name}
                onChange={(e) => handleChange("notic_name", e.target.value)}
              />
              <input
                className="focus:outline-none p-3 rounded-md"
                type="date"
                placeholder="day/month/year"
                required
                value={form.date}
                onChange={(e) => handleChange("date", e.target.value)}
              />
              {/* <input
                className="focus:outline-none p-3 rounded-md"
                type="text"
                placeholder="Notice Time"
              /> */}

              <textarea
                className="focus:outline-none p-3 rounded-md resize-none"
                cols="20"
                rows="8"
                value={form.details}
                onChange={(e) => handleChange("details", e.target.value)}
                placeholder="Notice Detail"
              ></textarea>

              <button
                className="px-4 py-3 bg-secondary text-white rounded-lg hover:bg-white border border-transparent hover:border-secondary hover:text-secondary duration-300 font-semibold"
                type="submit"
              >
                {loading ? "Createing...." : `Create Notice`}
              </button>
            </div>
          </form>
        </div>
        <DFooter />
      </div>
    </div>
  );
};

export default DCreateNotice;
