export const portfolioData = {
  personal: {
    name: 'Mohammed Yaseen',
    roleLine: 'Intelligent Systems & Quality Engineering',
    pillarsLine: 'Applied AI · Quality Engineering · Systems Reliability',
    headline: 'Making intelligent systems useful — and reliable.',
    heroSummary:
      'Computer Science (AI & ML) graduate based in Hyderabad, India. I build applied AI systems in Python — spanning RAG pipelines, graph-backed retrieval, and deep learning — grounded in practical software testing, API workflows, and cloud fundamentals.',
    location: 'Hyderabad, India',
    email: 'mmohammedyaseen87@gmail.com',
    github: 'https://github.com/Yaseen-md',
    linkedin: 'https://www.linkedin.com/in/mohammed-yaseen-843638223/',
    resumeUrl: '/Mohammed_Yaseen_Resume.pdf',
    portrait: {
      src: '/image.JPG',
      alt: 'Portrait of Mohammed Yaseen',
    },
  },

  navigation: [
    { label: 'Work', href: '#work', section: 'work' },
    { label: 'Capabilities', href: '#capabilities', section: 'capabilities' },
    { label: 'Experience', href: '#experience', section: 'experience' },
    { label: 'About', href: '#about', section: 'about' },
    { label: 'Contact', href: '#contact', section: 'contact' },
  ],

  featuredProjects: [
    {
      slug: 'rag-document-chatbot',
      title: 'RAG-Based AI Document Chatbot',
      category: 'Applied AI · API Workflows',
      context: 'Independent Technical Project',
      featuredLead: true,
      diagramType: 'rag',
      diagramCaption:
        'Pipeline diagram derived from documented implementation (PDF ingestion -> chunking & vector search -> LangChain/LLM -> FastAPI).',
      summary:
        'A PDF question-answering system built with Python, LangChain, and FastAPI that combines document chunking, vector retrieval, and prompt engineering for grounded responses.',
      tags: ['Python', 'LangChain', 'FastAPI', 'LLMs', 'Vector Retrieval'],
      githubUrl: 'https://github.com/Yaseen-md/RAG-LLM-Based-chatbot',
      liveUrl: null,
      disclaimer: null,
      caseStudy: {
        role: 'Sole developer — ingestion pipeline, retrieval logic, prompt design, and FastAPI endpoints.',
        problem:
          'Standard LLM prompts cannot reliably answer questions over private or long-form PDF documents without grounding, leading to unsupported or incomplete responses.',
        whatWasBuilt:
          'An end-to-end document Q&A backend accepting PDF uploads, splitting content into searchable chunks, generating embeddings for semantic vector retrieval, and returning context-aware answers via FastAPI endpoints.',
        workflow: [
          'PDF documents are uploaded through a FastAPI ingestion endpoint and parsed into text segments.',
          'Text is split into chunks and embedded into a vector store for semantic similarity retrieval.',
          'Incoming user queries hit a FastAPI query endpoint, retrieve the top relevant document chunks, and pass structured context through LangChain to the LLM.',
          'Prompt templates constrain output formatting and encourage grounded responses from retrieved context.',
        ],
        decisions: [
          'Exposed document upload and querying as clean FastAPI endpoints so the retrieval workflow can be exercised and validated independently of any UI.',
          'Iterated on chunking boundaries and prompt templates to reduce off-context answers on multi-page PDFs.',
        ],
        testingAndEvaluation:
          'Validated end-to-end API upload and query flows across sample PDFs, checking retrieval relevance and prompt behavior on domain questions and edge-case queries. Automated retrieval benchmarks and latency suites are planned as next steps.',
        limitations: [
          'Answer quality depends heavily on PDF text extraction cleanliness (scanned or table-heavy PDFs require dedicated OCR/layout parsing).',
          'No automated golden-dataset evaluation harness or production auth/rate-limiting is included yet.',
        ],
      },
    },
    {
      slug: 'graphrag-system',
      title: 'GraphRAG System',
      category: 'Applied AI · Hybrid Retrieval',
      context: 'Technical Prototype',
      featuredLead: false,
      diagramType: 'graphrag',
      diagramCaption:
        'Pipeline diagram derived from documented prototype (Neo4j graph store + vector search -> hybrid query API).',
      summary:
        'A hybrid retrieval prototype combining Neo4j graph queries with semantic vector search, exposed through Python APIs for relationship-aware information retrieval.',
      tags: ['Python', 'Neo4j', 'Vector Search', 'APIs'],
      githubUrl: 'https://github.com/Yaseen-md/GraphRAG-system',
      liveUrl: null,
      disclaimer: null,
      caseStudy: {
        role: 'Sole developer — Neo4j graph modeling, hybrid query prototype, and Python API layer.',
        problem:
          'Vector-only similarity search struggles when answers depend on explicit entity relationships and multi-hop connections across documents.',
        whatWasBuilt:
          'A GraphRAG prototype pairing a Neo4j knowledge graph with vector similarity lookup and Python APIs for processing graph-backed queries.',
        workflow: [
          'Entities and relationships are modeled in Neo4j alongside semantic embeddings for text segments.',
          'Incoming queries are processed through Python API endpoints that combine graph traversal with vector search.',
          'Structured graph context and retrieved text snippets are merged to produce richer retrieval context.',
        ],
        decisions: [
          'Used Neo4j to keep entity relationships explicit and inspectable rather than relying solely on opaque vector proximity.',
          'Separated query processing behind an API interface to explore hybrid retrieval and scalable AI system design patterns.',
        ],
        testingAndEvaluation:
          'Tested graph query responses and API paths against prototype datasets to compare relationship-aware lookups against flat semantic retrieval. Quantitative benchmark comparisons across larger graphs remain future work.',
        limitations: [
          'Prototype scale — schema design and automated entity extraction pipelines need hardening for noisy real-world corpora.',
          'Requires graph query hygiene and indexing strategy to keep multi-hop latency predictable at scale.',
        ],
      },
    },
    {
      slug: 'brain-tumor-detection',
      title: 'Brain Tumor Detection using Deep Learning',
      category: 'Applied AI · Computer Vision',
      context: 'Experimental / Academic Project',
      featuredLead: false,
      diagramType: 'mri',
      diagramCaption:
        'Pipeline diagram derived from documented PyTorch training and evaluation workflow (experimental, non-clinical).',
      summary:
        'A PyTorch transfer-learning CNN classifier for MRI brain scan analysis with preprocessing, dataset balancing, regularization, and multi-metric evaluation.',
      tags: ['Python', 'PyTorch', 'CNN', 'Transfer Learning', 'Grad-CAM'],
      githubUrl: 'https://github.com/Yaseen-md/Brain-Tumor-Detector',
      liveUrl: null,
      disclaimer:
        'Experimental & educational project only — not clinically validated, certified, or intended for medical diagnosis.',
      caseStudy: {
        role: 'Developer — data preparation, PyTorch transfer-learning pipeline, regularization, and evaluation.',
        problem:
          'Exploring how convolutional neural networks and transfer learning behave on medical imaging datasets where class imbalance and overfitting directly affect reliability.',
        whatWasBuilt:
          'A PyTorch CNN image classification workflow for MRI scans featuring preprocessing, normalization, data augmentation, dataset balancing, regularized training/validation loops, and interpretability exploration.',
        workflow: [
          'Raw MRI images undergo resizing, normalization, augmentation, and class balancing prior to training.',
          'A transfer-learning CNN architecture in PyTorch is fine-tuned with regularization to reduce overfitting.',
          'Held-out validation and test splits are evaluated across accuracy, precision, recall, F1-score, and confusion matrices.',
          'Visual inspection (including Grad-CAM explorations in the Streamlit interface) highlights image regions influencing model predictions.',
        ],
        decisions: [
          'Used transfer learning and data augmentation rather than training from scratch to stabilize generalization on limited medical imaging data.',
          'Evaluated precision, recall, F1-score, and confusion matrices instead of relying on headline accuracy alone, since false negatives carry disproportionate weight.',
        ],
        testingAndEvaluation:
          'Evaluated across held-out splits using accuracy, precision, recall, F1-score, and confusion matrix inspection to identify class-level error patterns and overfitting. No clinical validation has been conducted.',
        limitations: [
          'Trained and evaluated strictly on public experimental datasets — not validated against clinical workflows, multi-scanner domain shift, or regulatory standards.',
          'Must be treated solely as an educational computer-vision study, never a diagnostic tool.',
        ],
      },
    },
    {
      slug: 'fashion-trend-extraction',
      title: 'Deep Learning-Based Fashion Trend Analysis',
      category: 'Applied AI · Research Publication',
      context: 'Published Co-Authored Research (SciTechPress, 2025)',
      featuredLead: false,
      diagramType: 'fashion',
      diagramCaption:
        'Pipeline diagram derived from documented research workflow (social media images -> preprocessing & CNN/NLP -> AWS experiments).',
      summary:
        'A CNN-based visual trend extraction pipeline combining image preprocessing, basic NLP, and AWS-hosted experiments — published as a co-authored paper in 2025.',
      tags: ['Python', 'CNN', 'NLP', 'AWS', 'Research'],
      githubUrl: null,
      liveUrl: null,
      disclaimer: null,
      caseStudy: {
        role: 'Co-author — built the machine learning pipeline for trend classification and ran cloud-based experiments.',
        problem:
          'Social media platforms surface emerging visual trends rapidly, making manual tracking slow and inconsistent across unstructured image and text feeds.',
        whatWasBuilt:
          'A CNN pipeline to extract and categorize fashion trends from Instagram social media imagery, paired with image preprocessing, basic NLP signals, and cloud experiment execution on AWS.',
        workflow: [
          'Collected social media fashion imagery and accompanying text signals for preprocessing and normalization.',
          'Applied a CNN-based visual feature and classification pipeline alongside basic NLP text handling.',
          'Executed model experiments on AWS cloud services and synthesized findings for peer-reviewed publication.',
        ],
        decisions: [
          'Combined visual classification with basic text preprocessing to capture category context that raw pixels alone miss.',
          'Offloaded experiment runs to AWS services to iterate without local workstation bottlenecks.',
        ],
        testingAndEvaluation:
          'Evaluated classification behavior across curated fashion trend categories and documented methodology and findings in the co-authored paper published via SciTechPress (2025) at the 3rd International Conference on Futuristic Technology.',
        limitations: [
          'Social-media trend distributions shift rapidly and exhibit geographic/platform bias.',
          'Designed as a research study rather than a continuously deployed real-time scraping or inference service.',
        ],
      },
    },
  ],

  otherProjects: [
    {
      title: 'Conversational Travel Advisor',
      summary: 'NLP-based conversational itinerary and travel recommendation exploration in Python.',
      tags: ['Python', 'NLP'],
      githubUrl: 'https://github.com/Yaseen-md/Conversational-Travel-Advisor',
    },
  ],

  capabilities: [
    {
      id: 'applied-ai',
      title: 'Applied AI',
      description:
        'Building practical Python ML, computer vision, and retrieval-augmented LLM workflows with measurable evaluation.',
      demonstrated: [
        'Python',
        'PyTorch (CNNs & Transfer Learning)',
        'RAG & GraphRAG Pipelines',
        'LangChain & LLM Integration',
        'FastAPI Services',
        'Pandas, NumPy & Matplotlib',
      ],
      workingKnowledge: [
        'NLP & Semantic Search',
        'Hugging Face',
        'Prompt Engineering',
        'Scikit-Learn',
      ],
    },
    {
      id: 'quality-engineering',
      title: 'Quality Engineering',
      description:
        'Verifying functional behavior, web security basics, compliance standards, and model/API output quality.',
      demonstrated: [
        'Software Functionality Testing',
        'Web Application Security Testing',
        'GIGW 2.0 Compliance Testing',
        'ML Model Evaluation (Precision, Recall, F1, Confusion Matrix)',
      ],
      workingKnowledge: [
        'API Endpoint Validation (FastAPI / HTTP)',
        'SQL Querying & Data Checks',
        'Structured Technical Screening & Criteria Design',
      ],
    },
    {
      id: 'systems-reliability',
      title: 'Systems & Reliability',
      description:
        'Foundational cloud, database, container, and version-control practices supporting dependable applications.',
      demonstrated: [
        'AWS Core Services (EC2, S3, Lambda — Internship)',
        'Git & GitHub Workflows',
        'Neo4j & MongoDB',
      ],
      workingKnowledge: [
        'Docker Basics',
        'SQL Databases',
        'Cloud Deployment & Infrastructure Concepts',
        'Linux Basics',
      ],
    },
  ],

  experienceAndResearch: [
    {
      category: 'EXPERIENCE',
      period: 'Nov 2025 – Present',
      title: 'Technical IT Recruiter',
      organization: 'HMW Communications Pvt. Ltd. · Hyderabad, India',
      highlights: [
        'Partner with hiring managers to translate engineering needs across Software, AI/ML, Cloud, Data Engineering, Embedded, and QA roles into structured role profiles and screening criteria.',
        'Apply hands-on AI/ML and software engineering fundamentals to evaluate candidate project depth and technical alignment.',
      ],
    },
    {
      category: 'PUBLICATION',
      period: '2025',
      title: 'Deep Learning-Driven Fashion Trend Extraction from Instagram',
      organization: 'SciTechPress · 3rd International Conference on Futuristic Technology 2025',
      highlights: [
        'Co-authored research paper developing a CNN pipeline with image preprocessing and basic NLP to classify fashion trends from social media imagery.',
        'Executed experiments on AWS cloud services.',
      ],
    },
    {
      category: 'INTERNSHIP',
      period: '2024 · 2 months',
      title: 'AWS Cloud Intern',
      organization: 'NSIC (Government of India)',
      highlights: [
        'Worked with AWS EC2, S3, and Lambda to practice cloud deployment basics and core infrastructure concepts.',
        'Completed AWS core services training as part of the NSIC program.',
      ],
    },
    {
      category: 'INTERNSHIP',
      period: 'Aug 2021 – Feb 2022 · 6 months',
      title: 'Intern, Electronics Test and Development',
      organization: 'STQC IT Services · Electronics Test and Development Centre, Hyderabad',
      highlights: [
        'On-site 6-month testing internship during Diploma focusing on software functionality testing and web application security testing.',
        'Executed compliance evaluations against GIGW 2.0 (Government of India Guidelines for Websites).',
      ],
    },
    {
      category: 'EDUCATION',
      period: '2022 – 2025',
      title: 'B.Tech in Computer Science and Engineering (AI & ML)',
      organization: 'Institute of Aeronautical Engineering, Hyderabad · CGPA 8.2/10',
      highlights: [
        'Completed undergraduate specialization in Artificial Intelligence & Machine Learning, following a Diploma from Government Institute of Electronics, Hyderabad (2018 – 2022, 80%).',
      ],
    },
    {
      category: 'WORKSHOP',
      period: '2023',
      title: 'IoT Outreach Workshop',
      organization: "Technex '23",
      highlights: [
        'Built hands-on microcontroller mini-projects with Arduino and NodeMCU and practiced real-time IoT communication fundamentals.',
      ],
    },
  ],

  about: {
    pullLine:
      'Good AI work is not just a model that runs once in a notebook — it is an application whose inputs, APIs, edge cases, and failure modes are understood and tested.',
    paragraphs: [
      'My technical path started with a six-month on-site testing internship at STQC IT Services in Hyderabad, where I worked on software functionality testing, web application security testing, and GIGW 2.0 compliance. That early exposure shaped how I approach engineering during and after my B.Tech in Computer Science (AI & ML) at the Institute of Aeronautical Engineering.',
      'Across my projects — from a FastAPI-backed RAG document chatbot and a Neo4j GraphRAG prototype to PyTorch MRI classification and a published fashion trend analysis study — I care as much about how workflows are structured, evaluated, and verified as I do about the underlying models. Today, alongside my current role evaluating engineering talent across AI/ML, cloud, and QA domains, I continue building toward applied AI, quality engineering, and reliable systems work.',
    ],
  },

  currentlyExploring: {
    note: 'Active learning tracks and hands-on practice — clearly distinct from demonstrated production expertise.',
    tracks: [
      {
        title: 'Automated API & Regression Testing',
        detail:
          'Practicing repeatable test-case design, HTTP API assertions, and structured regression checks around Python/FastAPI services.',
      },
      {
        title: 'LLM & RAG Evaluation Reliability',
        detail:
          'Exploring groundedness checks, retrieval failure analysis, and lightweight evaluation sets for RAG and hybrid graph-retrieval pipelines.',
      },
      {
        title: 'CI/CD & Observability Basics',
        detail:
          'Strengthening hands-on familiarity with reproducible Docker environments, automated test runs, structured logs, and basic service health diagnostics.',
      },
    ],
  },

  contact: {
    heading: 'Get in touch',
    description:
      'For engineering conversations, project questions, or early-career opportunities across Applied AI and Quality Engineering, email is the fastest way to reach me.',
  },
};
