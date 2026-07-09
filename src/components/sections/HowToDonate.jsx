import React from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaCopy,
  FaQrcode,
  FaGlobe,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import donateData from "../../data/donate.json";
import { useToast } from "../../context/ToastContext";

const HowToDonate = () => {
  const { showToast } = useToast();

  const copyAccountNumber = () => {
    navigator.clipboard.writeText(donateData.india.accountNumber);
    showToast("Account number copied successfully!", "success");
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">

      <div className="container-custom">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >

        

          <h2 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white">
            How to Donate  ?
          </h2>
{/* For donations within India, through Netbanking/NEFT/RTGS/Cheque, 
here is our local account details: */}

          <p className="mt-5 text-gray-600 dark:text-gray-400 leading-8">
            Donate securely through Bank Transfer or UPI. International
            donors can contribute through our trusted partner organization.
          </p>

        </motion.div>

        {/* Bank + QR */}

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Bank Details */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8"
          >

            <div className="flex items-center gap-3 mb-8">

              <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center">

                <FaUniversity className="text-2xl text-teal-700" />

              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  Bank Details
                </h3>

                <p className="text-gray-500 text-sm">
                  {donateData.india.description}
                </p>

              </div>

            </div>

            <div className="space-y-5">

              <InfoRow
                label="Account Name"
                value={donateData.india.accountName}
              />

              <InfoRow
                label="Bank Name"
                value={donateData.india.bankName}
              />

              <div className="flex justify-between items-center border-b pb-3">

                <div>

                  <p className="text-sm text-gray-500">
                    Account Number
                  </p>

                  <h4 className="font-semibold text-lg">
                    {donateData.india.accountNumber}
                  </h4>

                </div>

                <button
                  onClick={copyAccountNumber}
                  className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl transition"
                >
                  <FaCopy />
                  Copy
                </button>

              </div>

              <InfoRow
                label="IFSC"
                value={donateData.india.ifsc}
              />

              <InfoRow
                label="MICR"
                value={donateData.india.micr}
              />

              <InfoRow
                label="Branch"
                value={donateData.india.branch}
              />

            </div>

          </motion.div>

          {/* QR Code */}

          <motion.div
            id="upi"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 text-center"
          >

            <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-100 flex items-center justify-center">

              <FaQrcode className="text-3xl text-teal-700" />

            </div>

            <h3 className="text-2xl font-bold mt-5">
              Scan & Donate
            </h3>

            <p className="text-gray-500 mt-3">
              {donateData.upi.title}
            </p>

            <div className="mt-8">

              <img
                src={donateData.upi.qrImage}
                alt="QR Code"
                className="w-72 mx-auto rounded-2xl shadow-lg border bg-white p-4 hover:scale-105 transition duration-300"
              />

            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              {["Google Pay", "PhonePe", "Paytm", "BHIM"].map((app) => (

                <span
                  key={app}
                  className="px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium"
                >
                  ✓ {app}
                </span>

              ))}

            </div>

          </motion.div>

        </div>

        {/* International */}

        <motion.div
          id="international"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-gradient-to-r from-teal-700 to-emerald-700 rounded-3xl text-white p-10"
        >

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>

              <div className="flex items-center gap-3 mb-4">

                <FaGlobe className="text-3xl" />

                <h2 className="text-3xl font-bold">
                  {donateData.usa.title}
                </h2>

              </div>

              <p className="text-teal-100 leading-8 max-w-3xl">
                {donateData.usa.description}
              </p>

            </div>

            <a
              href={donateData.usa.buttonLink}
              className="bg-white text-teal-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition"
            >
              <FaCheckCircle />

              {donateData.usa.buttonText}

              <FaArrowRight />

            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between items-center border-b border-gray-200 dark:border-slate-700 pb-3">
    <span className="text-gray-500">{label}</span>
    <span className="font-semibold text-slate-800 dark:text-white">
      {value}
    </span>
  </div>
);

export default React.memo(HowToDonate);