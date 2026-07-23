import React, { useEffect, useState } from "react";
import { FaEye, FaTrash, FaSearch } from "react-icons/fa";
import { sendContactMessage,getContactMessages } from "../../services/aboutService";

const DashboardContact = () => {
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [search, setSearch] = useState("");

  const loadMessages = async () => {
    try {
      const res = await getContactMessages();
      setMessages(res);
      setFilteredMessages(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  useEffect(() => {
    const filtered = messages.filter((item) =>
      item.full_name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.subject.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredMessages(filtered);
  }, [search, messages]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this message?")) return;

    try {
      await deleteContactMessage(id);
      loadMessages();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Contact Messages
        </h2>

        <div className="relative w-80">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-lg pl-10 py-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-4 text-left">Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Date</th>
              <th className="text-center">Action</th>
            </tr>

          </thead>

          <tbody>

            {filteredMessages.map((item) => (

              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{item.full_name}</td>

                <td>{item.email}</td>

                <td>{item.subject}</td>

                <td>
                  {new Date(item.created_at).toLocaleDateString()}
                </td>

                <td>

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() => setSelectedMessage(item)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEye />
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {selectedMessage && (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

          <div className="bg-white rounded-xl w-[600px] p-6">

            <h2 className="text-2xl font-bold mb-4">
              Contact Message
            </h2>

            <p><strong>Name:</strong> {selectedMessage.full_name}</p>

            <p><strong>Email:</strong> {selectedMessage.email}</p>

            <p><strong>Subject:</strong> {selectedMessage.subject}</p>

            <div className="mt-4">
              <strong>Message</strong>

              <div className="mt-2 border rounded-lg p-4 bg-gray-50 whitespace-pre-wrap">
                {selectedMessage.message}
              </div>
            </div>

            <button
              onClick={() => setSelectedMessage(null)}
              className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg"
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
};

export default DashboardContact;