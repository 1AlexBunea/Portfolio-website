import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Experience.css";
import BulletPointTextArea from "./BulletPointTextArea";
import ArrayList from "./ArrayList";
import ExperiencePage from "./ExperiencePage";
import ArrayListNoHover from "./ArrayListNoHover";


const jobs = [
  "2024: Software Engineer Intern",
  "2022: Cybersecurity Analyst Intern",
  "2022: Data Analyst Intern",
  "2021: Software Engineer Intern",
];

const description = [
    `Deployed server with ~RESTful API~ storing over 20,000 files. 
    Formatted and chunked 2,000 CSV, PDF, HTML, and TXT files using ~Pandas~. 
    Developed internal chatbot tool interfacing with ~React TypeScript~ front-end and ~ExpressJS~ backend for 100+ employees. 
    Trained ~BGE embeddings model~ on 2,000 sentence pair similarity triplets, improving accuracy from 70% to 80%. 
    Used BGE model to perform tokenization and embedding for ~retrieval-augmented generation(RAG)~ pipeline, with embeddings being stored in a ~ChromaDB Vector Database~. 
    Achieved ~98%~ retrieval accuracy with the RAG implementation that provides context to the ~Mistral-7B Large Language Model~ to produce a Q&A responses with an average response time of 4 seconds. 
    `,
    `Found 458 potential patches to 13 ~Common Vulnerabilities and Exposures~ within the company's cybersecurity system and assisted with their testing and Implemented within the system. 
    Ensured 99.9% system uptime through proactive ~vulnerability management~ and ~patch implementation~. 
    Learned how to deploy third-party security solutions such as ~SentinelOne~ on Raspberry Pi microcomputers using ~VNC Viewer~ to bolster endpoint security in factories. 
    `,
    `Worked in a team to perform ~market research~ on a list of 17 innovation management tools. 
    Conducted interviews with 15 ~executives, managers, and directors from 3 different companies. 
    ~Quantified company sentiments~ using scale 1 through 5 on: features, pricing, security, customer service, and brand presence . 
    Analyzed quantitative data using ~statistical methods~ and ~data visualization techniques~ and developed a ~weighted scoring model~ to recommend the most suitable innovation management tool based on the integrated metrics. 
    Produced a 37-page report detailing ~quantitative metrics~ and ~qualitative insights~ for each tool. 
    `,
    `Developed a solar panel ~crack detection python program~ that ~identified and classified cracks~ in over 2000 images of solar panels. 
    Trained ~neural network~ on a dataset of 1000 electroluminescent images, improving crack detection to an accuracy of 90%. 
    For over 1000 panels, accurately calculated total affected surface area and produced a severity grade. 
    Created the ~pre-alpha~ code for overall production-code that reduced manual inspection time and labor costs by 99% for this use case and saving the company ~$50000 a year~. 
    Programmed and deployed a ~collaboration robot~ performing pick-and-place motion for the pilot production line assisting in the ~manufacturing of 200 solar panels daily~. 
    `,
];

const duration = [
  {"start": "May 2024", "end": "August 2024"},
  {"start": "July 2022", "end": "August 2022"},
  {"start": "March 2022", "end": "July 2022"},
  {"start": "June 2021", "end": "August 2021"}
]

// const test = ```testtesttest```;

const company = [
  "GAF Energy",
  "Standard Industries",
  "Standard Industries",
  "GAF Energy",
];

const codingLanguages = [
  {"name":'HTML / CSS / JavaScript', "experience": 4},
  {"name":'Python', "experience": 4},
  {"name":'Java', "experience": 2},
  {"name":'C', "experience": 1},

  // {"name":'Natural Language Processing', 'experience': '4 years'}
]

const frameworksAndTechnologies = [
  { 'name': 'Image Processing', 'experience': 3 },
  { 'name': 'Neural Networks', 'experience': 3 },
  { 'name': 'Machine Learning', 'experience': 3 },
  { 'name': 'NumPy', 'experience': 3 },
  { 'name': 'MatPlotLib', 'experience': 3 },
  { 'name': 'Artifical Intelligence', 'experience': 2 },
  { 'name': 'React TypeScript and JavaScript', 'experience': 1 },
  { 'name': 'Express', 'experience': 1 },
  { 'name': 'NodeJS', 'experience': 1 },
  { 'name': 'FastAPI', 'experience': 1 },
  { 'name': 'Flask', 'experience': 1 },
  { 'name': 'Large Language Models', 'experience': 1 },
  { 'name': 'Embedding Models', 'experience': 1 },
  { 'name': 'Vector Databases', 'experience': 1 },
  { 'name': 'Retrieval Augmented Generation', 'experience': 1 },
  { 'name': 'Tokenization', 'experience': 1 },
  { 'name': 'Natural Language Processing', 'experience': 1 },
  { 'name': 'PyTorch', 'experience': 1 },
  { 'name': 'TensorFlow', 'experience': 1 },
  { 'name': 'Pandas', 'experience': 1 },
]

const additionalTools = [
  { "name": "OpenCV2", "experience": 3 },
  { "name": "Pillow", "experience": 3 },
  { "name": "Git", "experience": 2 },
  { "name": "Ubuntu", "experience": 2 },
  { "name": "Kali Linux", "experience": 2 },
  { "name": "Anaconda", "experience": 1 },
  { "name": "ChromaDB", "experience": 1 },
  { "name": "LangChain", "experience": 1 },
  { "name": "LlamaIndex", "experience": 1 },
  { "name": "Ollama", "experience": 1 },
  { "name": "Postman", "experience": 1 },
]

const courses = [
  { "name": "Principles of Computer Systems", "experience": 1 },
  { "name": "Computer Organization and Architecture", "experience": 1 },
  { "name": "Information Retrieval and Web Search", "experience": 1 },
  { "name": "Data Structures", "experience": 1 },
  { "name": "Introduction to Programming", "experience": 1 },
  { "name": "Discrete Mathematics", "experience": 1 },
  { "name": "Multivariable Calculus", "experience": 1 },
  { "name": "Differential and Integral Calculus", "experience": 1 },
]

const Experience = () => {
  const [activeButton, setActiveButton] = useState<number>(-1);
  const [isOpen, setIsOpen] = useState(false);
  const popoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        popoutRef.current &&
        !popoutRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
    }

    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
        const timer = setTimeout(() => {
            setActiveButton(-1);
          }, 300);

        return () => clearTimeout(timer);
    }
    
  }, [isOpen]);


  const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div
      style={{ marginLeft: '5%', marginRight: '5%', paddingBottom: 50, maxWidth:1000, marginTop:100 }}
      id="professional-experience"
    >
      {/* <ScrollSidebar></ScrollSidebar> */}

      <div className="experience-div">
        <h2
          className="display-1 display-sm-2 display-md-3 display-lg-4"
          style={{
            color: "white",
            paddingBottom: 30,
          }}
        >
          Professional Experience
        </h2>
      </div>
      <div>
        <ExperiencePage companies={company} titles={jobs} durations={duration} descriptions={description}></ExperiencePage>
      </div>
      <div>
        <div
          className={`popout-container ${isOpen ? "show" : ""}`}
          ref={popoutRef}
          onClick={() => setIsOpen(false)}
        >
          <div className="popout-content" onClick={handleContentClick} style={{marginTop:''}}>
            <h2>{company[activeButton]}</h2>
            {activeButton != -1 ? <BulletPointTextArea description={description[activeButton]}></BulletPointTextArea> : null}
          </div>
        </div>
      </div>

      <h1
        id="education"
        className="display-1 display-sm-2 display-md-3 display-lg-4"
        style={{
          color: "white",
          paddingTop: 50,
        }}
      >
        Education
      </h1>
      <h2
        className="fw-bold display-6"
        style={{
          color: "rgb(248, 106, 11)",
        }}
      >
        University of Texas at Austin
      </h2>
      <div>
        <h4>GPA</h4>
        <h5 className="info-h5-header">
            3.92 (Honors)
        </h5>
        <h4>
          Relevant Coursework
        </h4>
        <ArrayListNoHover skills={courses}></ArrayListNoHover>
      </div>

      <h1
        id="languages"
        className="display-1 display-sm-2 display-md-3 display-lg-4"
        style={{
          color: "white",
          paddingTop: 50,
          paddingBottom: 50,
        }}
      >
        Coding Languages
      </h1>
      <ArrayList skills={codingLanguages}></ArrayList>

      <h1
        className="display-1 display-sm-2 display-md-3 display-lg-4"
        id="frameworks"
        style={{
          color: "white",
          paddingTop: 50,
          paddingBottom: 50,
        }}
      >
        Frameworks & Technologies
      </h1>
      <ArrayList skills={frameworksAndTechnologies}></ArrayList>

      <h1
        className="display-1 display-sm-2 display-md-3 display-lg-4"
        id="tools"
        style={{
          color: "white",
          paddingTop: 50,
          paddingBottom: 50,
        }}
      >
        Additional Tools
      </h1>
        <ArrayList skills={additionalTools}></ArrayList>
    </div>
  );
};

export default Experience;
