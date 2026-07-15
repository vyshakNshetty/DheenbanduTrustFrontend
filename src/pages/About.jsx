import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import aboutData from "../data/about.json";

const About = () => {
  const data = aboutData;

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
            {data.title}
          </motion.h1>

          
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
           

            <h2 className="text-4xl font-bold ">
              {data.founder.title}
            </h2>

            {data.founder.description.map((item, index) => (
              <p
                key={index}
                className="mt-5 text-gray-600 leading-8"
              >
                {item}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={data.founder.image}
              alt={data.founder.title}
              className="rounded-2xl shadow-xl w-full h-[550px] object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* Journey */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={data.journey.image}
              alt={data.journey.title}
              className="rounded-2xl shadow-xl w-full h-[550px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            
            <h2 className="text-4xl font-bold mt-3">
              {data.journey.title}
            </h2>

            {data.journey.description.map((item, index) => (
              <p
                key={index}
                className="mt-5 text-gray-600 leading-8"
              >
                {item}
              </p>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Vision */}
      {/* <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold">
              {data.vision.title}
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              {data.vision.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={data.vision.image}
              alt={data.vision.title}
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </motion.div>

        </div>
      </section> */}

      {/* Mission */}
      {/* <section className="section-padding bg-gray-50">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={data.mission.image}
              alt={data.mission.title}
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold">
              {data.mission.title}
            </h2>

            <div className="mt-8 space-y-5">

              {data.mission.points.map((point, index) => (

                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <FaCheckCircle className="text-primary-600 mt-1" />

                  <p className="text-gray-700">
                    {point}
                  </p>

                </div>

              ))}

            </div>
          </motion.div>

        </div>
      </section> */}

      {/* Team */}
      {/* <section className="section-padding">
        <div className="container-custom">

          <h2 className="text-center text-4xl font-bold mb-16">
            Leadership Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {data.team.map((member) => (

              <motion.div
                key={member.id}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold">
                    {member.name}
                  </h3>

                  <p className="text-primary-600 mt-2">
                    {member.role}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </section> */}
      <section className="section-padding bg-white">
  <div className="container-custom">

    <h2 className="text-4xl font-bold text-center text-dark mb-14">
      Board of Trustees
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {data.team.map((member, index) => (

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

          <h3 className="text-2xl font-bold text-dark">
            {member.name}
          </h3>

          <p className="text-primary-600 font-medium mt-1">
            {member.role}
          </p>

          <p className="mt-5 text-gray-600 leading-7">
            {member.bio}
          </p>

        </motion.div>

      ))}

    </div>

  </div>
</section>
    </>
  );
};

export default About;