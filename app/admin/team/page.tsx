'use client';

import { useState } from 'react';
import { useContentStore } from '@/lib/store';
import { TeamMember } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';

export default function AdminTeamPage() {
  const { teamMembers, addTeamMember, updateTeamMember, deleteTeamMember } =
    useContentStore();
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<TeamMember>>({
    name: '',
    role: '',
    email: '',
    skills: [],
    bio: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      updateTeamMember(editingId, {
        ...formData,
        updatedAt: new Date().toISOString(),
      });
      setEditingId(null);
    } else {
      const newMember: TeamMember = {
        id: uuidv4(),
        name: formData.name || '',
        role: formData.role || '',
        email: formData.email || '',
        skills: formData.skills || [],
        bio: formData.bio || '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      addTeamMember(newMember);
    }

    setFormData({ name: '', role: '', email: '', skills: [], bio: '' });
    setShowForm(false);
  };

  const handleEdit = (member: TeamMember) => {
    setFormData(member);
    setEditingId(member.id);
    setShowForm(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skills = e.target.value.split(',').map((s) => s.trim());
    setFormData((prev) => ({
      ...prev,
      skills,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Team Members</h1>
          <button
            onClick={() => {
              setShowForm(!showForm);
              setEditingId(null);
              setFormData({ name: '', role: '', email: '', skills: [], bio: '' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            {showForm ? 'Cancel' : 'Add Member'}
          </button>
        </div>

        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">
              {editingId ? 'Edit Team Member' : 'Add New Team Member'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name || ''}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded px-3 py-2"
                  required
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Job Role"
                  value={formData.role || ''}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded px-3 py-2"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email || ''}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded px-3 py-2"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone (Optional)"
                  value={formData.phone || ''}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <textarea
                name="bio"
                placeholder="Bio / Description"
                value={formData.bio || ''}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                rows={3}
              />

              <input
                type="text"
                placeholder="Skills (comma-separated: React, Node.js, Python)"
                value={formData.skills?.join(', ') || ''}
                onChange={handleSkillsChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
                >
                  {editingId ? 'Update Member' : 'Add Member'}
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm mb-2">{member.email}</p>
              {member.bio && (
                <p className="text-gray-500 text-sm mb-3">{member.bio}</p>
              )}
              {member.skills && member.skills.length > 0 && (
                <div className="mb-3 flex flex-wrap gap-1">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleEdit(member)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTeamMember(member.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {teamMembers.length === 0 && !showForm && (
          <div className="text-center py-12">
            <p className="text-gray-500">No team members yet. Add one to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}
