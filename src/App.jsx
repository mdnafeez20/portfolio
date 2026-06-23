import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Sun, Moon, ArrowUp, Layers, Mail, MapPin, Award, 
  Send, Code, Database, Cpu, ExternalLink
} from 'lucide-react';

// --- INLINE SVG COMPONENTS TO AVOID LUCIDE VERSION EXPORT BREAKS ---
function GitHubIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Advanced Portfolio Functionalities
  const [activeModal, setActiveModal] = useState(null); 

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- DATA MAPPINGS (LOCKED) ---
  const educationHistory = [
    { degree: "B.Tech Artificial Intelligence and Data Science", school: "Care College Of Engineering", date: "2022 - 2026", status: "Completed" },
    { degree: "HSLC (Higher Secondary)", school: "Bishop Heber Higher Secondary School", date: "2021 - 2022", status: "Completed" },
    { degree: "SSLC (Secondary School)", school: "Bishop Heber Primary School", date: "2019 - 2020", status: "Completed" }
  ];

  const certifications = [
    { 
      title: "Data Science Course", 
      issuer: "RINEX", 
      year: "2024 - 2025", 
      description: "Comprehensive curriculum covering data processing, statistical modeling, and data analytics pipelines.", 
      certificateId: "DS25-RNG0-7305",
      image: "/image_0d593d.png" 
    },
    { 
      title: "Artificial Intelligence Course", 
      issuer: "RINEX", 
      year: "2025", 
      description: "Specialized training focused on intelligent algorithms, automated model execution, and neural network foundations.", 
      certificateId: "AI25-RNG0-7691",
      image: "/image_0d5211.png" 
    },
    { 
      title: "Data Science", 
      issuer: "Google", 
      year: "2025", 
      description: "Core data science principles, data manipulation, statistical analysis, and model execution.", 
      certificateId: "DS-GGL-25",
      image: "/image_0d5cdb.png" 
    },
    { 
      title: "Artificial Intelligence", 
      issuer: "Google", 
      year: "2025", 
      description: "Foundational concepts in artificial intelligence, machine learning principles, and intelligent workflow development.", 
      certificateId: "AI-GGL-25",
      image: "/image_0d55d2.png" 
    }
  ];

  const internships = [
    {
      title: "Data Science Intern",
      company: "ProAnalytics Tech",
      date: "July 2025 - October 2025",
      summary: "Managed backend data pipelines, handled anomaly preprocessing via Python modules, and designed multi-page predictive dashboards.",
      highlights: "Optimized dataset ingestion load speeds by 25% using vectorization routines and engineered feature sets for modeling.",
      certificateImage: "/image_17c5ff.png"
    },
    {
      title: "Artificial Intelligence Intern",
      company: "CoreAI Research Labs",
      date: "Feb 2026 - Mar 2026",
      summary: "Focused on workflow automation engineering, structural prompt construction strategies, API route generation, and validation tests.",
      highlights: "Built custom microservice endpoints using FastAPI and Streamlit interfaces to expose LLM summary utilities.",
      certificateImage: "/image_17cd5ff.png"
    }
  ];

  // --- FORM SUBMISSION HANDLER ---
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert(`Thank you, ${formData.name}! Your message has been sent successfully.`);
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill out all fields before sending.');
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300 font-sans text-[15px]`}>
      
      {/* STICKY NAVIGATION BAR NAVIGATION */}
      <nav className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-purple-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              MOHAMED NAFEEZ K M
            </span>
            <div className="hidden md:flex space-x-7 items-center font-medium text-[14px]">
              <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
              <a href="#education" className="hover:text-purple-600 transition-colors">Education</a>
              <a href="#skills" className="hover:text-purple-600 transition-colors">Skills</a>
              <a href="#certifications" className="hover:text-purple-600 transition-colors">Certifications</a>
              <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
              <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors">
                {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-purple-600" />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-purple-50 dark:hover:bg-gray-800">
                {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-purple-600" />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 dark:text-gray-400">
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE SLIDE DOWN NAVIGATION */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-2 border-b border-gray-200 dark:border-gray-800 text-[14px] font-medium">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-purple-600">About</a>
            <a href="#education" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-purple-600">Education</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-purple-600">Skills</a>
            <a href="#certifications" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-purple-600">Certifications</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-purple-600">Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-purple-600">Contact</a>
          </div>
        )}
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-purple-50/60 to-transparent dark:from-purple-950/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full py-12">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 text-xs font-semibold rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> OPEN FOR OPPORTUNITIES
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              MOHAMED NAFEEZ K M
            </h1>
            <p className="text-lg font-medium text-purple-600 dark:text-purple-400">
              Aspiring Data Analyst | AI & Data Science Student
            </p>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              AI & Data Science student specializing in bridging the gap between intelligent systems and data-driven insights. My experience spans from training machine learning pipelines to building interactive Power BI analytics dashboards.
            </p>
            <div className="flex flex-wrap gap-3 pt-2 items-center">
              <a href="#contact" className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl text-sm flex items-center gap-2 shadow-sm">
                <Mail size={16} /> Contact Me
              </a>
              <a 
                href="/resume.pdf" 
                download="Mohamed_Nafeez_Resume.pdf" 
                className="px-5 py-2.5 border border-gray-300 dark:border-gray-700 font-semibold rounded-xl text-sm flex items-center gap-2 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              >
                <Layers size={16} /> Download Resume
              </a>
              {/* LinkedIn Link */}
              <a href="https://www.linkedin.com/in/mohamed-nafeez-k-m" target="_blank" rel="noreferrer" className="p-2.5 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 flex items-center justify-center">
                <LinkedInIcon size={18} />
              </a>
              {/* Updated GitHub Link (mdnafeez20) */}
              <a href="https://github.com/mdnafeez20" target="_blank" rel="noreferrer" className="p-2.5 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 flex items-center justify-center">
                <GitHubIcon size={18} />
              </a>
            </div>
          </div>

          {/* PROFILE PHOTO .PNG BOX */}
          <div className="flex justify-center">
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden glass-card p-3 border border-purple-100 dark:border-gray-800 shadow-xl flex items-center justify-center bg-white dark:bg-gray-900">
              <img 
                src="/profile.png" 
                alt="Mohamed Nafeez K M" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT ME & CAREER OBJECTIVE */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-4 border-t border-gray-100 dark:border-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am an Artificial Intelligence and Data Science student with a deep interest in Data Analytics, Business Intelligence, and intelligent system workflows. Proficient in Python, SQL, Tableau, and Power BI, I am dedicated to extracting meaningful insights from complex datasets and designing interactive dashboard solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Throughout my academic journey and hands-on exposure, I have continually honed my skills in data wrangling, advanced analytics reporting, and exploratory data analysis (EDA). I thrive in collaborative, growth-oriented environments and am eager to apply my technical acumen to solve modern data challenges.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-purple-100 dark:border-gray-800 flex flex-col justify-between bg-white dark:bg-gray-800/50 shadow-sm">
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-600">Career Objective</h3>
              <p className="text-sm italic text-gray-600 dark:text-gray-300 leading-relaxed">
                "An analytical, motivated AI & Data Science student seeking an entry-level Data Analyst or Data Scientist position to contribute hands-on data manipulation, visualization, and statistical modeling skills to a dynamic, forward-thinking enterprise."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-xs text-purple-600 dark:text-purple-400 font-semibold">
              ● Ready to add value through insights
            </div>
          </div>
        </div>
      </section>

      {/* 3. EDUCATION CHRONOLOGY TIMELINE */}
      <section id="education" className="py-16 bg-purple-50/30 dark:bg-gray-900/20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Education Journey</h2>
          <div className="relative border-l-2 border-purple-200 dark:border-purple-900 ml-4 md:ml-24 space-y-10">
            {educationHistory.map((edu, idx) => (
              <div key={idx} className="relative pl-6 group">
                <div className="absolute -left-[9px] top-1.5 bg-purple-600 w-4 h-4 rounded-full ring-4 ring-white dark:ring-gray-900 transition-transform group-hover:scale-110" />
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-semibold text-purple-600">{edu.date}</span>
                  <span className="text-[11px] font-bold px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 border border-emerald-200/50 rounded">{edu.status}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE TECHNICAL SKILLS GRID MATRIX */}
      <section id="skills" className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Technical Skillset</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { cat: "Programming", items: ["Python", "SQL (MySQL)", "C++"] },
            { cat: "Data Analytics", items: ["Power BI", "Tableau", "Excel", "Exploratory Data Analysis", "Data Wrangling"] },
            { cat: "AI & Frameworks", items: ["Machine Learning", "Scikit-Learn", "Pandas", "NumPy", "Deep Learning"] },
            { cat: "Core Competencies", items: ["Statistical Modeling", "Data Visualization", "Problem Solving", "Business Intelligence"] }
          ].map((skill, idx) => (
            <div key={idx} className="p-5 rounded-2xl border border-purple-100 dark:border-gray-800 bg-white dark:bg-gray-800/60 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-purple-600 border-b border-gray-100 dark:border-gray-700 pb-2 mb-3 text-sm tracking-wide uppercase">{skill.cat}</h3>
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((i, k) => (
                  <span key={k} className="px-2.5 py-1 bg-gray-50 dark:bg-gray-900 text-xs font-medium border border-gray-200/60 dark:border-gray-700/60 rounded-lg text-gray-700 dark:text-gray-300">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PROFESSIONAL CERTIFICATIONS SECTION */}
      <section id="certifications" className="py-16 bg-purple-50/30 dark:bg-gray-900/20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Professional Certifications</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, i) => (
              <div 
                key={i} 
                onClick={() => setActiveModal({ ...cert, type: 'certificate' })}
                className="p-5 rounded-2xl border border-purple-100 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-800/60 hover:border-purple-500 cursor-pointer group flex flex-col justify-between transition-all hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <Award className="text-purple-600" size={24} />
                    <span className="text-[10px] font-bold text-gray-400 bg-gray-100 dark:gray-700 px-2 py-0.5 rounded-md">{cert.year}</span>
                  </div>
                  <h3 className="font-bold text-gray-950 dark:text-white group-hover:text-purple-600 text-sm leading-snug transition-colors">{cert.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">via {cert.issuer}</p>
                </div>
                <span className="text-[11px] text-purple-600 mt-4 font-semibold inline-flex items-center gap-1 group-hover:underline">View Details →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL DASHBOARD AND PROJECTS INSIGHTS */}
      <section id="projects" className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Technical Dashboards & Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Project 1: Data Analyst Job Market Analytics Dashboard */}
          <div className="p-6 rounded-2xl border border-purple-100 dark:border-gray-800 bg-white dark:bg-gray-800/40 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-purple-600 bg-purple-50 dark:bg-purple-950/40 px-2.5 py-1 rounded">Business Intelligence</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-3 mb-2">Data Analyst Job Market Analytics Dashboard</h3>
              <p className="text-[11px] font-bold text-purple-500 tracking-wide mb-3">POWER BI | PYTHON | DAX | DATA CLEANING</p>
              <ul className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed space-y-2 mb-4 list-disc pl-4">
                <li>Built a 3-page interactive Power BI dashboard analyzing the Data Analyst job market across Job Market Overview, Skill Intelligence, and Salary Intelligence views.</li>
                <li>Cleaned and preprocessed the jobs_cleaned dataset using Python (Pandas), standardizing fields to ensure analytical consistency.</li>
                <li>Delivered key insights across 500+ job listings surfacing actionable intelligence for job seekers and recruiters.</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
              <span className="text-xs font-bold text-purple-600">Domain: Career & Hiring Intelligence</span>
              <a href="https://github.com/mdnafeez20/Data-Analyst-Job-Market-Intelligence-Dashboard" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-semibold text-purple-600 hover:underline">
                View Code <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Project 2: IPL Performance Analytics Dashboard */}
          <div className="p-6 rounded-2xl border border-purple-100 dark:border-gray-800 bg-white dark:bg-gray-800/40 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-purple-600 bg-purple-50 dark:bg-purple-950/40 px-2.5 py-1 rounded">Performance Metrics</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-3 mb-2">IPL Performance Analytics Dashboard</h3>
              <p className="text-[11px] font-bold text-purple-500 tracking-wide mb-3">POWER BI | PYTHON | DATA CLEANING | DAX</p>
              <ul className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed space-y-2 mb-4 list-disc pl-4">
                <li>Designed an end-to-end interactive Power BI dashboard analyzing 5+ seasons of IPL ball-by-ball data across 50,000+ records.</li>
                <li>Performed data preprocessing and cleaning on the raw IPL dataset using Python (Pandas) to ensure 100% data integrity.</li>
                <li>Delivered 4 key analytical views enabling quick identification of performance patterns across teams and players.</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
              <span className="text-xs font-bold text-purple-600">Domain: Sports Analytics</span>
              <a href="https://github.com/mdnafeez20/IPL-Performance-Analytics-Dashboard" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-semibold text-purple-600 hover:underline">
                View Code <ExternalLink size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* 7. PROFESSIONAL EXPERIENCES & INTERNSHIPS */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-10">Professional Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {internships.map((intern, i) => (
              <div 
                key={i}
                className="p-5 rounded-2xl border border-purple-100 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start text-xs text-gray-400 mb-2">
                    <span className="font-bold text-purple-600">{intern.company}</span>
                    <span>{intern.date}</span>
                  </div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white mb-2">{intern.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{intern.summary}</p>
                </div>
                <button 
                  onClick={() => setActiveModal({ ...intern, type: 'internship' })}
                  className="mt-4 w-full py-2 bg-purple-50 dark:bg-gray-700 hover:bg-purple-100 text-purple-600 dark:text-purple-300 text-xs font-bold rounded-xl transition-colors"
                >
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT SYSTEM INTEGRATION */}
      <section id="contact" className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-950 dark:text-white mb-2">Let's build something epic</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md">
                Feel free to reach out for collaborations, workflow automation engineering opportunities, or general technical inquiries.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800 border border-purple-50/80 dark:border-gray-700 shadow-sm">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/40 rounded-xl text-purple-600 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold tracking-wider text-gray-400 uppercase block mb-0.5">Email</span>
                  <a href="mailto:mohamednafeezkm2006@gmail.com" className="text-xs font-bold text-gray-700 dark:text-gray-200 hover:underline break-all">mohamednafeezkm2006@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800 border border-purple-50/80 dark:border-gray-700 shadow-sm">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/40 rounded-xl text-purple-600 flex-shrink-0">
                  <LinkedInIcon size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold tracking-wider text-gray-400 uppercase block mb-0.5">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/mohamed-nafeez-k-m" target="_blank" rel="noreferrer" className="text-xs font-bold text-gray-700 dark:text-gray-200 hover:underline break-all">linkedin.com/in/mohamed-nafeez-k-m</a>
                </div>
              </div>

              {/* Updated GitHub Link in Contact Section */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800 border border-purple-50/80 dark:border-gray-700 shadow-sm">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/40 rounded-xl text-purple-600 flex-shrink-0">
                  <GitHubIcon size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold tracking-wider text-gray-400 uppercase block mb-0.5">GitHub</span>
                  <a href="https://github.com/mdnafeez20" target="_blank" rel="noreferrer" className="text-xs font-bold text-gray-700 dark:text-gray-200 hover:underline break-all">github.com/mdnafeez20</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800 border border-purple-50/80 dark:border-gray-700 shadow-sm">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/40 rounded-xl text-purple-600 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold tracking-wider text-gray-400 uppercase block mb-0.5">Location</span>
                  <span className="text-xs font-bold text-gray-700 dark:text-gray-200 block">Tiruchirappalli, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-purple-100 dark:border-gray-700 bg-white dark:bg-gray-800/60 shadow-xl space-y-5">
            <div>
              <label className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full mt-1.5 px-4 py-3 text-xs bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 text-gray-800 dark:text-gray-200"
              />
            </div>
            <div>
              <label className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400">Your Email</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full mt-1.5 px-4 py-3 text-xs bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 text-gray-800 dark:text-gray-200"
              />
            </div>
            <div>
              <label className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400">Message</label>
              <textarea 
                rows="4" 
                placeholder="Hey, let's connect..." 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full mt-1.5 px-4 py-3 text-xs bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 resize-none text-gray-800 dark:text-gray-200"
              ></textarea>
            </div>
            <button type="submit" onClick={handleFormSubmit} className="w-full py-4 bg-[#7C3AED] hover:bg-purple-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-purple-600/10 transition-colors">
              Send Message <Send size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 10. CLEAN FOOTER */}
      <footer className="py-8 text-center border-t border-gray-100 dark:border-gray-800 text-xs text-gray-400">
        <p>© 2026 MOHAMED NAFEEZ K M. All Rights Reserved.</p>
      </footer>

      {/* SCROLL BACK TO TOP TRIGGER */}
      {showScrollTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 left-6 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 z-40 transition-transform hover:scale-105">
          <ArrowUp size={18} />
        </button>
      )}

      {/* 12. UNIFIED DISPLAY LAYOUT MODAL ROUTER OVERLAY */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4" onClick={() => setActiveModal(null)}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl max-w-md w-full relative border border-gray-100 dark:border-gray-700 animate-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"><X size={18} /></button>
            
            {activeModal.type === 'certificate' ? (
              <>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-0.5">{activeModal.title}</h3>
                <p className="text-xs text-purple-600 font-bold mb-4">{activeModal.issuer} — {activeModal.year}</p>
                <div className="w-full bg-gray-50 dark:bg-gray-900/80 rounded-xl flex flex-col items-center justify-center text-gray-400 border border-dashed border-gray-200 dark:border-gray-700 mb-4 p-4 text-center">
                  <Award size={32} className="text-purple-300 mb-2" />
                  <span className="text-[10px] font-medium uppercase tracking-wider mb-2">{activeModal.issuer} Certificate of Achievement</span>
                  {activeModal.certificateId && (
                    <span className="inline-block px-2 py-0.5 bg-purple-100 dark:bg-purple-900/50 text-purple-600 font-mono text-[9px] rounded font-bold mb-4">
                      ID: {activeModal.certificateId}
                    </span>
                  )}
                  
                  {/* Dynamic render of certificate image */}
                  {activeModal.image && (
                    <div className="w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 mb-4 bg-white dark:bg-gray-800 flex items-center justify-center">
                      <img 
                        src={activeModal.image} 
                        alt={activeModal.title} 
                        className="w-full h-auto object-contain max-h-48"
                      />
                    </div>
                  )}

                  <a 
                    href={activeModal.image} 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-purple-600 text-white text-[10px] font-bold rounded-lg hover:bg-purple-700 transition-colors inline-block"
                  >
                    View Fullscreen Image
                  </a>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{activeModal.description}</p>
              </>
            ) : (
              <>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-0.5">{activeModal.title}</h3>
                <p className="text-xs text-purple-600 font-bold mb-4">{activeModal.company} Internship Program</p>
                
                {/* Certificate preview inside internship modal */}
                {activeModal.certificateImage && (
                  <div className="w-full bg-gray-50 dark:bg-gray-900/80 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center p-3 mb-4">
                    <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center">
                      <img 
                        src={activeModal.certificateImage} 
                        alt={activeModal.title} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <a 
                      href={activeModal.certificateImage} 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-3 py-1.5 bg-purple-600 text-white text-[10px] font-bold rounded-xl hover:bg-purple-700 transition-colors"
                    >
                      View Fullscreen Certificate
                    </a>
                  </div>
                )}

                <div className="w-full p-4 bg-purple-50/40 dark:bg-gray-900/60 rounded-xl border border-purple-100/40 text-xs mb-4">
                  <p className="italic text-gray-700 dark:text-gray-300 mb-2">"Successfully configured modern data streams, mapped interactive dashboards, and showcased exemplary engineering logic."</p>
                  <p className="text-[10px] text-gray-400 text-right font-semibold">— Verification Officer, {activeModal.company}</p>
                </div>
                <div className="space-y-2 text-xs">
                  <h4 className="font-bold text-purple-600 uppercase text-[10px] tracking-wide">Key Contribution Summary:</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{activeModal.highlights}</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}