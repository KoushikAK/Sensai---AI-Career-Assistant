"use client";

import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ResumeTemplate({ formValues }) {
  const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current;

    const opt = {
      margin: 10,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 3, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  const { contactInfo, summary, skills, experience, education, projects } = formValues;

  return (
    <div className="space-y-4">
      <Button
        onClick={handleDownload}
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        <Download className="h-4 w-4 mr-2" />
        Download Resume
      </Button>

      <div
        ref={resumeRef}
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          width: "800px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#222",
          lineHeight: 1.6,
        }}
        className="shadow-lg rounded-md mx-auto border border-gray-300"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">{contactInfo?.fullName || "Your Name"}</h1>
          <p className="text-sm mt-2 text-gray-700">
            {contactInfo?.email && <>📧 {contactInfo.email} | </>}
            {contactInfo?.mobile && <>📱 {contactInfo.mobile} | </>}
            {contactInfo?.linkedin && (
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
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
            <p className="text-gray-800 text-sm">{summary}</p>
          </section>
        )}

        {/* Skills */}
        {skills && (
          <section className="mb-4">
            <h2 className="text-lg font-semibold border-b pb-1 mb-2">Skills</h2>
            <p className="text-gray-800 text-sm">{skills}</p>
          </section>
        )}

        {/* Experience */}
        {experience?.length > 0 && (
          <section className="mb-4">
            <h2 className="text-lg font-semibold border-b pb-1 mb-2">
              Work Experience
            </h2>
            {experience.map((item, idx) => (
              <div key={idx} className="mb-3">
                <h3 className="font-semibold text-base">
                  {item.title} — {item.organization}
                </h3>
                <p className="text-xs text-gray-600 mb-1">
                  {item.startDate} - {item.current ? "Present" : item.endDate}
                </p>
                <p className="text-sm text-gray-800">{item.description}</p>
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
                <p className="text-sm text-gray-800">{item.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {projects?.length > 0 && (
          <section className="mb-2">
            <h2 className="text-lg font-semibold border-b pb-1 mb-2">Projects</h2>
            {projects.map((item, idx) => (
              <div key={idx} className="mb-3">
                <h3 className="font-semibold text-base">
                  {item.title} — {item.organization}
                </h3>
                <p className="text-xs text-gray-600 mb-1">
                  {item.startDate} - {item.current ? "Present" : item.endDate}
                </p>
                <p className="text-sm text-gray-800">{item.description}</p>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
