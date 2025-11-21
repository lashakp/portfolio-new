import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Globe } from "lucide-react";

const user = {
  name: "Paul Akporarhe",
  title: "B2B and B2C Sales • Growth Ops • Data Projects • Customer Success & Client Relations",
  location: "Abuja, Nigeria",
  email: "akporarhe@gmail.com",
  phone: "+2348106519628",
  github: "https://github.com/lashakp",
  linkedin: "https://www.linkedin.com/in/paul-akporarhe/",
  huggingface: "https://huggingface.co/lashakp",
  tagline: `I combine B2B and B2C sales, customer success & client relations expertise with data-driven projects — from web scraping and structured querying to ML-powered prediction tools and data preprocessing (pandas). I am also a passionate developer skilled in React, Node.js, Python, and data analysis.
          I have hands-on experience in customer success & client relations, web scraping, text-to-speech technologies, and building
          full-stack applications. My goal is to bridge the gap between data and user-friendly solutions.`,
  about:
    "With a background in sales, customer success & client relations, field operations, and growth enablement, I’ve helped companies scale outreach, manage client pipelines, and optimize performance. On the technical side, I build scrapers, TTS demos, structured querying analytics, and machine learning models (like my Breast Cancer Recurrence Predictor on Hugging Face). My focus is blending business impact with technical execution.",
  skills: [
    "B2B & B2C Sales Strategy",
    "Customer Success & Client Relations",
    "Lead generation & outreach",
    "Growth operations & CRM workflows",
    "Web scraping (Python, BeautifulSoup, Selenium)",
    "Machine Learning (Scikit-learn, Gradio, Hugging Face)",
    "Text-to-Speech prototypes (Streamlit, ElevenLabs APIs)",
    "Structured querying (SQL, Pandas)",
  ],
  experience: [
    {
      company: "Omeife Technology",
      role: "Data Scientist, TTS & Web Scraping Engineer",
      dates: "Feb 2024 — Oct 2025",
      bullets: [
        "Built TTS pipelines and voice demos for product prototypes.",
        "Developed data science models to enhance product features and insights.",
        "Designed scrapers for targeted industry datasets, prepared for CRM ingestion.",
        "Produced reusable utilities and documentation for scraping projects.",
      ],
    },
    {
      company: "Upskill Universe — Remote, Freelance",
      role: "One-on-One Business Mentor",
      dates: "June 2021 – Present",
      bullets: [
        "Delivered tailored mentorship to entrepreneurs and small businesses.",
        "Implemented digital marketing strategies improving visibility by 60%.",
        "Trained clients on CRMs, analytics, and project tools.",
        "Ran sessions virtually using Google Workspace, Zoom, and Trello.",
      ],
    },
    {
      company: "Airtel Nigeria / 3Dim Marketing Ltd",
      role: "Territory Sales Manager",
      dates: "Feb 2020 – May 2023",
      bullets: [
        "Oversaw B2B/B2C sales operations and managed corporate client accounts.",
        "Drove outreach through cold calling, lead generation, and direct marketing.",
        "Reported insights on client behavior, competitor trends, and opportunities.",
      ],
    },
  ],
  projects: [
    {
  title: "Car Insurance Claim Prediction (Machine Learning)",
  description:
    "Developed a full end-to-end machine learning pipeline to predict whether a customer would file an insurance claim. Work included data cleaning, preprocessing, outlier handling, feature engineering (including a custom risk scoring metric), EDA visualizations, train/test splits, scaling, one-hot encoding, and model training using logistic regression, random forest, and CatBoost. Delivered an interactive Gradio web app allowing users to input driver details and instantly receive claim predictions with model explanations.",
  tags: ["Python", "Machine Learning", "EDA", "Feature Engineering", "CatBoost", "Data Visualization", "Gradio"],
  link: "#projects",
},
   {
      title: "Breast Cancer Prediction Model",
      description:
        "An ML model to predict breast cancer recurrence. Includes EDA, feature ranking, and an interactive Gradio app deployed on Hugging Face Spaces.",
      tags: ["Machine Learning", "Gradio", "Hugging Face"],
      link: "https://huggingface.co/spaces/lashakp/breast-cancer-recurrence-prediction",
    },
    {
      title: "Employee Data Cleaning and Transformation (SQL)",
      description:
        "Built a SQL pipeline to clean and standardize messy HR employee records, including trimming names, validating emails, normalizing phone numbers, converting messy salary and hire date formats, and flagging/archiving invalid data. Delivered a cleaned dataset ready for reporting and analytics.",
      tags: ["SQL", "Data Cleaning", "ETL", "Database"],
      link: "#projects",
    },
    {
  "title": "Car Insurance Claims Data Analysis & Interactive Dashboard",
  "description":
    "Designed and implemented a full analytics pipeline to explore, clean, process, and visualize 10,000+ car insurance customer records. Work included resolving missing data, validating numeric and binary fields, transforming categorical values (e.g., vehicle ownership and claim status), and generating automated summary logging. Conducted exploratory data analysis with both static (Matplotlib/Seaborn) and interactive (Plotly) visualizations, covering claim patterns by age, experience, ownership, violations, mileage, and more. Delivered a production-ready Dash web dashboard that presents key insights, metrics, and trends, with all outputs programmatically saved—including logs, reports, metrics, and visual assets—in a structured project directory.",
  "tags": [
    "Python",
    "Data Cleaning",
    "EDA",
    "Dash",
    "Plotly",
    "Matplotlib",
    "Data Visualization",
    "Pandas",
    "Logging"
  ],
  "link": "#projects"
},
    {
      title: "Pidgin TTS Demo App",
      description:
        "Streamlit prototype that converts conversational text into natural-sounding speech using TTS APIs — tested with local dialects.",
      tags: ["Streamlit", "TTS", "APIs"],
      link: "#projects",
    },
    {
      title: "Nigerian Government Scraper",
      description:
        "A resilient scraper that extracts open data from government portals, normalizes records, and outputs clean CSVs ready for CRM imports.",
      tags: ["Python", "BeautifulSoup", "Data pipelines"],
      link: "#projects",
    },
  ],
};

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid gap-12">
        {/* Hero/About Sections */}
        <header className="flex flex-col sm:flex-row justify-between items-center sm:items-start mt-6">
          <div className="text-center flex-1">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md object-cover"
            />
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{user.name}</h1>
            <p className="text-lg text-slate-700 mb-6">{user.title}</p>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-xl sm:text-2xl font-extrabold leading-tight"
            >
              {user.tagline}
            </motion.h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">{user.about}</p>
          </div>
          <div className="flex flex-col gap-3 mt-6 sm:mt-0 sm:ml-6">
            <a
              href={user.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-700 hover:text-blue-700"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href={user.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-700 hover:text-blue-700"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href={user.huggingface}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-700 hover:text-blue-700"
            >
              <Globe size={18} /> Hugging Face
            </a>
          </div>
        </header>

        {/* Project Preview */}
        <section className="bg-gradient-to-br from-slate-100 to-white p-6 rounded-xl">
          <div className="rounded-lg border border-slate-200 overflow-hidden shadow-sm">
            <img
              src="/huggingface-preview.png"
              alt="Breast Cancer Prediction App Preview"
              className="w-full object-cover"
            />
            <a
              href="https://huggingface.co/spaces/lashakp/breast-cancer-recurrence-prediction"
              target="_blank"
              rel="noreferrer"
              className="block text-center px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700"
            >
              Try Live Demo
            </a>
          </div>
          <div className="mt-3 text-center text-slate-600 text-sm">
            🔮 Try my interactive ML model predicting breast cancer recurrence.
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="text-sm px-3 py-1 bg-slate-100 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Experience</h3>
          <div className="grid gap-6">
            {user.experience.map((exp) => (
              <div key={exp.company} className="border-b pb-4">
                <h4 className="text-lg font-bold">{exp.role}</h4>
                <p className="text-sm text-slate-600">
                  {exp.company} • {exp.dates}
                </p>
                <ul className="list-disc ml-5 mt-2 text-sm text-slate-700">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="p-6 bg-gray-50 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <p className="mb-4 text-slate-700">
                Successfully completed a professional certification in{" "}
                <strong>National Skills Qualification Certificate in Data Science with Python Level 5</strong>{" "}
                <strong>[Computer Professionals Registration Council of Nigeria]</strong>, 
                demonstrating verified skills in{" "}
                <strong>Data Analysis, Machine Learning & Visualization with Python</strong>.
              </p>
            </div>
            <div>
              <div className="mb-6">
                <a href="/CPN_NSQ_Certificate.pdf" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/certificate.jpeg"
                    alt="Professional Certificate Proof"
                    className="rounded-xl shadow-md w-full"
                  />
                </a>
                <a
                  href="/CPN_NSQ_Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 text-blue-600 hover:underline text-sm"
                >
                  View Full Certificate (PDF)
                </a>
              </div>
              <div className="mb-6">
                <a href="/cert1.png" target="_blank" rel="noopener noreferrer">
                  <iframe
                    src="/cert1.png"
                    title="Fundamentals of Digital Marketing"
                    className="rounded-xl shadow-md w-full h-64"
                  ></iframe>
                </a>
              </div>
              <div>
                <a href="/cert2.png" target="_blank" rel="noopener noreferrer">
                  <iframe
                    src="/cert2.png"
                    title="Hustle Academy"
                    className="rounded-xl shadow-md w-full h-64"
                  ></iframe>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Letter of Recommendation Section */}
        <section className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Letter of Recommendation</h2>
          <div className="border border-slate-200 rounded-lg p-6 bg-slate-50">
            <div className="mb-4">
              <p className="text-sm text-slate-600 italic">From Omeife Technologies, Uniccon Group of Companies</p>
              <p className="text-sm text-slate-600 italic">Date: 1st August 2025</p>
            </div>
            <a href="/Letter_of_Recommendation_Paul.pdf" target="_blank" rel="noopener noreferrer">
              <iframe
                src="/Letter_of_Recommendation_Paul.pdf"
                title="Letter of Recommendation Preview"
                className="rounded-xl shadow-md w-full h-64 mb-4"
              ></iframe>
            </a>
            <a
              href="/Letter_of_Recommendation_Paul.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
            >
              View Full Letter (PDF)
            </a>
          </div>
        </section>

        {/* Resume Section */}
        <section className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Resume</h2>
          <div className="border border-slate-200 rounded-lg p-6 bg-slate-50">
            <p className="text-sm text-slate-600 mb-4">
              View my complete resume detailing my experience, skills, and projects.
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
            >
              View Resume (PDF)
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="grid gap-6">
          <h3 className="text-xl font-semibold">Selected Projects</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {user.projects.map((p) => (
              <article
                key={p.title}
                className="bg-white p-4 rounded-xl shadow-sm"
              >
                <h4 className="font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-slate-100 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a href={p.link} className="text-sm text-blue-600 hover:underline">
                    Learn more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-semibold">Get in touch</h3>
          <p className="mt-2 text-sm text-slate-600">
            Prefer email?{" "}
            <a href={`mailto:${user.email}`} className="text-blue-600 hover:underline">
              {user.email}
            </a>
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Phone: <a href={`tel:${user.phone}`} className="text-blue-600 hover:underline">{user.phone}</a>
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-slate-500">
          <div>
            Built by {user.name} —{" "}
            <a href={user.github} className="text-blue-600 hover:underline">
              View source
            </a>
          </div>
          <div className="text-xs mt-2">
            Made with React + Tailwind. Deployed on Vercel.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;