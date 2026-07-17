import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import {  AnimatePresence } from "framer-motion";

import { getAboutSections,getTeamMembers } from '../services/aboutService';
import LoadingSpinner from "../components/common/LoadingSpinner";

const About = () => {
  
  const [section,setSection]=useState([]);
  const [loading,setLoading]=useState(true);
  const [expanded, setExpanded] = useState({});
  const [data , setData]=useState([]);


  useEffect(()=>{
    loadAbout();
    loadTeam();
  },[]);

  const loadAbout=async()=>{
    try {
      const data = await getAboutSections();
        setSection(data)
    } catch (error) {
      console.error(error);
      
    } finally {
      setLoading(false);
    }
  }

  const loadTeam = async()=>{
    try {
      const res = await getTeamMembers();
      setData(res)
      console.log(res)

    } catch (error) {
      console.log(error);
      
    } finally{
      setLoading(false)
    }
  }

  if (loading){
    return <LoadingSpinner fullScreen/>
  }
  

  // Build the loopable sections from founder + journey (add more here later if needed)
  const storySections = [
    { key: "founder", ...section.founder, bg: "bg-white" },
    { key: "journey", ...section.journey, bg: "bg-gray-50" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-6xl font-bold text-dark"
          >
            About us
          </motion.h1>
        </div>
      </section>

      {/* Founder + Journey — looped, alternating image/text side */}
      {section.map((section, index) => {
        const isEven = index % 2 === 0 // even index = image on right, text on left

        return (
          <section key={section.id} className={`section-padding ${section.bg}`}>
            <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={isEven ? "lg:order-1" : "lg:order-2"}
              >
                <h2 className="text-4xl font-bold">{section.title}</h2>

       <div className="mt-5">
  {!expanded[section.id] ? (
    <>
      <p
        className="text-gray-600 leading-8 text-justify"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 6,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {section.description}
      </p>

      {/* Fade Effect */}
      <div className="-mt-12 h-12 bg-gradient-to-t from-white to-transparent"></div>

      <button
        onClick={() =>
          setExpanded((prev) => ({
            ...prev,
            [section.id]: true,
          }))
        }
        className="mt-2 font-semibold text-primary-600 hover:text-primary-700 transition"
      >
        Read More →
      </button>
    </>
  ) : (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          <p className="text-gray-600 leading-8 text-justify">
            {section.description}
          </p>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() =>
          setExpanded((prev) => ({
            ...prev,
            [section.id]: false,
          }))
        }
        className="mt-4 font-semibold text-primary-600 hover:text-primary-700 transition"
      >
        ← Read Less
      </button>
    </>
  )}
</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={isEven ? "lg:order-2" : "lg:order-1"}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-2xl shadow-xl w-full h-[250px] object-cover"
                />
              </motion.div>
            </div>
          </section>
        )
      })}

      {/* Board of Trustees */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-dark mb-14">
            Board of Trustees
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center px-8 py-10"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-primary-100"
                />

                <h3 className="text-2xl font-bold text-dark">{member.name}</h3>

                <p className="text-primary-600 font-medium mt-1">{member.role}</p>

                <p className="mt-5 text-gray-600 leading-7">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;