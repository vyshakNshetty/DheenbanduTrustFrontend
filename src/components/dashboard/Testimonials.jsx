import React, { useEffect, useState } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaQuoteLeft,
  FaSearch,
  FaTimes,
  FaSpinner,
  FaUserCircle,
  FaSyncAlt,
} from "react-icons/fa";

import { testimonialService } from "../../services/testimonialService";

const emptyForm = {
  name: "",
  role: "",
  content: "",
  avatar: null,
};

const TestimonialsDashboard = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const [deletingId, setDeletingId] = useState(null);

  // Load testimonials from Django
  const loadTestimonials = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await testimonialService.getTestimonials();

      setTestimonials(
        Array.isArray(response)
          ? response
          : response?.results || []
      );
    } catch (err) {
      console.error("Error loading testimonials:", err);
      setError("Unable to load testimonials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  // Open form for a new testimonial
  const openAddModal = () => {
    setEditingId(null);
    setForm(emptyForm);
    setError("");
    setIsModalOpen(true);
  };

  // Open form for editing an existing testimonial
  const openEditModal = (testimonial) => {
    setEditingId(testimonial.id);

    setForm({
      name: testimonial.name || "",
      role: testimonial.role || "",
      content: testimonial.content || "",
      avatar: testimonial.avatar || null,
    });

    setError("");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (saving) return;

    setIsModalOpen(false);
    setEditingId(null);
    setForm(emptyForm);
    setError("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Add or update a testimonial
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setSaving(true);
    setError("");

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("role", form.role);
    formData.append("content", form.content);

    // Upload image only when a new image is selected
    if (form.avatar instanceof File) {
      formData.append("avatar", form.avatar);
    }

    console.log("FormData:", [...formData.entries()]);

    if (editingId !== null) {
      // Update existing testimonial
      await testimonialService.updateTestimonial(
        editingId,
        formData
      );

      console.log("Testimonial updated successfully");
    } else {
      // Create new testimonial
      await testimonialService.createTestimonial(formData);

      console.log("Testimonial created successfully");
    }

    await loadTestimonials();

    setIsModalOpen(false);
    setEditingId(null);
    setForm(emptyForm);

  } catch (err) {
    console.error("Error saving testimonial:", err);

    setError(
      err.response?.data
        ? JSON.stringify(err.response.data)
        : err.message || "Unable to save testimonial."
    );
  } finally {
    setSaving(false);
  }
};

  // Delete a testimonial
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this testimonial?"
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);
      setError("");

      await testimonialService.deleteTestimonial(id);

      setTestimonials((previous) =>
        previous.filter((item) => item.id !== id)
      );
    } catch (err) {
      console.error("Error deleting testimonial:", err);

      setError(
        err.response?.data
          ? JSON.stringify(err.response.data)
          : err.message || "Unable to delete testimonial."
      );
    } finally {
      setDeletingId(null);
    }
  };

  // Search testimonials
  const filteredTestimonials = testimonials.filter((item) => {
    const query = search.toLowerCase();

    return [
      item.name,
      item.role,
      item.content,
    ].some((value) =>
      String(value || "").toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-indigo-600">
              <FaQuoteLeft />
              WEBSITE CONTENT
            </div>

            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Testimonials
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage the messages of support displayed on your website.
            </p>
          </div>

          <button
            type="button"
            onClick={openAddModal}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            <FaPlus />
            Add Testimonial
          </button>
        </div>

        {/* Statistics */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Total Testimonials
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  {testimonials.length}
                </h2>
              </div>

              <div className="rounded-xl bg-indigo-50 p-4 text-indigo-600">
                <FaQuoteLeft size={22} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Search Results
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  {filteredTestimonials.length}
                </h2>
              </div>

              <div className="rounded-xl bg-emerald-50 p-4 text-emerald-600">
                <FaSearch size={22} />
              </div>
            </div>
          </div>
        </div>

        {/* Search and refresh */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, role, or message..."
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <button
            type="button"
            onClick={loadTestimonials}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-100 disabled:opacity-50"
          >
            <FaSyncAlt className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>

        {/* Error message */}
        {error && !isModalOpen && (
          <div
            role="alert"
            className="mb-5 flex items-start justify-between gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            <p>{error}</p>

            <button
              type="button"
              onClick={() => setError("")}
              aria-label="Dismiss error"
            >
              <FaTimes />
            </button>
          </div>
        )}

        {/* Testimonials table */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-5 py-4 sm:px-6">
            <h2 className="font-bold text-gray-900">
              All Testimonials
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              View and manage your website testimonials.
            </p>
          </div>

          {loading ? (
            <div className="flex min-h-64 items-center justify-center gap-3 text-gray-500">
              <FaSpinner className="animate-spin text-indigo-600" />
              Loading testimonials...
            </div>
          ) : filteredTestimonials.length === 0 ? (
            <div className="flex min-h-64 flex-col items-center justify-center px-5 text-center">
              <FaQuoteLeft className="mb-4 text-4xl text-gray-300" />

              <h3 className="font-semibold text-gray-800">
                {search
                  ? "No matching testimonials"
                  : "No testimonials found"}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {search
                  ? "Try a different search term."
                  : "Add your first testimonial to get started."}
              </p>

              {!search && (
                <button
                  type="button"
                  onClick={openAddModal}
                  className="mt-4 font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  + Add your first testimonial
                </button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left">
                <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
                  <tr>
                    <th className="px-6 py-4">Person</th>
                    <th className="px-6 py-4">Message</th>
                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4 text-right">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {filteredTestimonials.map((testimonial) => (
                    <tr
                      key={testimonial.id}
                      className="transition hover:bg-gray-50"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          {testimonial.avatar ? (
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name || "Testimonial author"}
                              className="h-11 w-11 rounded-full border border-gray-200 object-cover"
                            />
                          ) : (
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50 text-indigo-500">
                              <FaUserCircle size={28} />
                            </div>
                          )}

                          <div>
                            <p className="font-semibold text-gray-900">
                              {testimonial.name}
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="max-w-md px-6 py-5">
                        <p className="line-clamp-2 text-sm leading-6 text-gray-600">
                          {testimonial.content}
                        </p>
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-500">
                        #{testimonial.id}
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => openEditModal(testimonial)}
                            title="Edit testimonial"
                            aria-label={`Edit testimonial ${testimonial.id}`}
                            className="rounded-lg border border-indigo-100 bg-indigo-50 p-2.5 text-indigo-600 transition hover:bg-indigo-100"
                          >
                            <FaEdit />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDelete(testimonial.id)}
                            disabled={deletingId === testimonial.id}
                            title="Delete testimonial"
                            aria-label={`Delete testimonial ${testimonial.id}`}
                            className="rounded-lg border border-red-100 bg-red-50 p-2.5 text-red-600 transition hover:bg-red-100 disabled:opacity-50"
                          >
                            {deletingId === testimonial.id ? (
                              <FaSpinner className="animate-spin" />
                            ) : (
                              <FaTrash />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {!loading && filteredTestimonials.length > 0 && (
            <div className="border-t border-gray-100 px-6 py-4 text-sm text-gray-500">
              Showing {filteredTestimonials.length} testimonial
              {filteredTestimonials.length !== 1 ? "s" : ""}
            </div>
          )}
        </div>
      </div>

      {/* Add / Edit modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="testimonial-modal-title"
            className="my-8 w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <div>
                <h2
                  id="testimonial-modal-title"
                  className="text-xl font-bold text-gray-900"
                >
                  {editingId !== null
                    ? "Edit Testimonial"
                    : "Add Testimonial"}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Enter the testimonial details below.
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                disabled={saving}
                aria-label="Close modal"
                className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50"
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-5 p-6">
                {error && (
                  <div
                    role="alert"
                    className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
                  >
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="testimonial-name"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Name *
                    </label>

                    <input
                      id="testimonial-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      placeholder="Enter person's name"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="testimonial-role"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Role *
                    </label>

                    <input
                      id="testimonial-role"
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      placeholder="e.g. Volunteer"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    />
                  </div>
                </div>

                <div>
              <label
  htmlFor="testimonial-avatar"
  className="mb-2 block text-sm font-semibold text-gray-700"
>
  Profile Image
</label>

<input
  id="testimonial-avatar"
  name="avatar"
  type="file"
  accept="image/*"
  onChange={(e) =>
    setForm({ ...form, avatar: e.target.files[0] })
  }
  className="w-full rounded-xl border border-gray-200 px-4 py-3"
 />

                  <p className="mt-1 text-xs text-gray-500">
                    Enter an image URL. This field assumes your API
                    accepts an avatar URL.
                  </p>
                </div>

                {form.avatar && (
  <img
    src={
      typeof form.avatar === "string"
        ? form.avatar
        : URL.createObjectURL(form.avatar)
    }
    alt="Profile preview"
    className="mt-3 h-20 w-20 rounded-full object-cover"
  />
)}

                <div>
                  <label
                    htmlFor="testimonial-content"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Testimonial Message *
                  </label>

                  <textarea
                    id="testimonial-content"
                    name="content"
                    value={form.content}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Enter the testimonial message..."
                    className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />

                  <p className="mt-1 text-right text-xs text-gray-400">
                    {form.content.length} characters
                  </p>
                </div>
              </div>

              <div className="flex flex-col-reverse justify-end gap-3 border-t border-gray-100 bg-gray-50 px-6 py-4 sm:flex-row">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={saving}
                  className="rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving && <FaSpinner className="animate-spin" />}

                  {saving
                    ? "Saving..."
                    : editingId !== null
                      ? "Update Testimonial"
                      : "Save Testimonial"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsDashboard;