"use client";

import React from "react";

export default function TemplateModern({ formValues }) {
  const { contactInfo, summary, skills, experience, education, projects } = formValues;

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "30px",
        width: "800px",
        fontFamily: "'Inter', sans-serif",
        color: "#222",
        lineHeight: 1.6,
      }}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">{contactInfo?.fullName || "Your Name"}</h1>
        <p className="text-sm mt-2 text-gray-600">
          {contactInfo?.email} • {contactInfo?.mobile} •{" "}
          {contactInfo?.linkedin && (
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              LinkedIn
            </a>
          )}
        </p>
      </div>

      {/* Summary */}
      {summary && (
        <section className="mb-4">
          <h2 className="text-lg font-semibold border-b pb-1 mb-2">
            Professional Summary
          </h2>
          <p className="text-sm">{summary}</p>
        </section>
      )}

      {/* Skills */}
      {skills && (
        <section className="mb-4">
          <h2 className="text-lg font-semibold border-b pb-1 mb-2">Skills</h2>
          <p className="text-sm">{skills}</p>
        </section>
      )}

      {/* Work Experience */}
      {experience?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-lg font-semibold border-b pb-1 mb-2">Work Experience</h2>
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

      {/* Education */}
      {education?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-lg font-semibold border-b pb-1 mb-2">Education</h2>
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

      {/* Projects */}
      {projects?.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold border-b pb-1 mb-2">Projects</h2>
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
