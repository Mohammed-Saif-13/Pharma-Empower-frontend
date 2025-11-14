// src/constants/careerSkills.js

import { GraduationCap, TrendingUp, Award } from "lucide-react";

/**
 * Career-level skill progression data
 * Three stages: Initial (Entry-level), Interim (Mid-level), Senior (Executive)
 * Each stage contains skills and resource recommendations
 */

export const CAREER_STAGES = [
  {
    id: "initial",
    icon: GraduationCap,
    title: "1. Initial Career Stage (Students/Entry-Level)",
    description:
      "These skills are crucial for landing your first role (e.g., QC Analyst, Lab Technician, Entry-Level CRA)",
    borderColor: "border-blue-500",
    bgColor: "bg-blue-50",
    hoverBgColor: "hover:bg-blue-50",
    tableBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    skills: [
      {
        number: 1,
        skill: "Pharmaceutical Knowledge & Drug Science",
        resource: "Academic Degree, Industry News",
      },
      {
        number: 2,
        skill: "Good Manufacturing Practices (GMP)",
        resource: "NSF, Inspired Pharma Training",
      },
      {
        number: 3,
        skill: "Laboratory Skills (Chromatography, Titration)",
        resource: "University Labs, Practical Training",
      },
      {
        number: 4,
        skill: "Attention to Detail & Accuracy (GRK)",
        resource: "GMP Training, Record-keeping Courses",
      },
      {
        number: 5,
        skill: "Basic Regulatory Awareness (SOPs, Documentation)",
        resource: "Cobblestone, NSF Regulatory",
      },
      {
        number: 6,
        skill: "Teamwork & Collaboration",
        resource: "University Projects, Internships",
      },
      {
        number: 7,
        skill: "Communication Skills (Verbal & Written)",
        resource: "PlatPharm (Soft Skills)",
      },
      {
        number: 8,
        skill: "Analytical & Critical Thinking",
        resource: "Technical Training, Case Studies",
      },
      {
        number: 9,
        skill: "Data Entry/Management Skills",
        resource: "MS Excel, Safety Database (Argus)",
      },
      {
        number: 10,
        skill: "Ethical & Legal Awareness",
        resource: "Professional Ethics, PCI Guidelines",
      },
    ],
  },
  {
    id: "interim",
    icon: TrendingUp,
    title: "2. Interim Career Stage (Mid-Level Professionals)",
    description:
      "Skills necessary for advancing into specialist, managerial, or supervisory roles (e.g., Regulatory Affairs Manager, Senior CRA, Project Lead)",
    borderColor: "border-indigo-500",
    bgColor: "bg-indigo-50",
    hoverBgColor: "hover:bg-indigo-50",
    tableBgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
    skills: [
      {
        number: 1,
        skill: "Project Management (Drug Development/Clinical Trials)",
        resource: "PMP Certification, GetReskilled",
      },
      {
        number: 2,
        skill: "Regulatory Acumen (ICH, GVP, FDA/EMA/CDSCO)",
        resource: "NSF Regulatory, RAPS Certification",
      },
      {
        number: 3,
        skill: "Data Analysis & Interpretation",
        resource: "Advanced Excel, R/Python, Coursera",
      },
      {
        number: 4,
        skill: "Leadership & Mentoring (Team Management)",
        resource: "Management Workshops, Internal Training",
      },
      {
        number: 5,
        skill: "Strategic Thinking (vs. Operational)",
        resource: "PlatPharm Management, Executive Education",
      },
      {
        number: 6,
        skill: "Interpersonal & Relationship Building",
        resource: "Sales Training, LinkedIn Networking",
      },
      {
        number: 7,
        skill: "Medical/Technical Writing",
        resource: "Cobblestone, Medical Writing Courses",
      },
      {
        number: 8,
        skill: "Process Validation & Qualification",
        resource: "GetReskilled, NSF Qualification",
      },
      {
        number: 9,
        skill: "Continuous Improvement (Lean, Six Sigma)",
        resource: "Quality Management Certifications",
      },
      {
        number: 10,
        skill: "Negotiation & Conflict Resolution",
        resource: "Business Skills, Leadership Programs",
      },
    ],
  },
  {
    id: "senior",
    icon: Award,
    title: "3. Senior Level Career Stage (Executives/Leaders)",
    description:
      "High-level skills required for C-suite or VP roles, focusing on governance, market strategy, and organizational vision",
    borderColor: "border-green-500",
    bgColor: "bg-green-50",
    hoverBgColor: "hover:bg-green-50",
    tableBgColor: "bg-green-100",
    iconColor: "text-green-600",
    skills: [
      {
        number: 1,
        skill: "Visionary & Strategic Leadership",
        resource: "Executive MBA, Harvard/Wharton Programs",
      },
      {
        number: 2,
        skill: "Business Acumen & Financial Literacy",
        resource: "P&L, Market Access, MBA/Finance",
      },
      {
        number: 3,
        skill: "Global Regulatory & Compliance Mastery",
        resource: "RAPS Advanced, Audit Experience",
      },
      {
        number: 4,
        skill: "Scientific & Technological Acumen (AI, Genomics)",
        resource: "Industry Conferences, Coursera",
      },
      {
        number: 5,
        skill: "Stakeholder Engagement & Public Speaking",
        resource: "Board Roles, Crisis Communication",
      },
      {
        number: 6,
        skill: "People Management & Emotional Intelligence",
        resource: "360 Feedback, Executive Coaching",
      },
      {
        number: 7,
        skill: "Risk Management & Scenario Planning",
        resource: "Quality Risk Management Certification",
      },
      {
        number: 8,
        skill: "Innovation & Digital Transformation",
        resource: "FiercePharma, Tech Strategy Courses",
      },
      {
        number: 9,
        skill: "M&A/Due Diligence Expertise",
        resource: "Financial/Legal Workshops",
      },
      {
        number: 10,
        skill: "Culture Building (Quality & Compliance)",
        resource: "Organizational Leadership Training",
      },
    ],
  },
];
