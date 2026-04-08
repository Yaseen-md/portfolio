export const portfolioData = {
    personalInfo: {
        name: "Mohammed Yaseen",
        title: "Aspiring Data Scientist | AI/ML & Environmental Data Enthusiast",
        bio: "I build exceptional and accessible digital experiences for the web. Passionate about bridging marine biology with data-driven solutions, I blend technical skills with an environmental vision to solve real-world problems.",
        email: "mmohammedyaseen87@gmail.com",
        phone: "+91 7075015786",
        location: "Hyderabad, India",
        resumeUrl: "/Mohammed_Yaseen_Resume.pdf",
        github: "https://github.com/Yaseen-md",
        linkedin: "https://www.linkedin.com/in/mohammed-yaseen-843638223/",
        instagram: "https://instagram.com/_.yaseen22",
    },

    about: {
        shortBio: "I’m an aspiring Marine Data Scientist with a background in AI/ML, currently pursuing a B.Tech in AIML. I specialize in leveraging data-driven insights to address environmental challenges.",
        availability: "Available for internships & collaborations",
    },

    projects: [
        {
            id: 1,
            title: "Instagram Fashion Trend Analysis",
            description: "A deep learning project analyzing fashion trends using Instagram images and captions. Reached high accuracy in style classification.",
            image: "instagram-fashion-trends",
            tags: ["Python", "TensorFlow", "OpenCV", "Matplotlib"],
            githubLink: "https://github.com/Yaseen-md/fashion-trend-analysis",
            liveLink: "#"
        },
        {
            id: 2,
            title: "Smart Parking System",
            description: "An IoT system using ultrasonic sensors and NodeMCU to detect parking slot availability in real-time.",
            image: "smart-parking-system",
            tags: ["Arduino IDE", "NodeMCU", "IoT", "C++"],
            githubLink: "https://github.com/Yaseen-md/smart-parking",
            liveLink: "#"
        },
        {
            id: 3,
            title: "AWS Cloud Portfolio",
            description: "A professional portfolio architecture deployed using AWS EC2, S3, and Route 53 for high availability.",
            image: "aws-portfolio-deployment",
            tags: ["AWS EC2", "S3", "Cloud Architecture", "JavaScript"],
            githubLink: "https://github.com/Yaseen-md/portfolio-aws",
            liveLink: "https://myaseen-portfolio.vercel.app/"
        }
    ],

    experience: [
        {
            title: "AWS Web Services Intern – NSIC",
            duration: "2 months (2024)",
            highlights: [
                "Built and deployed cloud-based solutions using AWS EC2, Lambda, and S3.",
                "Gained hands-on experience in infrastructure setup and monitoring."
            ],
            type: "internship"
        },
        {
            title: "IoT Outreach Workshop – Technex’23",
            duration: "2023",
            highlights: [
                "Built mini-projects using microcontrollers like Arduino and NodeMCU.",
                "Learned IoT protocols and real-time data communication techniques."
            ],
            type: "workshop"
        },
        {
            title: "Research Publication",
            subtitle: "“Deep Learning-Driven Fashion Trend Extraction and Analysis from Instagram”",
            duration: "Conf: 3rd International Conference on Futuristic Technology 2025",
            highlights: [
                "Role: Co-author; built ML model for trend classification.",
            ],
            type: "publication"
        }
    ],

    education: {
        degree: "B.Tech in Artificial Intelligence & Machine Learning",
        institution: "Institute of Aeronautical Engineering, Hyderabad",
        description: "Focused on leveraging AI and ML techniques to solve complex problems, with a keen interest in applying these skills to marine data science and environmental challenges."
    },

    certifications: [
        {
            title: "AWS Training",
            issuer: "Amazon Web Services",
            description: "Completed comprehensive training on AWS core services and cloud architecture.",
            type: "award"
        },
        {
            title: "IoT Workshop",
            issuer: "Technex'23",
            description: "Hands-on workshop focusing on IoT protocols and microcontroller programming.",
            type: "check"
        }
    ]
};
