"use client";

import React from "react";

export default function TemplateCreative({ formValues }) {
  const { contactInfo, summary, skills, experience, education, projects } = formValues;

  return (
    <div
      style={{
        backgroundColor: "#f8fafc",
        padding: "30px",
        width: "800px",
        fontFamily: "'Poppins', sans-serif",
        color: "#1e293b",
        lineHeight: 1.6,
      }}
    >
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">
          {contactInfo?.fullName || "Your Name"}
        </h1>
        <p className="text-sm mt-2 text-gray-700">
          {contactInfo?.email} | {contactInfo?.mobile} | {contactInfo?.linkedin}
        </p>
      </div>

      {summary && (
        <section className="mb-4">
          <h2 className="text-lg font-semibold text-indigo-600">
            Professional Summary
          </h2>
          <p className="text-sm">{summary}</p>
        </section>
      )}

      {skills && (
        <section className="mb-4">
          <h2 className="text-lg font-semibold text-indigo-600">Skills</h2>
          <p className="text-sm">{skills}</p>
        </section>
      )}

      {experience?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-lg font-semibold text-indigo-600">Work Experience</h2>
          {experience.map((item, idx) => (
            <div key={idx} className="mb-3">
              <h3 className="font-semibold text-base">
                {item.title} — {item.organization}
              </h3>
              <p className="text-xs text-gray-600 mb-1">
                {item.startDate} - {item.current ? "Present" : item.endDate}
              </p>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </section>
      )}

      {education?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-lg font-semibold text-indigo-600">Education</h2>
          {education.map((item, idx) => (
            <div key={idx} className="mb-3">
              <h3 className="font-semibold text-base">
                {item.title} — {item.organization}
              </h3>
              <p className="text-xs text-gray-600 mb-1">
                {item.startDate} - {item.current ? "Present" : item.endDate}
              </p>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </section>
      )}

      {projects?.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-indigo-600">Projects</h2>
          {projects.map((item, idx) => (
            <div key={idx} className="mb-3">
              <h3 className="font-semibold text-base">
                {item.title} — {item.organization}
              </h3>
              <p className="text-xs text-gray-600 mb-1">
                {item.startDate} - {item.current ? "Present" : item.endDate}
              </p>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
