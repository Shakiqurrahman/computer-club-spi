import Sidebar from "../../components/dashboard-comp/Sidebar";
import DFooter from "../../components/dashboard-comp/DFooter";
import { useEffect, useState } from "react";
import ImageUploader from "../ImageUploadBB";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { basepath } from "../../utility/config/basepath";

const DCreateEvent = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [eventId, setEventId] = useState();
  const [form, setForm] = useState({
    thumbnail: "",
    details: "",
    date: "",
    description: "",
    event_name: "",
    time: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchPath = `${basepath}/event/one/${id}`;
        const response = await axios.patch(fetchPath);
        const { data } = await response.data;
        setEventId(data._id);
        setForm(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (name, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleImageUpload = (imageUrl) => {
    setForm({
      ...form,
      thumbnail: imageUrl,
    });
  };

  const fetchPath = `https://computer-club-spi.onrender.com/api/event/update/${eventId}`;

  const handleEventForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await axios.put(fetchPath, form);
      console.log(data, "datas");
      const res = await data.data;
      if (res) {
        toast.success("Data Update");
        window.location.replace("/admin/dashboard/event");
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

              <textarea
                className="focus:outline-none p-3 rounded-md resize-none"
                cols="20"
                rows="8"
                placeholder="Event Detail"
                value={form.details}
                onChange={(e) => handleChange("details", e.target.value)}
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
