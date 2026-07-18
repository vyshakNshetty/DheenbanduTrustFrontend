import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSpinner, FaPlus } from "react-icons/fa";



import {
  getAboutSections,
  getTeamMembers,
  updateAboutSection,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from "../../../services/aboutService";

import AboutSectionCard from "./AboutSection";
import TeamMemberCard from "./TeamMemberCard";

const AboutDashboard = () => {
  const [loading, setLoading] = useState(true);

  const [sections, setSections] = useState([]);
  const [team, setTeam] = useState([]);

  // draft object represents an unsaved "new member" card, or null if none is open
  const [draftMember, setDraftMember] = useState(null);

  // track per-item saving/deleting state by id (or "new" for the draft)
  const [savingId, setSavingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = async () => {
    setLoading(true);
    try {
      const [sectionData, teamData] = await Promise.all([
        getAboutSections(),
        getTeamMembers(),
      ]);

      setSections(sectionData || []);
      setTeam(teamData || []);
    } catch (error) {
      console.error("Failed to load about page data:", error);
    } finally {
      setLoading(false);
    }
  };

  // ---- Sections ----

  const handleSaveSection = async (sectionId, formData) => {
    try {
      setSavingId(sectionId);
      const updated = await updateAboutSection(sectionId, formData);

      setSections((prev) =>
        prev.map((s) => (s.id === sectionId ? { ...s, ...updated } : s))
      );

      alert("Section updated successfully");
    } catch (error) {
      console.error(error);
      alert("Unable to update section");
    } finally {
      setSavingId(null);
    }
  };

  // ---- Team Members ----

  const handleSaveMember = async (memberId, formData) => {
    try {
      setSavingId(memberId || "new");

      if (memberId) {
        const updated = await updateTeamMember(memberId, formData);
        setTeam((prev) =>
          prev.map((m) => (m.id === memberId ? { ...m, ...updated } : m))
        );
      } else {
        const created = await addTeamMember(formData);
        setTeam((prev) => [...prev, created]);
        setDraftMember(null);
      }

      alert("Team member saved successfully");
    } catch (error) {
      console.error(error);
      alert("Unable to save team member");
    } finally {
      setSavingId(null);
    }
  };

  const handleDeleteMember = async (memberId) => {
    if (!window.confirm("Remove this team member?")) return;

    try {
      setDeletingId(memberId);
      await deleteTeamMember(memberId);
      setTeam((prev) => prev.filter((m) => m.id !== memberId));
    } catch (error) {
      console.error(error);
      alert("Unable to delete team member");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <FaSpinner className="animate-spin text-5xl text-teal-600" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-10"
    >
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
        <p className="text-gray-500 mt-2">
          Manage the About page content and Board of Trustees.
        </p>
      </div>

      {/* Story Sections (Founder / Journey) */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-700">Story Sections</h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {sections.map((section) => (
            <AboutSectionCard
              key={section.id}
              section={section}
              onSave={handleSaveSection}
              saving={savingId === section.id}
            />
          ))}
        </div>
      </div>

      {/* Board of Trustees */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-700">
            Board of Trustees
          </h2>

          {!draftMember && (
            <button
              onClick={() => setDraftMember({})}
              className="bg-teal-600 hover:bg-teal-700 transition text-white px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm"
            >
              <FaPlus />
              Add Member
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {draftMember && (
              <TeamMemberCard
                key="draft"
                member={draftMember}
                onSave={handleSaveMember}
                onDelete={() => setDraftMember(null)}
                saving={savingId === "new"}
              />
            )}

            {team.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                onSave={handleSaveMember}
                onDelete={handleDeleteMember}
                saving={savingId === member.id}
                deleting={deletingId === member.id}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutDashboard;