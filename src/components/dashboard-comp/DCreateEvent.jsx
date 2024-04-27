import Sidebar from "../../components/dashboard-comp/Sidebar";
import DFooter from "../../components/dashboard-comp/DFooter";
import { useState } from "react";
import ImageUploader from "../ImageUploadBB";
import axios from "axios";
import toast from "react-hot-toast";

const DCreateEvent = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    thumbnail: "",
    detail: "",
    date: "",
    description: "",
    event_name: "",
    time: "",
  });

  const handleImageUpload = (imageUrl) => {
    setForm({
      ...form,
      thumbnail: imageUrl,
    });
  };

  const handleChange = (name, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const fetchPath = `https://computer-club-spi.onrender.com/api/event/create`;
  const handleEventForm = async (e) => {
    console.log("Create an Event!!");
    e.preventDefault();
    setLoading(true);

    try {
      const data = await axios.post(fetchPath, form);

      const res = await data.data;
      if (res) {
        console.log(res);
        toast.success(res.message);
        window.location.replace("/admin/dashboard/events");
      }

      setForm({
        thumbnail: "",
        detail: "",
        date: "",
        description: "",
        event_name: "",
        time: "",
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
            Create an Event!!
          </h1>
          <form onSubmit={handleEventForm}>
            <div className="flex flex-col gap-2">
              <input
                className="focus:outline-none p-3 rounded-md"
                type="text"
                placeholder="Event Name"
                value={form.event_name}
                onChange={(e) => handleChange("event_name", e.target.value)}
                required
              />
              <input
                className="focus:outline-none p-3 rounded-md"
                type="text"
                placeholder="Event Date"
                value={form.date}
                onChange={(e) => handleChange("date", e.target.value)}
                required
              />

              <input
                className="focus:outline-none p-3 rounded-md"
                type="text"
                placeholder="Event Time"
                value={form.time}
                onChange={(e) => handleChange("time", e.target.value)}
              />
              <ImageUploader onImageUpload={handleImageUpload} />

              <div className="transition-all duration-500">
                {form.thumbnail && (
                  <img
                    src={form.thumbnail}
                    className="  size-44 object-cover mx-3 my-3 rounded-full shadow-md"
                    alt=""
                  />
                )}
              </div>
              <textarea
                className="focus:outline-none p-3 rounded-md resize-none"
                cols="20"
                rows="8"
                placeholder="Event Detail"
                value={form.detail}
                onChange={(e) => handleChange("detail", e.target.value)}
              ></textarea>
              <textarea
                className="focus:outline-none p-3 rounded-md resize-none"
                cols="20"
                rows="8"
                placeholder="Event description "
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
              ></textarea>

              <button
                className="px-4 py-3 bg-secondary text-white rounded-lg hover:bg-white hover:text-secondary duration-300 font-semibold"
                type="submit"
                disabled={loading}
              >
                {loading ? <p>loading...</p> : "Create an Event"}
              </button>
            </div>
          </form>
        </div>
        <DFooter />
      </div>
    </div>
  );
};

export default DCreateEvent;
