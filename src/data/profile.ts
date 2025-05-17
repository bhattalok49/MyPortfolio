export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  period: string;
  description: string;
}

export const profile = {
  name: "Alok Bhatt",
  title: "Software Engineer | Arista Networks",
  location: "Bengaluru, India",
  contact: {
    phone: "+91-7011609371",
    email: "bhattalok49@gmail.com",
  },
  about:  "I love building intelligent systems that make a difference — blending AI, distributed computing, and performance engineering. If you’re into that too, we should talk.",
  profileImage: "/alok_bhatt.JPG",
  
  social: {
    github: "https://github.com/bhattalok49",
    linkedin: "https://www.linkedin.com/in/alok-bhatt-75925b202/",
  },
  experience: [
    {
      id: "arista-swe",
      company: "Arista Networks",
      position: "Software Engineer",
      period: "Oct 2023–Present",
      location: "Bangalore",
      highlights: [
        "Contributed to SDN and OS components of Arista's Multi-Domain Segmentation Service, building an East-West firewall using a high-performance DPDK-based software pipeline (BESS) to enforce Zero Trust policies across intra-data center traffic.",
        "Designed and implemented firewall policy enforcement logic across control and data planes, including label generation, CLI integration, and support for double-encapsulated tunneled packets in microsegmentation use cases.",
        "Integrated Qosmos DPI engine into the firewall datapath to enable Layer 7 application visibility, enhancing rule granularity and enabling content-aware policy actions at runtime.",
        "Engineered features for hitless rule updates, system restart/revert handling, and datapath optimizations using flame graphs and performance profiling tools, achieving a 30% throughput improvement under high-load conditions."
      ]
    },
    {
      id: "arista-intern",
      company: "Arista Networks",
      position: "SWE Intern",
      period: "Jan 2023–June 2023",
      location: "Bangalore",
      highlights: [
        "Implemented core dump collection enhancement technique for kernel panic occurrences, utilizing U-Boot side scripting to enable compression logic and inline memory compression for ramdumps.",
        "Created a user-space application to facilitate the upload of collected dumps to an HTTP server, ensuring efficient and reliable data transfer.",
        "Acquired in-depth knowledge of kernel drivers, exploring various aspects of wifi technology, including wifi frames and their functioning.",
        "Modified the pipelines codebase to improve abstraction, resulting in better code maintainability and reduced technical debt."
      ]
    },
    {
      id: "ieee-intern",
      company: "IEEE",
      position: "Research Intern",
      period: "2021",
      highlights: [
        "Developed and evaluated machine learning models to detect malware in computer systems by analyzing diverse datasets of malicious and benign files.",
"Demonstrated the model's ability to detect both known and zero-day malware threats as well as Integrated the model into a user-friendly interface for practical usage."
      ]
    }
  ],
  certifications: [
     {
      id: "arista-sdn",
      name: "Arista Cloud Engineer",
      organization: "Arista",
      period: "2023",
      description: [ "Gained hands-on experience with modern network design principles including Leaf-Spine architecture and Arista EOS. Explored network automation using Arista CloudVision, with a focus on scalable and resilient enterprise infrastructure."
    ]
    },
    {
      id: "amazon-ml",
      name: "Machine Learning School",
      organization: "Amazon",
      period: "2022",
      description: [ "Developed a understanding on advanced techniques and methodologies in machine learning and deep learning, including feature engineering, model evaluation, hyperparameter tuning, and optimization algorithms. Executed a prominent project on customer segmentation using k-means clustering, showcasing the practical application of machine learning to improve decision-making and customer targeting."
    ]
    },
    {
      id: "google-cloud",
      name: "Cloud Sprint Bootcamp",
      organization: "Google",
      period: "2022",
      description: "Acquired 30 days comprehensive training from google mentors on Troubleshooting ,Linux and Networking. Developed expertise in troubleshooting complex issues, analyzing system logs, and diagnosing performance bottlenecks within cloud-based environments. Designed a scalable Twitter like platform, with key functionalities including user follow/unfollow and tweet posting. Presented the design to Google's developers and managers."
    }
  ],
  projects: [
    {
      id: "human-detection",
      title: "Human Body Detection using EM waves",
      description: "Developed a system to detect human presence through walls using electromagnetic wave analysis.",
      technologies: ["Python", "ML", "Signal Processing"]
    },
    {
      id: "land-classification",
      title: "Land Cover Classification with Satellite Imagery",
      description: "Created a model to classify different types of land cover from satellite images.",
      technologies: ["Python", "TensorFlow", "GIS"]
    },
    {
      id: "mask-detection",
      title: "Face Mask Detection",
      description: "Built a model with 95% accuracy to detect whether people are wearing face masks.",
      technologies: ["Python", "OpenCV", "TensorFlow"]
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["C", "C++", "Python", "Go Lang"]
    },
    {
      category: "Tools",
      items: ["Git", "Perforce", "Docker", "FlameGraph", "Perf", "VSCode"]
    },
    {
      category: "Concepts",
      items: ["DSA", "OOPs", "OS", "DBMS", "Machine Learning"]
    },
    {
      category: "Infra/Tech",
      items: ["DPDK", "GCP", "Kafka", "gRPC", "Jenkins", "SQL", "Microservices"]
    }
  ]
};