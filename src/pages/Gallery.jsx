import React, { useState, useMemo, useEffect } from "react";// import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
// import galleryData from '../data/gallery.json'
import { galleryService } from "../services/galleryService";


const Gallery = () => {
  const [filter, setFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sortBy, setSortBy] = useState("newest");
  const INITIAL_COUNT = 6;
const [showAllGallery, setShowAllGallery] = useState(false);
const [showAllThumbs, setShowAllThumbs] = useState(false);
const [galleryData, setGalleryData] = useState({
  title: "Gallery",
  subtitle: "Explore our moments",
  images: [],
});

const [loading, setLoading] = useState(true);

useEffect(() => {
  loadGallery();
}, []);


const loadGallery = async () => {
  try {
    const response = await galleryService.getImages();

    setGalleryData({
      title: "Gallery",
      subtitle: "Explore our moments",
      images: response,
    });
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

const categories = useMemo(() => {
    const images = galleryData.images || [];
    return ["all", ...new Set(images.map(img => img.category))];
}, [galleryData.images]);

const filteredImages = useMemo(() => {
const allImages = galleryData.images || [];

let images =
    filter === "all"
      ? [...allImages]
      : allImages.filter(img => img.category === filter);

  images.sort((a, b) =>
  sortBy === "newest"
    ? new Date(b.created_at) - new Date(a.created_at)
    : new Date(a.created_at) - new Date(b.created_at)
);

  return images;
}, [galleryData.images, filter, sortBy]);

 const openLightbox = (image, index) => {
  setSelectedImage(image);
  setCurrentIndex(index);
  setShowAllThumbs(false);
  document.body.style.overflow = "hidden";
};
const closeLightbox = () => {
  setSelectedImage(null);
  setShowAllThumbs(false);
  document.body.style.overflow = "unset";
};

  const navigateLightbox = (direction) => {
    const newIndex = (currentIndex + direction + filteredImages.length) % filteredImages.length
    setCurrentIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }


  if (loading) {
  return (
    <div className="flex items-center justify-center h-screen">
      Loading...
    </div>
  );
}
  return (
    <>
      {/* <Helmet>
        <title>Gallery — HopeBridge</title>
        <meta name="description" content="Explore moments of impact through HopeBridge's photo gallery from our programs worldwide." />
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
              {galleryData.title}
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              {galleryData.subtitle}
            </p>
          </motion.div>
        </div>
        
      </section>
      

      <section className="section-padding">
        
        
        <div className="container-custom">
          
          
          <div className="flex flex-wrap gap-3 justify-center mb-12">
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
            <select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
  className="px-4 py-2 rounded-xl border border-gray-200 bg-white shadow-sm"
>
  <option value="newest">Newest First</option>
  <option value="oldest">Oldest First</option>
</select>
          </div>
          

        <motion.div
  layout
  className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
>
  {(showAllGallery
    ? filteredImages
    : filteredImages.slice(0, INITIAL_COUNT)
  ).map((image, index) => (
    <motion.div
      key={image.id}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden"
      onClick={() => openLightbox(image, index)}
    >
      <img
        src={image.image}
        alt={image.title}
        className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">

        <div className="text-white">

          <h3 className="font-semibold">
            {image.title}
          </h3>

          <p className="text-sm">
            {image.location}
          </p>

        </div>

      </div>

    </motion.div>
  ))}

  {!showAllGallery && filteredImages.length > INITIAL_COUNT && (
    <motion.div
      layout
      whileHover={{ scale: 1.03 }}
      onClick={() => setShowAllGallery(true)}
      className="break-inside-avoid h-72 rounded-2xl overflow-hidden cursor-pointer relative"
    >
      <img
        src={filteredImages[INITIAL_COUNT].image}
        alt=""
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white">

        <h2 className="text-5xl font-bold">
          +{filteredImages.length - INITIAL_COUNT}
        </h2>

        <p>More Photos</p>

      </div>

    </motion.div>
  )}
</motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
     <AnimatePresence>
  {selectedImage && (

    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
      onClick={closeLightbox}
    >

      {/* Close */}
      <button
        onClick={closeLightbox}
        className="absolute top-6 right-6 text-white text-3xl"
      >
        <FaTimes/>
      </button>

      {/* Prev */}
      <button
        onClick={(e)=>{
          e.stopPropagation();
          navigateLightbox(-1);
        }}
        className="absolute left-6 text-white text-4xl"
      >
        <FaChevronLeft/>
      </button>

      {/* Next */}
      <button
        onClick={(e)=>{
          e.stopPropagation();
          navigateLightbox(1);
        }}
        className="absolute right-6 text-white text-4xl"
      >
        <FaChevronRight/>
      </button>

      <motion.div
        initial={{scale:.9}}
        animate={{scale:1}}
        exit={{scale:.9}}
        className="max-w-6xl w-full"
        onClick={(e)=>e.stopPropagation()}
      >

        <img
          src={selectedImage.image}
          alt={selectedImage.title}
          className="w-full max-h-[70vh] object-contain rounded-xl"
        />

        <div className="text-center text-white mt-5">

          <h2 className="text-2xl font-bold">
            {selectedImage.title}
          </h2>

          <p className="text-gray-400">
            {selectedImage.location}
          </p>

        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 overflow-x-auto mt-6 pb-2">

          {(showAllThumbs
            ? filteredImages
            : filteredImages.slice(0,INITIAL_COUNT)
          ).map((img,index)=>(

            <img
              key={img.id}
              src={img.image}
              alt=""
              onClick={()=>{
                setSelectedImage(img)
                setCurrentIndex(index)
              }}
              className={`w-24 h-20 rounded-lg object-cover cursor-pointer border-4 flex-shrink-0 ${
                selectedImage.id===img.id
                  ? "border-primary-500"
                  : "border-transparent"
              }`}
            />

          ))}

          {!showAllThumbs && filteredImages.length>INITIAL_COUNT && (

            <div
              onClick={() => setShowAllThumbs(true)}
              className="relative w-24 h-20 rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
            >

              <img
                src={filteredImages[INITIAL_COUNT].image}
                className="w-full h-full object-cover"
                alt=""
              />

              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white">

                <h2 className="text-lg font-bold">
                  +{filteredImages.length-INITIAL_COUNT}
                </h2>

                <p className="text-xs">
                  More
                </p>

              </div>

            </div>

          )}

        </div>

      </motion.div>

    </motion.div>

  )}
</AnimatePresence>
    </>
  )
}

export default Gallery