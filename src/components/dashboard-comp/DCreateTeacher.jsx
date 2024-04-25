/* eslint-disable react-hooks/rules-of-hooks */
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import DFooter from "./DFooter";
import Sidebar from "./Sidebar";
import ImageUploader from "../ImageUploadBB";
import axios from "axios";

const DCreateTeacher = () => {
   

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    department: "",
    fatherName: "",
    motherName: "",
    address: "",
    image: "",
    email: "",
    shortDesc: "",
    phoneNumber: "",
    position: "",
  });

  const handleChange = (name, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleImageUpload = (imageUrl) => {
    setForm({
      ...form,
      image: imageUrl,
    });
  };

  const fetchPath = `https://computer-club-spi.onrender.com/api/teacher/create`;
  const handleNoticeForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await axios.post(fetchPath, form);
      const res = await data.data;
      if (res) {
        toast.success("Data created");
        window.location.replace("/http://localhost:5173/admin/dashboard/teachers");
      }

      setForm({
        name: "",
        department: "",
        fatherName: "",
        motherName: "",
        address: "",
        image: "",
        email: "",
        shortDesc: "",
        phoneNumber: "",
        position: "",
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
      <Toaster position="top-center" reverseOrder={false} />
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
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Teacher Name"
                required
              />
              <input
                className="focus:outline-none p-3 rounded-md"
                type="text"
                value={form.fatherName}
                onChange={(e) => handleChange("fatherName", e.target.value)}
                placeholder="Father Name"
              />
              <input
                className="focus:outline-none p-3 rounded-md"
                type="text"
                value={form.motherName}
                onChange={(e) => handleChange("motherName", e.target.value)}
                placeholder="Mother Name"
              />
              <input
                className="focus:outline-none p-3 rounded-md"
                type="text"
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder="Address"
              />
              <input
                className="focus:outline-none p-3 rounded-md"
                type="text"
                value={form.department}
                onChange={(e) => handleChange("department", e.target.value)}
                placeholder="Department"
              />
              <input
                className="focus:outline-none p-3 rounded-md"
                type="text"
                value={form.position}
                onChange={(e) => handleChange("position", e.target.value)}
                placeholder="Position"
              />
              <input
                className="focus:outline-none p-3 rounded-md"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Email"
              />
              <input
                className="focus:outline-none p-3 rounded-md"
                type="number"
                value={form.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
                placeholder="Phone Number"
              />

              <ImageUploader onImageUpload={handleImageUpload} />
              <div className="transition-all duration-500">
                {form.image && (
                  <img
                    src={form.image}
                    className="  size-44 object-cover mx-3 my-3 rounded-full shadow-md"
                    alt=""
                  />
                )}
              </div>
              <textarea
                className="focus:outline-none p-3 rounded-md resize-none"
                name="shortDesq"
                cols="20"
                value={form.shortDesc}
                onChange={(e) => handleChange("shortDesc", e.target.value)}
                rows="5"
                placeholder="Short Description"
              ></textarea>

              <button
                className="px-4 py-3 bg-secondary text-white rounded-lg hover:bg-white border border-transparent hover:border-secondary hover:text-secondary duration-300 font-semibold"
                type="submit"
              >
                {loading ? "loading..." : "Create "}
              </button>
            </div>
          </form>
        </div>
        <DFooter />
      </div>
    </div>
  );
};

export default DCreateTeacher;
