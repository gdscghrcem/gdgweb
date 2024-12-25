import sakshamImage from '../assets/GDG MEMBERS/Saksham_Sharma.jpg';
import sumeetImage from '../assets/GDG MEMBERS/Sumeet_Gond.png';
import prernaImage from '../assets/GDG MEMBERS/Prerna_Agrawal.jpeg'
import rajImage from '../assets/GDG MEMBERS/Raj_Gupta.jpg'
import adityaImage from '../assets/GDG MEMBERS/Aditya_Chavan.jpg'
import mayankImage from '../assets/GDG MEMBERS/Mayank_Saraswat.jpg'
import riteshImage from '../assets/GDG MEMBERS/Ritesh_Devkate.jpg'
import shravaniImage from '../assets/GDG MEMBERS/Shravani_Bhalerao.png'

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  github?: string;
  mail? : string;
};

export type Teams = {
  [key: string]: TeamMember[];
};

export const teams: Teams = {
  'Core': [
    {
      id: 1,
      name: "Devyani Chavan",
      role: "GDG Lead",
      image: "https://picsum.photos/400?random=101",
      bio: "Devyani is a passionate technologist who loves working with LLMs to solve real-world problems. As a GDG on Campus Organizer and Microsoft Learn Ambassador, she has been instrumental in building a community driven by innovation, collaboration, and growth.",
      linkedin: "https://www.linkedin.com/in/devyani-chavan",
      mail: "devyanichavan110@gmail.com"
    },
    {
      id: 2,
      name: "Ayush Yadav",
      role: "Tech Lead",
      image: "https://picsum.photos/400?random=1",
      bio: "Ayush is a full-stack web developer with expertise in AI and API integration. A multiple hackathon winner, he leads with innovation as the Tech Lead at GDG",
      linkedin: "https://www.linkedin.com/in/ayushyadav27",
      github: "https://github.com/ayuxy027",
      mail: "ayush421301@gmail.com"
    },
    {
      id: 3,
      name: "Shravani Bhalerao",
      role: "Design Lead",
      image: shravaniImage,
      bio: "Shravani is a talented design lead at GDG with strong design experience and creativity, bringing innovative and visually appealing solutions to every project.",
      linkedin: "https://www.linkedin.com/in/shravani-bhalerao-8b45b5293",
      mail: "sb.natalya04@gmail.com"
    },
    {
      id: 4,
      name: "Ritesh Patil",
      role: "Finance Lead",
      image: "https://picsum.photos/400?random=3",
      bio: "Ritesh is a dedicated and hardworking individual, serving as the Finance Lead at GDG. With a strong technical background, he blends finance expertise with technical skills to contribute to the success of the team.",
      linkedin: "https://www.linkedin.com/in/ritesh-patil-303b12256",
      mail : "5riteshrp@gmail.com"
    },
    {
      id: 5,
      name: "Saksham Sharma",
      role: "Public Relations Lead",
      image: sakshamImage,
      bio: "Saksham is GDG's Public Relations Lead and an extroverted personality known for his exceptional communication skills. His ability to connect with people and captivate large audiences through his shows, Shayari, and storytelling makes him a standout figure.",
      linkedin: "http://www.linkedin.com/in/capable-sharma",
      mail : "sakshams1983@gmail.com"
    },
    {
      id: 6,
      name: "Raj Gupta",
      role: "Event Lead",
      image: rajImage,
      bio: "Raj is an experienced Event Management Lead with a diverse skill set spanning video editing, Management, and entrepreneurship. His leadership and creativity shine through in every event and project he manages.",
      linkedin: "https://in.linkedin.com/in/-the-raj-gupta",
      mail : "theRajGuptapro@gmail.com"
    },
    {
      id: 7,
      name: "Santosh Singh",
      role: "Content Lead",
      image: "https://picsum.photos/400?random=6",
      bio: "Santosh, as the Content Lead, combines his photography and video skills to create captivating content for GDG. His creative eye and expertise in social media content drive engagement and visibility.",
      linkedin: "https://www.linkedin.com/in/santosh-singh-26415828a",
      mail : "iamsingh.santosh@gmail.com"
    }
  ],
  'Tech': [
    {
      id: 8,
      name: "Ayush Yadav",
      role: "Tech Lead",
      image: "https://picsum.photos/400?random=7",
      bio: "Ayush is a full-stack web developer with expertise in AI and API integration. A multiple hackathon winner, he leads with innovation as the Tech Lead at GDG",
      linkedin: "https://www.linkedin.com/in/ayushyadav27",
      github: "https://github.com/ayuxy027",
      mail: "ayush421301@gmail.com"
    },
    {
      id: 9,
      name: "Saish Mungase",
      role: "Tech Member",
      image: "https://picsum.photos/400?random=9",
      bio: "Saish is a problem-solving full-stack developer specializing in creating innovative AI applications that deliver seamless and impactful user experiences.",
      linkedin: "http://www.linkedin.com/in/saish-mungase",
      github: "https://github.com/saishmungase",
      mail: "saishmungase@gmail.com"
    },
    {
      id: 10,
      name: "Sujeet Yadav",
      role: "Tech Member",
      image: "https://picsum.photos/400?random=8",
      bio: "Sujeet is a skilled developer with excellent website design and clean coding abilities, creating seamless and visually appealing web experiences.",
      linkedin: "https://www.linkedin.com/in/sujeet-yadav0070",
      github: "https://github.com/codesujeet",
      mail: "ysujeet0070@gmail.com"
    },
  ],
  'Design': [
    {
      id: 11,
      name: "Shravani Bhalerao",
      role: "Design Lead",
      image: shravaniImage,
      bio: "Shravani is a talented design lead at GDG with strong design experience and creativity, bringing innovative and visually appealing solutions to every project.",
      linkedin: "https://www.linkedin.com/in/shravani-bhalerao-8b45b5293",
      mail: "sb.natalya04@gmail.com"
    },
    {
      id: 12,
      name: "Mayank Saraswat",
      role: "Design Member",
      image: mayankImage,
      bio: "Mayank is a young designer with exceptional skills, consistently delivering impressive and creative design solutions.",
      linkedin: "https://www.linkedin.com/in/mayank-saraswat-a08401252",
      mail: "saraswatmayank336@gmail.com"
    },
    {
      id: 13,
      name: "Sanika Bavaskar",
      role: "Design Member",
      image: "https://picsum.photos/400?random=12",
      bio: "Sanika is a young and skilled designer, known for her creativity and ability to bring fresh, innovative ideas to life.",
      linkedin: "https://www.linkedin.com/in/sanika-bavaskar-473810325",
      mail: "sanika222kar@gmail.com"
    }
  ],
  'Finance': [
    {
      id: 14,
      name: "Ritesh Patil",
      role: "Finance Lead",
      image: "https://picsum.photos/400?random=13",
      bio: "Ritesh is a dedicated and hardworking individual, serving as the Finance Lead at GDG. With a strong technical background, he blends finance expertise with technical skills to contribute to the success of the team.",
      linkedin: "https://www.linkedin.com/in/ritesh-patil-303b12256",
      mail : "5riteshrp@gmail.com"
    },
    {
      id: 15,
      name: "Pruthviraj Santosh Chavan",
      role: "Finance Member",
      image: "https://picsum.photos/400?random=14",
      bio: "Pruthviraj is a highly experienced finance team member whose dedication and commitment are unmatched. His disciplined and focused approach reflects the qualities of a true professional, much like an army officer.",
      linkedin: "http://in.linkedin.com/in/pruthviraj-chavan-873736308",
      mail : "pruthvirajchavan2905@gmail.com"
    }
  ],
  'Public Relations': [
    {
      id: 16,
      name: "Saksham Sharma",
      role: "Public Relations Lead",
      image: sakshamImage,
      bio: "Saksham is GDG's Public Relations Lead and an extroverted personality known for his exceptional communication skills. His ability to connect with people and captivate large audiences through his shows, Shayari, and storytelling makes him a standout figure.",
      linkedin: "http://www.linkedin.com/in/capable-sharma",
      mail : "sakshams1983@gmail.com"
    },
    {
      id: 17,
      name: "Ritesh Devkate",
      role: "Public Relations Member",
      image: riteshImage,
      bio: "Ritech is a PR member with excellent communication skills and a natural confidence that helps him capture the attention of large audiences. His ability to engage and connect makes him an invaluable asset to the team.",
      linkedin: "https://www.linkedin.com/in/ritesh-devkate-8b28222a3",
      mail : "rdevkate1920@gmail.com"
    },
    {
      id: 18,
      name: "Tanmay Pagare",
      role: "Public Relations Member",
      image: "https://picsum.photos/400?random=17",
      bio: "Tanmay is a dynamic PR member with a knack for communication and building strong community connections. His passion for esports and engaging personality allows him to effectively connect with diverse audiences and create memorable interactions.",
      linkedin: "https://www.linkedin.com/in/tanmay-pagare-956a45297",
      mail : "tanmay8business@gmail.com"
    }
  ],
  'Event Management': [
    {
      id: 19,
      name: "Raj Gupta",
      role: "Event Lead",
      image: rajImage,
      bio: "Raj is an experienced Event Management Lead with a diverse skill set spanning video editing, Management, and entrepreneurship. His leadership and creativity shine through in every event and project he manages.",
      linkedin: "https://in.linkedin.com/in/-the-raj-gupta",
      mail : "theRajGuptapro@gmail.com"
    },
    {
      id: 20,
      name: "Shreyash Jadhav",
      role: "Event Member",
      image: "https://picsum.photos/400?random=19",
      bio: "Shreyansh brings exceptional management skills to the Event Management team, ensuring smooth coordination and successful events. His attention to detail and organizational abilities are key to the team's success.",
      linkedin: "https://www.linkedin.com/in/shreyash-jadhav-42541b256",
      mail : "Shreyashjadhav3999@gmail.com"
    },
    {
      id: 21,
      name: "Prerna Agrawal",
      role: "Event Member",
      image: prernaImage,
      bio: "Prerna's impressive management skills, despite her youth, make her a valuable asset to the team. She excels in handling tasks efficiently and contributes to the overall success of every project she tackles.",
      linkedin: "https://www.linkedin.com/in/prerana-agrawal-25102a331",
      mail : "preragram78987@gmail.com"
    }
  ],
  'Content': [
    {
      id: 22,
      name: "Santosh Singh",
      role: "Content Lead",
      image: "https://picsum.photos/400?random=21",
      bio: "Santosh, as the Content Lead, combines his photography and video skills to create captivating content for GDG. His creative eye and expertise in social media content engagement and visibility.",
      linkedin: "https://www.linkedin.com/in/santosh-singh-26415828a",
      mail : "iamsingh.santosh@gmail.com"
    },
    {
      id: 23,
      name: "Aditya Chavan",
      role: "Content Member",
      image: adityaImage,
      bio: "Aditya is a skilled Content Member with an eye for photography and a flair for content creation. He plays a key role in producing engaging and visually appealing content for GDG's digital platforms.",
      linkedin: "https://www.linkedin.com/in/aditya-chavan-714691257",
      mail : "email"
    },
    {
      id: 24,
      name: "Sumeet Gond",
      role: "Content Member",
      image: sumeetImage,
      bio: "Sumeet is a versatile Content Member, blending his coding skills with strong communication and UI abilities. His multifaceted expertise helps create high-quality, engaging content for GDG.",
      linkedin: "https://www.linkedin.com/in/sumeet-gond-22b7b5298",
      mail : "sumitv9009@gmail.com"
    }
  ]
};

