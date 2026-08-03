import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaSave,
  FaUpload,
} from "react-icons/fa";

import { getDonation, updateDonation } from "../../services/donationService";

const Donations = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    account_name: "",
    bank_name: "",
    account_number: "",
    ifsc: "",
    micr: "",
    branch: "",
  });

  const [qrPreview, setQrPreview] = useState("");
  const [qrFile, setQrFile] = useState(null);

  useEffect(() => {
    fetchDonation();
  }, []);

  const fetchDonation = async () => {
    try {
      const res = await getDonation();

      setForm({
        account_name: res.account_name || "",
        bank_name: res.bank_name || "",
        account_number: res.account_number || "",
        ifsc: res.ifsc || "",
        micr: res.micr || "",
        branch: res.branch || "",
      });

      setQrPreview(res.qr_code);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setQrFile(file);
    setQrPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);

   try {
  const formData = new FormData();

  Object.entries(form).forEach(([key, value]) => {
    formData.append(key, value);
  });

  if (qrFile) {
    formData.append("qr_code", qrFile);
  }

  const response = await updateDonation(formData);

  alert("Donation details updated successfully.");

  // Refresh the latest data from the server
  fetchDonation();

} catch (err) {
  console.error(err);
  alert("Update failed");
} finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <FaUniversity />
        Donation Details
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid lg:grid-cols-3 gap-8"
      >
        <div className="lg:col-span-2 card p-6 space-y-5">

          <div>
            <label className="font-medium">Account Name</label>
            <input
              name="account_name"
              value={form.account_name}
              onChange={handleChange}
              className="input-field mt-2"
            />
          </div>

          <div>
            <label className="font-medium">Bank Name</label>
            <input
              name="bank_name"
              value={form.bank_name}
              onChange={handleChange}
              className="input-field mt-2"
            />
          </div>

          <div>
            <label className="font-medium">Account Number</label>
            <input
              name="account_number"
              value={form.account_number}
              onChange={handleChange}
              className="input-field mt-2"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="font-medium">IFSC</label>
              <input
                name="ifsc"
                value={form.ifsc}
                onChange={handleChange}
                className="input-field mt-2"
              />
            </div>

            <div>
              <label className="font-medium">MICR</label>
              <input
                name="micr"
                value={form.micr}
                onChange={handleChange}
                className="input-field mt-2"
              />
            </div>
          </div>

          <div>
            <label className="font-medium">Branch</label>
            <input
              name="branch"
              value={form.branch}
              onChange={handleChange}
              className="input-field mt-2"
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="btn-primary flex items-center gap-2"
          >
            <FaSave />
            {saving ? "Saving..." : "Save Changes"}
          </button>

        </div>

        <div className="card p-6">

          <h2 className="text-xl font-semibold mb-5">
            QR Code
          </h2>

          <div className="border rounded-xl overflow-hidden">

            {qrPreview ? (
              <img
                src={qrPreview}
                alt="QR"
                className="w-full h-72 object-contain"
              />
            ) : (
              <div className="h-72 flex items-center justify-center text-gray-400">
                No QR Code
              </div>
            )}

          </div>

          <label className="btn-secondary mt-5 w-full flex justify-center items-center gap-2 cursor-pointer">
            <FaUpload />
            Upload QR Code

            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImage}
            />
          </label>

        </div>
      </form>
    </motion.div>
  );
};

export default Donations;