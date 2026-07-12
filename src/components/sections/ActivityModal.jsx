import {motion,AnimatePresence} from 'framer-motion';
import { FaTimes, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaClock } from "react-icons/fa";
import {useActivity} from '../../context/ActivityContext';


const ActivityModal = () => {
    const { selectedActivity, closeActivity } = useActivity();
    return (
        <AnimatePresence>
            {selectedActivity && (
                <motion.div
                    className='fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-5'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                     <motion.div
            initial={{ scale: .8 }}
            animate={{ scale: 1 }}
            exit={{ scale: .8 }}
            className="bg-white rounded-2xl max-w-5xl w-full overflow-hidden relative"
          >
                    <button
                    onClick={closeActivity}
                    className="absolute right-5 top-5 bg-white rounded-full p-2 shadow"
                    >
                        <FaTimes className="text-gray-700" />
                    </button>
                    
                    <img src={selectedActivity.image} alt={selectedActivity.title} className='w-full h-96 object-cover' />
                    <div className="p-8">
                        
              <span className="bg-primary-100 text-primary-600 px-4 py-1 rounded-full text-sm">
                {selectedActivity.category}
              </span>

              <h2 className="text-4xl font-bold mt-5">
                {selectedActivity.title}
              </h2>

              <p className="mt-5 text-gray-600">
                {selectedActivity.description}
              </p>

              {/* <div className="grid md:grid-cols-2 gap-4 mt-8">

                <div className="flex items-center gap-3">
                  <FaCalendarAlt />
                  {selectedActivity.date}
                </div>

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt />
                  {selectedActivity.location}
                </div>

                <div className="flex items-center gap-3">
                  <FaUsers />
                  {selectedActivity.participants} Participants
                </div>

                <div className="flex items-center gap-3">
                  <FaClock />
                  {selectedActivity.status}
                </div>
                </div> */}
                
                </div>
                </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ActivityModal;