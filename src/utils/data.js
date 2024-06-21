import interactiveLearning from "@/assets/interactiveLearning.svg";
import parentingSupport from "@/assets/ParentingSupport.svg";
import securePlatform from "@/assets/SecurePlatform.svg";
import ageAppropriate from "@/assets/ageAppropriate.svg";
import focusLearning from "@/assets/FocusOnLearning.svg";
import personalizedInsight from "@/assets/personalizedInsight.svg";
import sankalp_kumar from "@/assets/us/sankalp_kumar.jpg";
import abhishek_paswan from "@/assets/us/abhishek_paswan.jpg";
import arshit_mishra from "@/assets/us/arshit_mishra.jpg";
import shreyas_thakre from "@/assets/us/shreyas_thakre.jpg";
import rohit_raj from "@/assets/us/rohit_raj.jpg";
import ananta_paul from "@/assets/us/ananta_paul.jpg";
import ayaan_baksh from "@/assets/us/ayaan_baksh.jpg";
import aprajita_dixit from "@/assets/us/aparajita_dixit.jpg";
import roma_kaushik from "@/assets/us/roma_kaushik.jpg";
import ashwini_narkhede from "@/assets/us/ashwini_narkhede.jpg";
import manika_choudhary from "@/assets/us/manika_choudhary.jpg";
import hardik_gupta from "@/assets/us/hardik_gupta.jpg"
export const plans = {
  Family: {
    features: {
      subjects: [
        {
          name: "Emotional Well-Being",
          id: 1,
        },
        {
          name: "Self & Social Awareness",
          id: 2,
        },
        {
          name: "Moral-Guidance & Ethics",
          id: 3,
        },
      ],
      includes: [
        {
          name: "For 5-10 years children",
          id: 1,
        },
        {
          name: "24 Interactive activities",
          id: 2,
        },
        {
          name: "12 Digital activities",
          id: 3,
        },
        {
          name: "E-learning materials",
          id: 4,
        },
      ],
    },
    plans: [
      {
        name: "Basic",
        description:
          "Lorem ipsum dolor sit amet consectetur. Mauris mattis nist lectus urna nisi mauris.",
        curr_price: "₹699",
        price: "₹747",
        billed: "Billed annually",
        subjects: { 1: true, 2: false, 3: false },
        duration: "3 Months",
        includes: { 1: true, 2: true, 3: true, 4: true },
        monthly: {
          curr_price: "₹249",
          price: "₹499",
        },
      },
      {
        name: "Intermediate",
        description:
          "Lorem ipsum dolor sit amet consectetur. Mauris mattis nisl lectus urna nisi mauris",
        curr_price: "₹1399",
        price: "₹1494",
        billed: "Billed annually",
        subjects: { 1: true, 2: true, 3: false },
        duration: "6 Months",
        includes: { 1: true, 2: true, 3: true, 4: true },
        tag: "Best Selling",
        monthly: {
          curr_price: "₹249",
          price: "₹499",
        },
      },
      {
        name: "In-depth",
        description:
          "Lorem ipsum dolor sit amet consectetur. Mauris mattis nisl lectus urna nisl mauris.",
        curr_price: "₹1999",
        price: "₹2241",
        billed: "Billed annually",
        subjects: { 1: true, 2: true, 3: true },
        duration: "9 Months",
        includes: { 1: true, 2: true, 3: true, 4: true },
        tag: "Recomended",
        monthly: {
          curr_price: "₹249",
          price: "₹499",
        },
      },
    ],
  },
  Society: {
    features: {
      subjects: [
        {
          name: "Emotional Well-Being",
          id: 1,
        },
        {
          name: "Self & Social Awareness",
          id: 2,
        },
        {
          name: "Moral-Guidance & Ethics",
          id: 3,
        },
      ],
      includes: [
        {
          name: "For 5-10 years children",
          id: 1,
        },
        {
          name: "72 Interactive activities",
          id: 2,
        },
        {
          name: "36 Digital activities",
          id: 3,
        },
        {
          name: "At your nearest location",
          id: 4,
        },
        {
          name: "Counsellor as facilitator",
          id: 5,
        },
        {
          name: "E-learning materials",
          id: 6,
        },
      ],
    },
    plans: [
      {
        name: "Starting @",
        description:
          "",
        curr_price: "₹14,999",
        price: "₹17,991",
        billed: "Billed annually",
        subjects: { 1: true, 2: true, 3: true },
        duration: "9 Months",
        includes: { 1: true, 2: true, 3: true, 4: true, 5: true, 6: true },
        monthly: {
          curr_price: "₹1999",
          price: "",
        },
      },
    ],
  },
};
export const psychologists = [
  {
    name: "Dr. Aprajita Dixit",
    description: "Child & Adolescent Counsellor",
    img: aprajita_dixit,
    linkedIn_url: "https://www.linkedin.com/in/aprajita-dixit-7a277179"
  },
  {
    name: "Roma Kaushik",
    description: "Child Psychologist",
    img: roma_kaushik,
    linkedIn_url: "https://www.linkedin.com/in/roma-kaushik-3a01aa140/"
  },
];
export const team = [
  {
    name: "Sankalp Kumar",
    description: "Co-Founder CEO",
    img: sankalp_kumar,
    linkedIn_url: 'https://www.linkedin.com/in/sankalp-kumar-68b49a169/',
  },
  {
    name: "Abhishek Paswan",
    description: "Co-Founder COO",
    img: abhishek_paswan,
    linkedIn_url: "https://www.linkedin.com/in/abhishek-paswan-44bb01113/",
  },
  {
    name: "Arshit Mishra",
    description: "Co- Founder | Curriculum Lead",
    img: arshit_mishra,
    linkedIn_url: "https://www.linkedin.com/in/arshit-mishra-61317011a/",
  },
  {
    name: "Shreyas Thakre",
    description: "Jr.Frontend Developer",
    img: shreyas_thakre,
    linkedIn_url: "https://www.linkedin.com/in/shreyas-thakare-691261151",
  },
  {
    name: "Rohit Raj",
    description: "Jr.Graphic Designer",
    img: rohit_raj,
    linkedIn_url: "https://www.linkedin.com/in/18rohitraj/",
  },
  {
    name: "Ananta Paul",
    description: "Frontend Developer Intern",
    img: ananta_paul,
    linkedIn_url: "https://www.linkedin.com/in/anantapaul/",
  },
  {
    name: "Ayaan Baksh",
    description: "Social Media Marketing Intern",
    img: ayaan_baksh,
    linkedIn_url: "https://www.linkedin.com/in/ayaan-baksh-2a3780260/",
  },
  {
    name: "Ashwini Narkhede",
    description: "Marketing Intern",
    img: ashwini_narkhede,
    linkedIn_url: "https://www.linkedin.com/in/ashwini-narkhede-97663217a/"
  },
  {
    name: "Manika Chaudhary",
    description: "Psychology Intern",
    img: manika_choudhary,
    linkedIn_url: "https://linkedin.com/in/manika-chaudhary-67710610b/",
  },
  {
    name: "Hardik Gupta",
    description: "Psychology Intern",
    img: hardik_gupta,
    linkedIn_url: "https://linkedin.com/in/hardik-r-58964a239?u/",
  },
];
export const features = [
  {
    image: interactiveLearning,
    title: "Interactive Learning",
    description:
      "Fun, hands-on activities like projects and games spark critical thinking and creativity.",
  },
  {
    image: parentingSupport,
    title: "Parenting Support",
    description:
      "Expert advice, strategies, and tools to help parents navigate challenges and build strong family dynamics.",
  },
  {
    image: ageAppropriate,
    title: "Age-Appropriate",
    description:
      "Tailored content and methods match each child's developmental stage for optimal learning.",
  },
  {
    image: focusLearning,
    title: "Focus on Learning",
    description:
      "Ditch the stress of exams! We emphasize understanding, creativity, and a love for lifelong learning.",
  },
  {
    image: securePlatform,
    title: "Secure Platform",
    description:
      "Encrypts and safeguards personal data with advanced security measures.",
  },
  {
    image: personalizedInsight,
    title: "Personalized Insights",
    description:
      "Get a report on your child's strengths, weaknesses, and areas for skill development.",
  },
];
export const Herotexts = ["mentally", "emotionally", "ethically"];

export const cards = [
  {
    title: "For Society",
    description:
      "We make weekends fun and productive! Sensei's team of professionals visit your society clubhouse where we hold weekly sessions and empower parents along with kids.",
    button: "Explore",
    image: "buildings",
  },
  {
    title: "For School",
    description:
      "We believe classrooms are where we see friendships, problem-solving, and teamwork in action. Research says that Learning social skills blossoms through play and interaction with friends!",
    button: "Explore",
    image: "school",
  },
  {
    title: "For NGO",
    description:
      "",
    button: "Explore",
    image: "family",
  },
];
export const comments = [
  {
    description:
      "Sensei has been a game-changer for my introverted child. The self and social awareness modules, designed by actual psychologists, have given them the tools to confidently approach new situations and make friends. We're so grateful for this platform that complements their regular schooling!",
    identity: "Fellow Parent",
    user: "Mother of an 8 yrs old, Pune",
  },
  {
    description:
      "I love doing the activities with my parents. My parents are my best friends!",
    identity: "Young Friend",
    user: "9 yrs old, [A society] Pune",
  },
  {
    description:
      "Sensei's activity-based learning modules are a fantastic addition to my classroom. The social-emotional learning focus is refreshing, and I've seen a positive difference in how students interact with each other.",
    identity: "Fellow Parent",
    user: "Clinical Psychologist, Raipur",
  },
  {
    description:
      "Sensei is a fantastic fit for school with no compromise. The program aligns perfectly with NEP 2020 guidelines and this is what we were looking for.",
    identity: "Fellow Parent",
    user: "School Admin, Pune",
  },
  {
    description:
      "As a practicing psychologist, I'm impressed by Sensei's commitment to well-being. This can be a game changer for Indian parenting specially the introduction of SEL modules",
    identity: "Fellow Parent",
    user: "Indian Psychologist, London",
  },
  {
    description:
      "I wish we were taught these skills in our childhood, I would be a different person altogether. There is so much to learn here.",
    identity: "Fellow Parent",
    user: "Father of a 5 yrs old, Pune",
  },
];
export const faqs = [
  {
    id: 1,
    question: "What is the focus of Sensei?",

    answer:
      "Sensei focuses on equipping children with essential life skills before they enter the complexities of the modern world.",
  },
  {
    id: 2,
    question: "Are the learning modules age-appropriate?",

    answer:
      "Sensei tailors educational content and methods to match students' developmental stages, fostering effective learning, engagement, and skill development while considering their cognitive and emotional needs.",
  },
  {
    id: 3,
    question: "What makes Sensei different from other learning apps?",
    answer:
      "Fulfilling the demands of life skills along with academics aligning with the new National Education Policy, Sensei creates a blend of digital and traditional Activity-based learning (ABL) crafted by RCI-approved Clinical Psychologists. Sensei stands out by prioritizing the development of crucial life skills like social-emotional learning, social and self-awareness, and ethical decision-making.",
  },
  {
    id: 4,
    question: "How does Sensei align with Indian education?",
    answer:
      "The National Education Policy (NEP) 2020 emphasizes Socio-emotional learning (SEL) for healthy social interactions and emotional well-being. Sensei's Activity-Based Learning (ABL) modules tackle this by helping children identify and manage emotions, build strong relationships, and make responsible choices.",
  },
  {
    id: 5,
    question: "Does Sensei provide a progress report?",
    answer:
      "Sensei provides personalized reports on a child's emotional quotient and self and social awareness only when partnered with your school or society.",
  },
  {
    id: 6,
    question: "How does Sensei empower families?",
    answer:
      "Sensei empowers families to navigate the digital age with confidence by offering resources and guidance. It offers easy Activity-based learning (ABL) modules for overall kinesthetic learning. This can be done between any guardian and a child.",
  },
  {
    id: 7,
    question: "Does Sensei offer a free trial?",
    answer:
      "Sensei offers a Demo Activity for free once a user logs in. Sensei also provides free resources, assessments, guides, and parenting solutions.",
  },
  {
    id: 8,
    question: "Is Sensei available in multiple languages?",
    answer:
      "Currently Sensei is only available in English. Multilingual learning is what Sensei looks forward to depending on collaboration with schools and their needs.",
  },
  {
    id: 9,
    question: "Who teaches and supervises kids?",
    answer:
      "Sensei has a team of Psychologists who conduct Activity-based learning (ABL) sessions. Sensei also empowers existing educators to upskill themselves to conduct these sessions.",
  },
  {
    id: 10,
    question: "Will Sensei come to my Society and conduct these sessions?",
    answer:
      "Sensei goes beyond the internet, bringing engaging activity-based sessions right to your society club house which will be conducted by psychologists. At Sensei we believe this format of learning is best delivered by kinaesthetics format. Contact to know more!",
  },
];
export const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about",
  },
  // {
  //   title: "ABL Modules",
  //   link: "/ablmodules",
  // },
  {
    title: "Pricing",
    link: "/pricing",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];
export const ABLFilters = [
  {
    id: 1,
    name: "Age group",
    options: [
      {
        id: 1,
        name: "5-7 years",
      },
      {
        id: 2,
        name: "8-10 years",
      },
    ],
  },
  {
    id: 2,
    name: "Topics",
    options: [
      {
        id: 1,
        name: "Emotional Well-being (EW)",
      },
      {
        id: 2,
        name: "Safe & Self Awareness (SSA)",
      },
      {
        id: 3,
        name: "Moral Guidance & Ethics (MG)",
      },
    ],
  },
  {
    id: 3,
    name: "Concerns",
    options: [
      {
        id: 1,
        name: "Difficulty following instructions",
      },
      {
        id: 2,
        name: "Frequent tantrums/ meltdowns",
      },
      {
        id: 3,
        name: "Trouble sharing and taking turns",
      },
      {
        id: 4,
        name: "Disorganized and forgetful behavior",
      },
      {
        id: 5,
        name: "Resistance to trying new things",
      },
      {
        id: 6,
        name: "Struggles with focus and concentration",
      },
      {
        id: 7,
        name: "Difficulty making friends",
      },
      {
        id: 8,
        name: "Inconsistent sleep routines",
      },
      {
        id: 9,
        name: "Excessive worry or anxiety",
      },
      {
        id: 10,
        name: "Struggles with self-confidence",
      },
    ],
  },
];
