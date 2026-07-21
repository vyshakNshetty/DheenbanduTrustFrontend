import React, { useEffect, useState } from 'react'
// import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
// import activitiesData from '../data/activities.json'
import { useActivity } from "../context/ActivityContext";
import ActivityModal from "../components/sections/ActivityModal";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaClock } from 'react-icons/fa'
import { activityService } from '../services/activityService';


const Activities = () => {
  const [activities,setActivities]=useState([]);
  const [filter, setFilter] = useState('all')
  // const activities = activitiesData.activities
  const {openActivity} = useActivity()


  useEffect(()=>{
    loadAct();
  },[])

const loadAct = async () => {
  try {
    const data = await activityService.getActivities();
    console.log("API Response:", data);
    setActivities(data);
  } catch (error) {
    console.error(error);
  }
};
  // const categories = ['all', ...new Set(activities.map(a => a.category))]

  // const activities = filter === 'all' 
  //   ? activities 
  //   : activities.filter(a => a.category === filter)

  return (
    <>
      {/* <Helmet>
        <title>Our Activities — HopeBridge</title>
        <meta name="description" content="Explore HopeBridge's ongoing activities and programs making a difference worldwide." />
      </Helmet> */}

      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white dark:from-dark dark:to-dark/80">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark dark:text-white">
              Our Activities
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              Discover the various programs and initiatives we're running to create positive change in communities worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {/* <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-dark/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark/70'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="card overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden"
                 onClick={() => openActivity(activity)}
                 >
                 {activity.image ? (
  <img
    src={activity.image}
    alt={activity.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
) : (
  <div className="w-full h-full flex items-center justify-center bg-gray-200">
    No Image
  </div>
)}
                  <div className="mt-4 flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">

  <div className="flex items-center gap-2">
    <FaCalendarAlt className="text-primary-500" />
    <span>{activity.date}</span>
  </div>

  <div className="flex items-center gap-2">
    <FaMapMarkerAlt className="text-primary-500" />
    <span>{activity.location}</span>
  </div>

</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark dark:text-white mb-2">
                    {activity.title}
                  </h3>
                  {/* <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {activity.description}
                  </p> */}
                  {/* <div className="grid grid-cols-2 gap-3 text-sm"> */}
                    {/* <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <FaCalendarAlt className="text-primary-500" />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <FaMapMarkerAlt className="text-primary-500" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <FaUsers className="text-primary-500" />
                      <span>{activity.participants} participants</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <FaClock className="text-primary-500" />
                      <span>{activity.status}</span>
                    </div> */}
   <div className="mb-4">
  <p className="text-gray-600 dark:text-gray-400 text-sm leading-7 line-clamp-3">
    {activity.description}
  </p>

  <button
    onClick={() => openActivity(activity)}
    className="mt-2 text-primary-600 hover:text-primary-700 font-semibold"
  >
    Read More →
  </button>
</div>
                  {/* </div> */}
                </div>
              </motion.div>
            ))}
          </div>

          {activities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No activities found in this category.</p>
            </div>
          )}
        </div>
      </section>
      <ActivityModal />
    </>
  )
}

export default Activities