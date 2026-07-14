import React, { useState,useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPlus, FaTrash, FaEdit, FaSearch } from 'react-icons/fa'
import { galleryService } from '../../services/galleryService'
// import { div, title } from 'framer-motion/client'


const DashboardGallery = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [galleryItems,setGalleryItems]=useState([]);
  const [loading,setLoading]=useState(true);
  const [editingItem,setEditingItem]=useState(null);
  const [formData,setFormData]= useState({
    title:"",
    description:"",
    category:"",
    image:null,
    location:"",
  })

  const [showAddModal, setShowAddModal] = useState(false);

const [newGallery, setNewGallery] = useState({
  title: "",
  description: "",
  category: "",
  image: null,
  location: "",
});

  useEffect(()=>{
    loadGallery();
  },[]);

  const loadGallery = async () => {
    try {
      const response = await galleryService.getImages();
      setGalleryItems(response);
      console.log("data",response)
    } catch (error) {
      console.error(error)
      
    }finally{
      setLoading(false);
    }
  }

const handleCreate = async () => {
  try {
    await galleryService.createImage(newGallery);

    await loadGallery();

    setShowAddModal(false);

    setNewGallery({
      title: "",
      description: "",
      category: "",
      image: null,
      location: "",
    });

    alert("Gallery image added successfully.");
  } catch (error) {
    console.error(error);
    alert(JSON.stringify(error));
  }
};
  const handleEdit = (item)=> {
    setEditingItem(item);
    setFormData({
      title:item.title,
      description:item.description,
      category:item.category,
      image:null,
      location:item.location,
    })
  }

  const handleUpdate = async ()=>{
    try {
      await galleryService.updateImage(editingItem.id,formData);
      await loadGallery();
      setEditingItem(null);
      alert("Gallery updated successfully")
    } catch (error) {
      console.error(error);
      
    }
  }
  const handleDelete = async (id)=>{
    if (!window.confirm("Delete this image?")) return;
    try {
      await galleryService.deleteImage(id);
      setGalleryItems((prev)=>
      prev.filter((item)=>item.id !== id)
    );
    } catch (error) {
      console.error(error);
    }
  }


  const filteredItems = galleryItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

const CATEGORY_OPTIONS = [
  { value: "education", label: "Education" },
  { value: "healthcare", label: "Healthcare" },
  { value: "women", label: "Women" },
  { value: "sustainability", label: "Sustainability" },
  { value: "community", label: "Community" },
  { value: "volunteers", label: "Volunteers" },
];

  if (loading){
    return(
      <div className="flex justify-center h-screen">
        Loading...
      </div>
  );
  }
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-dark dark:text-white">
            Gallery Management
          </h1>
          <button 
          onClick={() => setShowAddModal(true)}
          className="btn-primary gap-2">
            <FaPlus />
            Add Image
          </button>
        </div>

        <div className="relative mb-6">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search gallery..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pl-10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="card overflow-hidden group"
            >
              <img
              src={item.image}
              alt={item.title}
              className='w-full h-48 object-cover'
              />
              <div className="p-4">
                <h4 className="font-bold text-dark dark:text-white">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.location}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{new Date(item.created_at).toLocaleDateString()}</p>
                <div className="mt-3 flex gap-2">
                  <button
                  onClick={()=> handleEdit(item)}
                   className="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors">
                    <FaEdit />
                  </button>
                  <button 
                  onClick={()=>handleDelete(item.id)}
                  className="p-2 bg-red-50 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {showAddModal && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

    <div className="bg-white rounded-lg p-6 w-[500px]">

      <h2 className="text-xl font-bold mb-4">
        Add Gallery Image
      </h2>

      <input
        className="input-field mb-3"
        placeholder="Title"
        value={newGallery.title}
        onChange={(e) =>
          setNewGallery({ ...newGallery, title: e.target.value })
        }
      />

      <textarea
        className="input-field mb-3"
        placeholder="Description"
        value={newGallery.description}
        onChange={(e) =>
          setNewGallery({ ...newGallery, description: e.target.value })
        }
      />

<select
  className="input-field mb-3"
  value={newGallery.category}
  onChange={(e) =>
    setNewGallery({
      ...newGallery,
      category: e.target.value,
    })
  }
>
  <option value="">Select Category</option>

  {CATEGORY_OPTIONS.map((item) => (
    <option key={item.value} value={item.value}>
      {item.label}
    </option>
  ))}
</select>

     <input
  type="file"
  accept="image/*"
  className="input-field mb-3"
  onChange={(e) =>
    setNewGallery({
      ...newGallery,
      image: e.target.files[0],
    })
  }
/>

      <input
        className="input-field mb-4"
        placeholder="Location"
        value={newGallery.location}
        onChange={(e) =>
          setNewGallery({ ...newGallery, location: e.target.value })
        }
      />

      <div className="flex justify-end gap-3">

        <button
          onClick={() => setShowAddModal(false)}
          className="btn-secondary"
        >
          Cancel
        </button>

        <button
          onClick={handleCreate}
          className="btn-primary"
        >
          Save
        </button>

      </div>

    </div>

  </div>
)}
        {editingItem && (
<div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

    <div className="bg-white p-6 rounded-lg w-[500px]">

        <h2 className="text-xl font-bold mb-4">
            Edit Gallery
        </h2>

        <input
            className="input-field mb-3"
            value={formData.title}
            onChange={(e)=>
                setFormData({...formData,title:e.target.value})
            }
            placeholder="Title"
        />

        <input
            className="input-field mb-3"
            value={formData.location}
            onChange={(e)=>
                setFormData({...formData,location:e.target.value})
            }
            placeholder="Location"
        />

 <select
  className="input-field mb-3"
  value={formData.category}
  onChange={(e) =>
    setFormData({
      ...formData,
      category: e.target.value,
    })
  }
>
  <option value="">Select Category</option>

  {CATEGORY_OPTIONS.map((item) => (
    <option key={item.value} value={item.value}>
      {item.label}
    </option>
  ))}
</select>

       <input
    type="file"
    accept="image/*"
    className="input-field mb-3"
    onChange={(e) =>
        setFormData({
            ...formData,
            image: e.target.files[0],
        })
    }
/>

        <textarea
            className="input-field mb-3"
            value={formData.description}
            onChange={(e)=>
                setFormData({...formData,description:e.target.value})
            }
            placeholder="Description"
        />

        <div className="flex justify-end gap-3">

            <button
                onClick={()=>setEditingItem(null)}
                className="btn-secondary"
            >
                Cancel
            </button>

            <button
                onClick={handleUpdate}
                className="btn-primary"
            >
                Update
            </button>

        </div>

    </div>

</div>
)}

        {filteredItems.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No gallery items found
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default DashboardGallery