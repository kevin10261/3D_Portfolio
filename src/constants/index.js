import { meta, shopify, starbucks, tesla } from "../assets/images";
import python from "../assets/icons/python.svg";
import c1 from "../assets/icons/c1.svg";
import c2 from "../assets/icons/c2.svg";
import c3 from "../assets/icons/c3.svg";
import rust from "../assets/icons/rust.svg";
import java from "../assets/icons/java.svg";
import geoson from "../assets/images/geoson.png";
import uarm from "../assets/images/uarm.png";
import uarm1 from "../assets/images/uarm.jpeg";
import face from "../assets/icons/face.svg";
import poker from "../assets/icons/poker.svg";
import portfolio from "../assets/icons/portfolio.svg";
import soccer from "../assets/icons/soccer.svg";
import twitter from "../assets/icons/twitter.svg";
import game from "../assets/icons/game.svg";
import airplane from "../assets/icons/airplane.svg";



import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: c1,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: c2,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: c3,
        name: "C",
        type: "Backend",
    },
    {
        imageUrl: rust,
        name: "Rust",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },

    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },

    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },

    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },

];

export const experiences = [
    {
            title: "Computer Technician",
            company_name: "Alberta Computers for Schools",
            icon: tesla,
            iconBg: "#fbc3bc",
            date: "May 2023 - August 2023",
            points: [
                "Performed diagnostics, troubleshooting, and repairs on 300+ desktops, laptops and IT equipment by identifying hardware issues and replacing faulty parts for the purpose of donating to underserved communities",
                "Managed inventory control, quality assurance, and secure data wiping to uphold privacy and security standards of an used memory disks.",
                "Provided technical support to 20+ staff members, including training on software applications and resolving hardware issues, resulting in 100% uptime of office equipment.",

            ],
        },
    {
        title: "Software Developer",
        company_name: "Geoson Solutions Ltd.",
        icon: geoson,
        iconBg: "#accbe1",
        date: "January 2024 - Aug 2024",
        points: [
            "Contributed to the development of the Geoson Sport Tracker app using Agile methodologies, through Powerapps which leverages Power FX, to manage over 10+ college sports teams tryout processes by tracking player statistics and performance metrics.",
            "Led the redesign of the company website, using HTML, CSS, JS, and React to modernize the color scheme, deploying a chatbot that increased customer engagement, and introducing dynamic functionalities that boosted web traffic by 25%+ within three months.",
            "Developed RESTful APIs for data synchronization across 10+ departments, utilizing C#, SQL, and eONE SmartConnect, improving data accuracy and reducing manual work by 100+ hours per month.",
        ],
    },
    
    {
        title: "Robotic Software Engineer",
        company_name: "University of Alberta Robomaster Team",
        icon: uarm1,
        iconBg: "#a2d2ff",
        date: "September 2024 - December 2024",
        points: [
            "Enhanced a dense RGB 3D mapping system using C++, ROS2, SLAM, and sensor integration to enhance real-time navigation and environmental awareness",
            "Optimized targeting accuracy using Python, OpenCV, HSV filtering, PNP solver, and object detection to enhance real-time identification of light bars and armor types",
            "Developed a custom PID controller for the robot using C++, ROS2, and inverse kinematics to improve the accuracy of picking up and placing objects",
            
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: face,
        theme: 'btn-back-red',
        name: 'Face Recognition App',
        description: 'Developed a facial recognition app that detects faces in images and videos, using OpenCV to identify and highlight facial features.',
        link: 'https://github.com/kevin10261/Face-Recognition',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Mapreduce Threads',
        description: 'Implemented a MapReduce framework using pthreads in C, allowing for parallel processing of large datasets to improve performance.',
        link: 'https://github.com/kevin10261/Mapreduce',
    },
    {
        iconUrl: poker,
        theme: 'btn-back-blue',
        name: 'Poker Game',
        description: 'Developed a poker games (Texas Holdem, 5 card draw, 7 card stud) using Rust, allowing players to play against other players through a websocket connection.',
        link: 'https://github.com/kevin10261/Poker',

    },
    
    {
        iconUrl: portfolio,
        theme: 'btn-back-yellow',
        name: '3D Portfolio Website',
        description: 'Designed and developed a personal portfolio website using React, Tailwind CSS, and Framer Motion to showcase my projects and skills.',
        link: '',
    },

    {
        iconUrl: soccer,
        theme: 'btn-back-purple',
        name: 'Premier League Predictor',
        description: 'premier league predictor is a machine learning project that predicts the win rates of English Premier League teams for the 2023-2024 season. The project uses a Random Forest Classifier to train the model and make predictions based on historical match data.',
        link: 'https://github.com/kevin10261/Soccer-League-Predictor'
    },

    {
        iconUrl: game,
        theme: 'btn-back-orange',
        name: 'Kessler Game Controller',
        description: 'This controller utilizes Fuzzy Logic Control (FLC) and Generative AI techniques to make intelligent, human-like decisions in a dynamic space environment. The AI continuously evaluates game states, optimizes decisions, and adapts its strategies in real-time.',
        link: 'https://github.com/kevin10261/Kessler_controller'
    },

    {
        iconUrl: twitter,
        theme: 'btn-back-blue',
        name: 'Twitter SQL terminal',
        description: 'This system emulates a simplified Twitter-like platform, enabling users to register, log in, compose tweets, follow other users, search tweets and users, view followers, and more.',
        link: 'https://github.com/kevin10261/SQL-Tweet'
    },
    
    {
        iconUrl: airplane,
        theme: 'btn-back-red',
        name: 'Inventory Management Android App',
        description: 'Developed an Android app that allows users to manage inventory to ensure proper insurance coverage during emergencies. The app uses Firebase to store data and provides a user-friendly interface for adding, updating,deleting items and others.',
        link: 'https://github.com/CMPUT301F23T10/Boeing301House'
    },


];