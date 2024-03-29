import {
    selfMotivated,
    quickLearner,
    innovative,
    collaborative,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    haytekLogo,
    kargisLogo,
    itsLogo,
    kargisSite,
    itsSite,
    bostanciSite,
    hoobankSite,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Self-Motivated",
      icon: selfMotivated,
    },
    {
      title: "Quick-Learner",
      icon: quickLearner,
    },
    {
      title: "Innovative",
      icon: innovative,
    },
    {
      title: "Collaborative",
      icon: collaborative,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Front-End Developer",
      company_name: "Haytek",
      icon: haytekLogo,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - March 2022",
      points: [
        "Haytek was a unit at my university working on animal husbandry technologies.",
        "I started my development journey here by building a website for this unit.",
        "I learned HTML, CSS, Bootstrap and WordPress.",
      ],
    },
    {
      title: "Front-End Developer",
      company_name: "Kargis",
      icon: kargisLogo,
      iconBg: "#E6DEDD",
      date: "March 2022 - June 2022",
      points: [
        "After my work at Haytek, I started working at Kargis.",
        "Another unit at the school, which was trying to guide students on their career path.",
        "I was tasked with building the website for this unit.",
        "And I worked with Tailwind CSS, Laravel and Livewire.",
      ],
    },
    {
      title: "Front-End Developer",
      company_name: "ITS",
      icon: itsLogo,
      iconBg: "#383E56",
      date: "July 2022 - Sep 2022",
      points: [
        "ITS is a telecommunication company. I completed my internship here by making the websites of this company.",
        "I completed 2 websites in the 2 months I worked. ",
        "You can review the websites I made here in the 'works' section below.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "HooBank",
      description:
        "HooBank is a payment method of next generation. This is just a concept web application. Figma design is taken from www.oneweekwonders.com",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: hoobankSite,
      source_code_link: "https://hoobank-hakan-doruk.netlify.app/",
    },
    {
      name: "BSG",
      description:
        "'BSG' is a telecommunication company. It is also a part of ITS. During my internship period, I also made a website for this company. It was a good experience.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: bostanciSite,
      source_code_link: "https://bostanci.com/",
    },
    {
      name: "ITS",
      description:
        "'ITS' is a telecommunication company. It is one of the first telecommunication companies operating in the communication technologies sector in Turkey.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: itsSite,
      source_code_link: "https://its.com.tr/",
    },
    {
      name: "Kargis",
      description:
        "A unit of the school that aims to guide university students in their career planning. The project was terminated while it was under construction.",
      tags: [
        {
          name: "laravel",
          color: "blue-text-gradient",
        },
        {
          name: "livewire",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: kargisSite,
      source_code_link: "https://github.com/Rhaelkan/kargis-livewire/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };