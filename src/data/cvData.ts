// CV Content Configuration
// Edit this file to update your CV information

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
  coursework?: string[];
  diplomaUrl?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Language {
  name: string;
  level: number; // 1-5 stars
  proficiency: string; // Native, Fluent, etc.
}

export interface Project {
  title: string;
  description: string | string[];
  image?: string;
  link: string;
  tags?: string[];
}

export interface VoluntaryWork {
  title: string;
  organization: string;
  description: string;
}

export interface Award {
  title: string;
  year?: string;
  image?: string;
  category?: 'competition' | 'scholarship' | 'certification' | 'recognition';
  link?: string;
}

export interface CVData {
  personal: {
    name: string;
    title?: string;
    summary: string;
    email: string;
    phone?: string;
    location?: string;
    image?: string;
    cvUrl?: string;
  };
  social: SocialLink[];
  experience: Experience[];
  education: Education[];
  technicalSkills: Skill[];
  softSkills: Skill[];
  languages: Language[];
  projects: Project[];
  voluntaryWork: VoluntaryWork[];
  awards: Award[];
}

// Your CV Data - Update this with your information
export const cvData: CVData = {
  personal: {
    name: "Erin KËRÇIKU",
    title: "Computer Science Master's Student",
    summary: "Driven by a strong foundation in problem-solving and analytical thinking, with a passion for building innovative solutions at the intersection of artificial intelligence and software engineering.",
    email: "erinkerciku003@gmail.com",
    phone: "(+49) 17682053823",
    location: "Munich, Germany",
    image: "/fotoErinOct2025.jpeg",
    cvUrl: "https://drive.google.com/file/d/1S820riHLSQGYHVj5KY0ev4yFlQHfTGKn/view?usp=drive_link"
  },
  
  social: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/erin-kerciku-303a8b219/",
      icon: "linkedin"
    },
    {
      platform: "Email",
      url: "mailto:erinkerciku003@gmail.com",
      icon: "mail"
    }
  ],
  
  experience: [
    {
      title: "AI/NLP Engineer (Working Student)",
      company: "Rohde & Schwarz",
      location: "Munich",
      period: "08/2025 - Ongoing",
      description: [
        "Helping analyze and curate raw data sources by establishing pipelines for data processing and evaluation",
        "Developing advanced RAG/Agentic-RAG systems and integrating it into current web/cloud applications",
        "Engaged in the development and implementation of a PoC to validate modern ideas and approaches"
      ]
    },
    {
      title: "iOS Developer (via iPraktikum @TUM)",
      company: "Quartett Mobile",
      location: "Munich",
      period: "04/2025 - 08/2025",
      description: [
        "Designed and developed both an iOS and visionOS application for the company to showcase modern car light features in an immersive space",
        "Responsible for setting up the project repositories infrastructure, CI/CD pipelines, the app deployment through Fastlane and Testflight"
      ]
    },
    {
      title: "Software Developer (Working Student)",
      company: "Rohde & Schwarz",
      location: "Munich",
      period: "10/2024 - 08/2025",
      description: [
        "Designed interfaces based on user requirements using Google Protocol Buffers (Protobuf)",
        "Conducted error and root-cause analyses and implemented effective solutions that improved system stability and performance",
        "Took responsibility for system-wide features of mobile radio testers and influenced architecture design within a distributed system"
      ]
    },
    {
      title: "Student Tutor",
      company: "Technical University of Munich",
      location: "Munich",
      period: "08/2024 - 10/2024",
      description: [
        "Tutor for the Discrete Probability Theory"
      ]
    },
    {
      title: "Frontend Software Engineer (via Javascript Praktikum @TUM)",
      company: "Maltego Technologies",
      location: "Munich",
      period: "10/2023 - 02/2024",
      description: [
        "Designed and developed the main part of the application frontend using React and co-integrated everything with the data visualization and backend team",
        "Real-time collaboration part between multiple users",
        "Co-developed features like: Screen Sharing, Login and Authentication + Figma UI Design"
      ]
    }
  ],
  
  education: [
    {
      degree: "Masters of Science | Computer Science",
      institution: "Technical University of Munich (TUM)",
      location: "Munich, Germany",
      period: "10/2024 - Ongoing",
      details: "GPA: 1.9/1.0 (current)",
      coursework: [
        "Natural Language Processing",
        "Advanced Natural Language Processing",
        "Seminar on Causal Bandits",
        "Network Security",
        "Algorithms for Uncertainty Quantification",
        "Application and Implementation of Database Systems",
        "iOS Practical Lab"
      ]
    },
    {
      degree: "Bachelor of Science | Computer Science",
      institution: "Technical University of Munich (TUM)",
      location: "Munich, Germany",
      period: "10/2021 - 09/2024",
      details: "GPA: 1.9/1.0",
      coursework: [
        "Foundations of Programming Lab",
        "Introduction to Software Engineering",
        "Foundations of Computer Architecture Lab",
        "Foundations of Databases",
        "Foundations of Computer Networks and Distributed Systems",
        "Concepts of Modern C++ Programming",
        "Theoretical Computer Science",
        "Probability Theory",
        "Seminar on Quantum Key Distribution",
        "Numerical Programming",
        "Software Testing"
      ]
    },
    {
      degree: "High School Diploma",
      institution: "Sami Frashëri High School",
      location: "Tirana, Albania",
      period: "09/2018 - 06/2021",
      details: "GPA: 9.97/10",
      diplomaUrl: "https://drive.google.com/file/d/1tYwLTOo8mQebWqmN13lKDol-dGrGwj4K/view?usp=drive_link"
    }
  ],
  
  technicalSkills: [
    {
      category: "Languages",
      items: ["Python", "SQL", "JavaScript", "TypeScript", "Java", "C", "C++", "OCaml", "Assembly x64/x86", "Swift"]
    },
    {
      category: "Frameworks",
      items: ["FastAPI", "NextJS", "ReactJS", "ReactFlow", "Spring", "JavaFX"]
    },
    {
      category: "AI/Machine Learning",
      items: ["RAG", "Vector Databases", "LangChain", "OpenAI API"]
    },
    {
      category: "Data & Analytics",
      items: ["Pandas", "Numpy", "Seaborn", "TKinter", "Pydantic"]
    },
    {
      category: "AR/VR Development",
      items: ["RealityKit", "ARKit", "Reality Composer"]
    },
    {
      category: "Others",
      items: ["Git", "Vercel", "Docker", "Gradle", "Redis"]
    }
  ],
  
  softSkills: [
    {
      category: "Inter-personal",
      items: ["Teaching", "Networking", "Cross-Cultural Communication", "Team Leadership"]
    },
    {
      category: "Situational",
      items: ["Problem Solving", "Adaptability", "Cooperation", "Time Management", "Learning"]
    },
    {
      category: "Personal",
      items: ["Intellectual Curiosity", "Self-Motivation", "Creativity", "Responsibility", "Resourceful"]
    }
  ],
  
  languages: [
    { name: "Albanian", level: 5, proficiency: "Native" },
    { name: "English", level: 5, proficiency: "Fluent" },
    { name: "German", level: 5, proficiency: "Fluent" },
    { name: "Italian", level: 1, proficiency: "Elementary" }
  ],
  
  projects: [
    {
      title: "AULA - Education Platform (TUM.ai x Anthropic Hackathon)",
      description: [
        "Built a FastAPI platform that transforms PDF slides into interactive educational videos using a 6-stage AI pipeline with Claude-3.5-Sonnet, Claude-Opus-4, and Manim animations",
        "Implemented hybrid RAG system combining ChromaDB vector search and BM25 retrieval for intelligent content generation",
        "Architected sequential video generation with ElevenLabs TTS voiceover, retry logic, and resource management for GPU-intensive rendering"
      ],
      image: "/projects/AULA.png",
      link: "https://www.youtube.com/watch?v=FFNIY6vhThM",
      tags: ["FastAPI", "Claude AI", "RAG", "ChromaDB", "Manim", "React", "ElevenLabs", "Video Generation", "Educational AI"]
    },
    {
      title: "Bachelor Thesis | Quantum Circuit Compilation",
      description: [
        "Researched quantum circuit cutting methods with emphasis on RZZ-gate optimizations to reduce sampling overhead",
        "Implemented compiler-level experiments using IBM Qiskit and the Circuit Knitting Toolbox",
        "Analyzed performance across random and benchmark circuits, achieving up to 3x reduction in computational cost compared to CNOT-based methods"
      ],
      image: "/projects/BachelorArbeit.png",
      link: "https://drive.google.com/file/d/19CdCGB4kddMgkG1zs9MRnZa9SFWYuMjG/view?usp=drive_link",
      tags: ["Python", "Qiskit", "Quantum Computing"]
    },
    {
      title: "Internet Providers Comparison Website",
      description: [
        "Built a robust web platform that aggregates and compares plans from five internet providers in real time with intelligent caching and fault tolerance",
        "Implemented API resilience mechanisms including retry logic, exponential backoff, and graceful degradation for partial failures",
        "Designed a secure share-link system with Redis and optimized user experience through progressive loading and responsive UI"
      ],
      image: "/projects/Check24InternetComparison.png",
      link: "https://github.com/erin44/Check24GenDev",
      tags: ["NextJS", "TypeScript", "Redis", "API Design"]
    },
    {
      title: "MD2 Cryptographic Hash Function Analysis",
      description: [
        "Co-implemented the MD2 hashing algorithm in C, including padding, checksum, and 128-bit compression logic",
        "Analyzed collision and preimage vulnerabilities through simulated attacks",
        "Evaluated performance of sequential and threaded versions via runtime benchmarking on x86-64 systems"
      ],
      image: "/projects/MD2Hashing.png",
      link: "https://drive.google.com/file/d/14DPPTVg3nb2QSSSLYA9TkreFDbffloH_/view?usp=drive_link",
      tags: ["C", "Multithreading", "Cryptography"]
    },
  ],
  
  voluntaryWork: [
    {
      title: "Co-Founder",
      organization: "Albanian Student Society at TUM",
      description: "Co-founded student organization building community among Albanian students at TUM through cultural and networking events fostering academic and social connections."
    }
  ],
  
  awards: [
    {
      title: "Member of International Institute for Extraordinary Intelligence ATOM",
      year: "2017 - ongoing",
      category: "recognition",
      image: "/awards/AtomiCertificate.png",
      link: "https://drive.google.com/file/d/1n5fEfhny4TZWN0wQCUcKAIyRpHliPThQ/view?usp=drive_link"
    },
    {
      title: "Member of Mensa International",
      year: "2018 - ongoing",
      category: "recognition",
      image: "/awards/Mensa International.png",
      link: "https://drive.google.com/file/d/1X5vwgHZNvgNw31WEb5JPBfCC7mTb--Yy/view?usp=drive_link"
    },
    {
      title: "Gold Medal - Top 3 High School Graduate in 2021 in Albania",
      year: "2021",
      category: "recognition",
      image: "/awards/GoldMedal.png",
      link: "https://drive.google.com/file/d/1Br7GBTlr8vW971X-7d47XNBwollfCFE6/view?usp=drive_link"
    },
    {
      title: "DAAD Scholarship Winner + Holder",
      year: "2021 - 2024",
      category: "scholarship",
      image: "/awards/DAAD Stipendium.png",
      link: "https://drive.google.com/file/d/1k9TGHPx6rlpPj22-3scPXcEBzOKr-oo4/view?usp=drive_link"
    },
    {
      title: "1st Prize at the National Chemistry Olympiad",
      year: "2020",
      category: "competition",
      image: "/awards/2019-2020ChemistryOlympiad.png",
      link: "https://drive.google.com/file/d/1QmpChbVkOn0UhuXc_JwuPz-bbZqAAlrg/view?usp=drive_link"
    },
    {
      title: "1st Prize at the National Physics Olympiad",
      year: "2020",
      category: "competition",
      image: "/awards/2019-2020PhysicsOlympiad.png",
      link: "https://drive.google.com/file/d/1D8hJtFPgIDE1zRX1jlYgXsELR600IqlL/view?usp=drive_link"
    },
    {
      title: "1st Prize at the National Physics Olympiad",
      year: "2019",
      category: "competition",
      image: "/awards/2018-2019PhysicsOlympiad.png",
      link: "https://drive.google.com/file/d/1ubdnD0BPIsujyB3rndjd6V0AXQrQAoHN/view?usp=drive_link"
    },
    {
      title: "A-Levels Cambridge International Mathematics (Grade A*)",
      year: "2020",
      category: "certification",
      image: "/awards/A-LevelsMaths.png",
      link: "https://drive.google.com/file/d/1mIHCpqIVRmuh3x8VPzAADcA4kLdZBeyO/view?usp=drive_link"
    },
    {
      title: "Cambridge IGCSE Mathematics (Grade A*)",
      year: "2018",
      category: "certification",
      image: "/awards/IGCSE Maths.png",
      link: "https://drive.google.com/file/d/1Y8yyUDFBxO8IHlRTMH83nm545zletudG/view?usp=drive_link"
    },
    {
      title: "Cambridge IGCSE ICT (Grade A)",
      year: "2018",
      category: "certification",
      image: "/awards/IGCSE ICT.png",
      link: "https://drive.google.com/file/d/1gq8gutAchBLW7Wd1kMZuVoT1Z9VZsf0h/view?usp=drive_link"
    },
    {
      title: "TestAS (Math & CS & Natural Sciences Module): Top 2% worldwide",
      year: "2020",
      category: "certification",
      image: "/awards/TestAS Certificate.png",
      link: "https://drive.google.com/file/d/12G3eJgIfZobrEj55n7KxozV7OfGc9Vpt/view?usp=drive_link"
    },
    {
      title: "Prizewinner in the BLITZ CONTEST of the International Olympiad of Metropolises",
      year: "2019",
      category: "competition",
      image: "/awards/Olympiad of Metropolises.png",
      link: "https://drive.google.com/file/d/1K67552MIMoVhMZi-Hk8jd9yVwzj39ANz/view?usp=drive_link"
    }
  ]
};
