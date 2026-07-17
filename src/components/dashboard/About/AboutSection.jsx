// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FaSave, FaSpinner } from "react-icons/fa";

// import {
//   getHeroSection,
//   updateHeroSection,
// } from "../../../services/heroService";

// import HeroForm from "./HeroForm";
// import HeroPreview from "./ HeroPreview";

// const HeroSection = () => {
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
// const [form, setForm] = useState({
//   title: "",
//   subtitle: "",
//   description: "",
//   founder_title: "",
//   founder_description: "",
//   journey_title: "",
//   journey_description: "",
//   image: null,
//   is_active: true,
// });

// const [previewImage, setPreviewImage] = useState("");

// useEffect(() => {
//   loadAbout();
// }, []);

// const loadAbout = async () => {
//   try {
//     const data = await getAboutSection();

//     setForm({
//       title: data.title || "",
//       description: data.description || "",
//       founder_title: data.founder_title || "",
//       founder_description: data.founder_description || "",
//       journey_title: data.journey_title || "",
//       journey_description: data.journey_description || "",
//       image: null,
//       is_active: data.is_active,
//     });

//     if (data.image) {
//       setPreviewImage(data.image);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

//   const handleChange = (e) => {
//     const { name, value, checked, type } = e.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleImage = (e) => {
//     const file = e.target.files[0];

//     if (!file) return;

//     setForm((prev) => ({
//       ...prev,
//       background_image: file,
//     }));

//     setPreviewImage(URL.createObjectURL(file));
//   };

//   const removeImage = () => {
//     setPreviewImage("");

//     setForm((prev) => ({
//       ...prev,
//       background_image: null,
//     }));
//   };

//   const handleSubmit = async () => {
//     if (!form.badge.trim()) {
//       alert("Badge is required");
//       return;
//     }

//     if (!form.title.trim()) {
//       alert("Title is required");
//       return;
//     }

//     if (!form.description.trim()) {
//       alert("Description is required");
//       return;
//     }

//     try {
//       setSaving(true);

//       const formData = new FormData();

//   formData.append("badge", form.badge);
//   formData.append("title", form.title);
//   formData.append("description", form.description);
//   formData.append("is_active", form.is_active);

//   if (form.background_image) {
//     formData.append("background_image", form.background_image);
//   }

//   // Temporarily skip these fields
//   // formData.append("donate_button_text", form.donate_button_text);
//   // formData.append("donate_button_link", form.donate_button_link);
//   // formData.append("valunteer_button_text", form.valunteer_button_text);
//   // formData.append("valunteer_button_link", form.valunteer_button_link);

//       await updateHeroSection(formData);

//       alert("Hero Section Updated Successfully");
//     } catch (error) {
//       console.error(error);
//       alert("Unable to update Hero Section");
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-[70vh]">
//         <FaSpinner className="animate-spin text-5xl text-teal-600" />
//       </div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="space-y-6"
//     >
//       {/* Header */}

//       <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">

//         <div>
//           <h1 className="text-3xl font-bold text-gray-800">
//             Hero Section
//           </h1>

//           <p className="text-gray-500 mt-2">
//             Manage homepage hero section.
//           </p>
//         </div>

//         <button
//           onClick={handleSubmit}
//           disabled={saving}
//           className="bg-teal-600 hover:bg-teal-700 transition text-white px-6 py-3 rounded-xl flex items-center gap-3 disabled:opacity-60"
//         >
//           {saving ? (
//             <>
//               <FaSpinner className="animate-spin" />
//               Saving...
//             </>
//           ) : (
//             <>
//               <FaSave />
//               Save Changes
//             </>
//           )}
//         </button>

//       </div>

//       {/* Content */}

//       <div className="grid lg:grid-cols-2 gap-6">

//         <HeroForm
//           form={form}
//           handleChange={handleChange}
//           handleImage={handleImage}
//           previewImage={previewImage}
//           removeImage={removeImage}
//         />

//         <HeroPreview
//           form={form}
//           previewImage={previewImage}
//         />

//       </div>

//     </motion.div>
//   );
// };

// export default HeroSection;