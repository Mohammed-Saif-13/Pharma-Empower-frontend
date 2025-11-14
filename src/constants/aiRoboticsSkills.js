// src/constants/aiRoboticsSkills.js

import { Cpu, Brain, Rocket } from "lucide-react";

/**
 * AI, Digital, & Robotics (Pharma 4.0) Skills
 * Career progression for future-ready pharma professionals
 * Focus on automation, AI/ML, and digital transformation
 */

export const AI_ROBOTICS_STAGES = [
  {
    id: "ai-initial",
    icon: Cpu,
    title: "1. Initial Career Stage (New Graduates, Junior Roles)",
    description:
      "Foundation skills for entering the AI-driven pharma landscape",
    borderColor: "border-purple-500",
    bgColor: "bg-purple-50",
    hoverBgColor: "hover:bg-purple-50",
    tableBgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    skills: [
      {
        number: 1,
        skill: "Data Fluency (Handling large datasets)",
        resource: "Coursera / edX (Data Science Basics)",
      },
      {
        number: 2,
        skill: "Basic Programming (Python/R fundamentals)",
        resource: "Coursera / edX, NPTEL/Swayam",
      },
      {
        number: 3,
        skill: "Smart Automation Awareness (RPA basics)",
        resource: "LinkedIn Learning, Automation Courses",
      },
      {
        number: 4,
        skill: "Digital Health Tool Use (EHR, Telepharmacy platforms)",
        resource: "Platform-specific Training",
      },
      {
        number: 5,
        skill: "Good Data Practices (GCP/GAMP)",
        resource: "NSF, Regulatory Training",
      },
      {
        number: 6,
        skill: "Intro to Machine Learning (ML) concepts",
        resource: "Coursera / edX (Introduction to AI/ML)",
      },
      {
        number: 7,
        skill: "Cloud Computing Basics (AWS/Azure for data storage)",
        resource: "AWS Training, Microsoft Learn",
      },
      {
        number: 8,
        skill: "Data Visualization (Tableau, Power BI)",
        resource: "LinkedIn Learning, Tableau Training",
      },
      {
        number: 9,
        skill: "Robotics Application in Lab/Warehouse (basic operations)",
        resource: "Innopharma Education",
      },
      {
        number: 10,
        skill: "Cybersecurity Awareness (Data privacy/HIPAA/GDPR)",
        resource: "Cybersecurity Fundamentals Courses",
      },
    ],
  },
  {
    id: "ai-interim",
    icon: Brain,
    title: "2. Interim Career Stage (Specialists, Managers, Project Leads)",
    description:
      "Advanced AI/ML skills for mid-level professionals driving digital transformation",
    borderColor: "border-pink-500",
    bgColor: "bg-pink-50",
    hoverBgColor: "hover:bg-pink-50",
    tableBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    skills: [
      {
        number: 1,
        skill:
          "AI/ML Model Interpretation (Translating results for domain experts)",
        resource: "MIT xPRO / Stanford (AI in Healthcare/Pharma)",
      },
      {
        number: 2,
        skill: "Data Governance & Quality",
        resource: "RAPS, Data Quality Certifications",
      },
      {
        number: 3,
        skill: "Process Automation Design (Identifying areas for RPA/robotics)",
        resource: "GetReskilled (Process Validation & Digital)",
      },
      {
        number: 4,
        skill: "AI for Clinical Trials (Patient recruitment, data monitoring)",
        resource: "BioSpace (News on AI adoption)",
      },
      {
        number: 5,
        skill: "Pharmacovigilance Data Mining (AI in Adverse Event detection)",
        resource: "RAPS/NSF (Regulatory implications of AI)",
      },
      {
        number: 6,
        skill:
          "Cloud & System Architecture (Managing large-scale data systems)",
        resource: "AWS Solutions Architect, Azure Training",
      },
      {
        number: 7,
        skill:
          "Computational Drug Design (Basic QSAR, Virtual Screening tools)",
        resource: "NPTEL/Swayam (AI in Drug Discovery)",
      },
      {
        number: 8,
        skill: "IoT/Sensor Data Analysis (Smart manufacturing/logistics)",
        resource: "IoT Analytics Courses",
      },
      {
        number: 9,
        skill: "Digital Therapeutics (DTx) Understanding",
        resource: "Industry Conferences, White Papers",
      },
      {
        number: 10,
        skill: "Vendor & Tech Partner Management",
        resource: "Business Management Programs",
      },
    ],
  },
  {
    id: "ai-senior",
    icon: Rocket,
    title: "3. Senior Level Career Stage (Executives, Directors)",
    description:
      "Strategic AI leadership for C-suite professionals shaping pharma's digital future",
    borderColor: "border-orange-500",
    bgColor: "bg-orange-50",
    hoverBgColor: "hover:bg-orange-50",
    tableBgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    skills: [
      {
        number: 1,
        skill:
          "AI Strategy & Roadmap Development (Integrating AI across value chain)",
        resource: "MIT Sloan / Harvard Medical School (Executive Education)",
      },
      {
        number: 2,
        skill:
          "Ethical AI & Bias Mitigation (Focus on patient safety and equity)",
        resource: "Ethics in AI Courses, Industry Forums",
      },
      {
        number: 3,
        skill: "Digital Transformation Leadership (Driving cultural change)",
        resource: "Harvard Business School, McKinsey Insights",
      },
      {
        number: 4,
        skill: "Investment & ROI Modeling for AI/Robotics",
        resource: "DigitalDefynd (Executive AI courses)",
      },
      {
        number: 5,
        skill: "Regulatory Strategy for AI/SaMD (Software as a Medical Device)",
        resource: "FiercePharma & PharmaVoice (Industry insights)",
      },
      {
        number: 6,
        skill: "Talent Strategy & Reskilling (Managing the AI skills gap)",
        resource: "HR Leadership Programs",
      },
      {
        number: 7,
        skill:
          "Generative AI Applications (Drug/molecule design, content creation)",
        resource: "Consulting Firms White Papers (McKinsey, BCG)",
      },
      {
        number: 8,
        skill:
          "Pharma 4.0 Ecosystem Understanding (Integration of IoT, Robotics, AI)",
        resource: "Industry Conferences, Executive Forums",
      },
      {
        number: 9,
        skill: "M&A/Venture Capital in HealthTech",
        resource: "Investment Strategy Courses",
      },
      {
        number: 10,
        skill:
          "Data Privacy & Global Compliance (Deep understanding of regulations)",
        resource: "Legal/Compliance Executive Training",
      },
    ],
  },
];
