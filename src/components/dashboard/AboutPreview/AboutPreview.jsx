import React, { useEffect, useState } from "react";

import AboutForm from "./AboutForm";
import AboutPreviewCard from "./AboutPreviewCard";
import ToastContainer from "../../common/ToastContainer";

import {
  getAboutPreview,
  updateAboutPreview,
} from "../../../services/aboutService";

const AboutPreview = () => {
  const [loading, setLoading] = useState(false);

  const [toasts, setToasts] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    short_description: "",
    full_description: "",
    youtube_url: "",
    highlights: [],
  });

  useEffect(() => {
    loadAbout();
  }, []);

  const showToast = (message, type = "success") => {
    const id = Date.now();

    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) =>
        prev.filter((toast) => toast.id !== id)
      );
    }, 3000);
  };

  const loadAbout = async () => {
    try {
      setLoading(true);

      const res = await getAboutPreview();

      setFormData({
        title: res.title || "",
        short_description: res.short_description || "",
        full_description: res.full_description || "",
        youtube_url: res.youtube_url || "",
        highlights: res.highlights || [],
      });

    } catch (error) {
      console.error(error);
      showToast("Failed to load About section.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const payload = {
      ...formData,
      title: formData.title || "About Us",
    };
      console.log("Submitting:", payload);

      await updateAboutPreview(formData);

      showToast(
        "About section updated successfully.",
        "success"
      );

      loadAbout();

    } catch (error) {
      console.error(error);
      showToast(
        "Failed to update About section.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="p-6">

        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            About Preview
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your About section and preview changes live.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">

          <div className="xl:col-span-3">
            <AboutForm
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleSubmit}
              loading={loading}
            />
          </div>

          <div className="xl:col-span-2">
            <AboutPreviewCard formData={formData} />
          </div>

        </div>
      </div>

      <ToastContainer
        toasts={toasts}
        onRemove={(id) =>
          setToasts((prev) =>
            prev.filter((toast) => toast.id !== id)
          )
        }
      />
    </>
  );
};

export default AboutPreview;