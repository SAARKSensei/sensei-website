import interactiveLearning from "@/assets/interactiveLearning.svg?url";
import parentingSupport from "@/assets/ParentingSupport.svg?url";
import securePlatform from "@/assets/SecurePlatform.svg?url";
import ageAppropriate from "@/assets/ageAppropriate.svg?url";
import focusLearning from "@/assets/FocusOnLearning.svg?url";
import personalizedInsight from "@/assets/personalizedInsight.svg?url";

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
    },
    plans: [
      {
        name: "Basic",
        ddescription:
          "Lorem ipsum dolor sit amet consectetur. Mauris mattis nist lectus urna nisi mauris.",
        curr_price: "₹699",
        price: "₹747",
        billed: "One Time Payment",
        subjects: { 1: true, 2: false, 3: false },
        duration: "3 Months",
        includes: [
          "For 5-10 years children",
          "24 Interactive activities",
          "12 Digital activities",
          "E-learning materials",
        ],
        monthly: {
          curr_price: "₹249",
          price: "₹499",
        },
      },
      {
        name: "Intermediate",
        ddescription:
          "Lorem ipsum dolor sit amet consectetur. Mauris mattis nisl lectus urna nisi mauris",
        curr_price: "₹1399",
        price: "₹1494",
        billed: "One Time Payment",
        subjects: { 1: true, 2: true, 3: false },
        duration: "6 Months",
        includes: [
          "For 5-10 years children",
          "48 Interactive activities",
          "24 Digital activities",
          "E-learning materials",
        ],
        tag: "Best Selling",
        monthly: {
          curr_price: "₹249",
          price: "₹499",
        },
      },
      {
        name: "In-depth",
        ddescription:
          "Lorem ipsum dolor sit amet consectetur. Mauris mattis nisl lectus urna nisl mauris.",
        curr_price: "₹1999",
        price: "₹2241",
        billed: "One Time Payment",
        subjects: { 1: true, 2: true, 3: true },
        duration: "9 Months",
        tag: "Recomended",
        includes: [
          "For 5-10 years children",
          "72 Interactive activities",
          "36 Digital activities",
          "E-learning materials",
        ],
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
    },
    plans: [
      {
        name: "Starting @",
        description: "",
        curr_price: "₹14,999",
        price: "₹17,991",
        billed: "One Time Payment",
        subjects: { 1: true, 2: true, 3: true },
        duration: "9 Months",
        includes: [
          "For 5-10 years children",

          "72 Interactive activities",

          "36 Digital activities",

          "At your nearest location",

          "Counsellor as facilitator",

          "E-learning materials",
        ],
        monthly: {
          curr_price: "₹1999",
          price: "",
        },
      },
    ],
  },
};
// export const psychologists = [
//   {
//     name: "Dr. Aprajita Dixit",
//     description: "Child & Adolescent Counsellor",
//     img: aprajita_dixit,
//     linkedIn_url: "https://www.linkedin.com/in/aprajita-dixit-7a277179",
//   },
//   {
//     name: "Roma Kaushik",
//     description: "Child Psychologist",
//     img: roma_kaushik,
//     linkedIn_url: "https://www.linkedin.com/in/roma-kaushik-3a01aa140/",
//   },
// ];
// export const team = [
//   {
//     name: "Sankalp Kumar",
//     description: "Co-Founder CEO",
//     img: sankalp_kumar,
//     linkedIn_url: "https://www.linkedin.com/in/sankalp-kumar-68b49a169/",
//   },
//   {
//     name: "Abhishek Paswan",
//     description: "Co-Founder COO",
//     img: abhishek_paswan,
//     linkedIn_url: "https://www.linkedin.com/in/abhishek-paswan-44bb01113/",
//   },
//   {
//     name: "Arshit Mishra",
//     description: "Co- Founder | Curriculum Lead",
//     img: arshit_mishra,
//     linkedIn_url: "https://www.linkedin.com/in/arshit-mishra-61317011a/",
//   },
//   {
//     name: "Shreyas Thakre",
//     description: "Jr.Frontend Developer",
//     img: shreyas_thakre,
//     linkedIn_url: "https://www.linkedin.com/in/shreyas-thakare-691261151",
//   },
//   {
//     name: "Rohit Raj",
//     description: "Jr.Graphic Designer",
//     img: rohit_raj,
//     linkedIn_url: "https://www.linkedin.com/in/18rohitraj/",
//   },
//   {
//     name: "Ananta Paul",
//     description: "Frontend Developer Intern",
//     img: ananta_paul,
//     linkedIn_url: "https://www.linkedin.com/in/anantapaul/",
//   },
//   {
//     name: "Ayaan Baksh",
//     description: "Social Media Marketing Intern",
//     img: ayaan_baksh,
//     linkedIn_url: "https://www.linkedin.com/in/ayaan-baksh-2a3780260/",
//   },
//   {
//     name: "Ashwini Narkhede",
//     description: "Marketing Intern",
//     img: ashwini_narkhede,
//     linkedIn_url: "https://www.linkedin.com/in/ashwini-narkhede-97663217a/",
//   },
//   {
//     name: "Manika Chaudhary",
//     description: "Psychology Intern",
//     img: manika_choudhary,
//     linkedIn_url: "https://linkedin.com/in/manika-chaudhary-67710610b/",
//   },
//   {
//     name: "Hardik Gupta",
//     description: "Psychology Intern",
//     img: hardik_gupta,
//     linkedIn_url: "https://linkedin.com/in/hardik-r-58964a239?u/",
//   },
// ];
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
    title: "Pricing",
    link: "/pricing",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Blogs",
    link: "/blogs/0",
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
export const blogs = [
  {
    title: "Encouraging Children to Openly Discuss Feelings at Home",
    image:
      "https://drive.google.com/uc?export=view&id=10vfz1XOxvAwUbP-2F8NbAmxVxYYtmECR",
    description:
      "In the journey of raising children, there are many essential parts to consider, and one of the most important yet often overlooked is the encouragement of open conversations about feelings at home. Many parents prioritize teaching manners, academic skills, and physical health, but emotional well-being is equally essential for a child's development into a balanced and strong adult. Encouraging an environment of open communication about feelings at home is not just beneficial but necessary:",
    date: "April 12, 2024",
    duration: "5 min read",
    blogger: "Sensei",
    points: [
      {
        title: "Emotional Awareness and Intelligence",
        description:
          "Children experience a wide range of emotions from a very young age. By openly discussing feelings, parents help children to recognize and label their emotions. This builds emotional awareness and intelligence, essential skills that enable children to navigate their emotional views more effectively.",
      },
      {
        title: "Building Trust and Security",
        description:
          "When children feel they can openly express their feelings without judgment or dismissal, it creates a sense of trust and security within the family. This trust is like the solid ground that a strong parent-child relationship stands on. It helps children feel secure when they need advice and comfort during tough emotional moments.",
      },
      {
        title: "Healthy Coping Mechanisms",
        description:
          "Open conversations about feelings provide opportunities to discuss healthy ways to cope with emotions. Instead of suppressing or ignoring feelings, children learn constructive ways to manage them. This could include deep breathing exercises, journaling, talking to a trusted adult, or engaging in physical activities.",
      },
      {
        title: "Strengthening Communication Skills",
        description:
          "Effective communication is a fundamental life skill. By discussing feelings openly, parents model how to express oneself clearly and respectfully. Kids learn to express their feelings and ideas, which helps them talk well with friends, teachers, and later on, co-workers when they grow up.",
      },
      {
        title: "Understanding Empathy and Compassion",
        description:
          "When children learn to talk about their feelings, they also develop empathy and compassion for others' emotions. They understand that everyone experiences a range of feelings, and this understanding fosters kindness and supportive behavior towards others.",
      },
      {
        title: "Addressing Mental Health Early",
        description:
          "Mental health is as important as physical health, and open conversations about feelings can help identify early signs of emotional distress or mental health issues. Starting to help and support kids early can really make a big difference in how they feel and grow, and it can stop bigger problems from happening when they get older.",
      },
      {
        title: "Navigating Challenges Effectively",
        description:
          "Life is filled with challenges, disappointments, and successes. By discussing feelings openly, children learn that it’s normal to experience a mix of emotions during different situations. They learn and improve, which is essential for handling life's difficulties.",
      },
      {
        title: "Creating a Positive Family Culture",
        description:
          "Encouraging open conversations about feelings helps create a positive family culture where emotions are respected and valued. It brings everyone together, so each family member feels listened to and valued.",
      },
      {
        title: "Practical Tips for Encouraging Open Conversations",
        description:
          "- Lead by Example: Share your own feelings and emotions openly. - Create a Safe Space: Ensure children feel comfortable expressing themselves without fear of criticism. - Active Listening: Pay attention and validate their feelings without immediately offering solutions. - Use Age-Appropriate Language:  Your approach should be based on your child's age and maturity level. - Regular Check-Ins: Schedule time for family discussions about feelings or establish daily routines where feelings can naturally be shared.",
      },
    ],
    conclusion:
      "In conclusion, building open conversations about feelings at home is not just a parenting choice but a necessity for nurturing emotionally intelligent, resilient, and mentally healthy children. It helps kids build good relationships, talk well with others, and feel happy throughout their lives. When parents make these talks a priority, they give their children the confidence and know-how to handle feelings well. This prepares them to succeed in everything they undertake.",
  },
  {
    title: "Mindfulness Activities for Kids: Simple Exercises to Promote Calm",
    image:
      "https://drive.google.com/uc?export=view&id=1mIqSE9bAWGVLXSaR-8FPb4_XtpQv8Z5q",
    description:
      "Do you ever feel like your child is bursting with energy? You’re not alone! In our fast-paced world, it's essential to teach kids how to relax and focus. That's where mindfulness comes in. Mindfulness isn't just for grown-ups. It's a way to be aware of the present moment, without judgment. For children, this can translate to feeling more relaxed, focused, and equipped to manage difficult emotions. Mindfulness can be fun! Here are some simple activities to get your little one started:",
    date: "April 12, 2024",
    duration: "5 min read",
    blogger: "Sensei",
    points: [
      {
        title: "The Breathing Buddy",
        description:
          "Our breath is always with us, making it a fantastic anchor for mindfulness. Have your child lay down or sit comfortably, with a stuffed animal on their tummy. Ask them to pretend the stuffy is their 'breathing buddy' and watch it rise and fall with each inhale and exhale. Count breaths together, up to ten if they can manage.",
      },
      {
        title: "The Senses Scavenger Hunt",
        description:
          "Turn your walk into a mindfulness adventure! Challenge your child to find something soft, something rough, something red, something sweet-smelling. This helps them focus on their surroundings instead of just their swirling thoughts.",
      },
      {
        title: "The Glitter Jar",
        description:
          "Feeling overwhelmed? Shake up a jar of water with some glitter in it. Watch the sparkles swirl and settle, just like our emotions. Talk about how calming down can take time, just like the glitter.",
      },
      {
        title: "Mindful Munching",
        description:
          "Turn snack time into a mini-meditation! Give your child a raisin or piece of chocolate and ask them to explore it with all their senses. How does it feel? What is the scent of it? Encourage them to savor each bite, slowing down and appreciating the simple pleasure of eating.",
      },
      {
        title: "The Body Scan",
        description:
          "This is a great one for bedtime! Have your child lay down and close their eyes. Guide them to focus on different parts of their body, one at a time. Ask them to wiggle their toes, feel their belly rise and fall with each breath, and tense and release their shoulders.",
      },
    ],
    conclusion:
      "Remember that mindfulness is a continuous journey rather than a final destination. Be patient, keep it fun, and let your child explore at their own pace. Who knows, maybe you'll even learn a thing or two from your little mindfulness master!",
  },
  {
    title:
      "Creating a Safe and Supportive Environment for Emotional Growth in Teens",
    image:
      "https://drive.google.com/uc?export=view&id=1XqBtFJSjbYy7oj_WSkLEVxF8-E5mxWzt",
    description:
      "Navigating the teenage years can be a rollercoaster of emotions. Between academic pressures, social dynamics, and personal development, it's a time filled with both exciting opportunities and challenging obstacles. As adults—whether as parents, teachers, or mentors—creating a safe and supportive environment for teenagers is crucial. It helps them develop emotional resilience, build self-confidence, and grow into well-rounded individuals. Here’s how you can create a nurturing environment for teens aged 12-18.",
    date: "April 12, 2024",
    duration: "5 min read",
    blogger: "Sensei",
    points: [
      {
        title: "Practice Active Listening",
        description:
          "One of the most impactful things you can do is listen. Teens need to feel heard and understood. To practice active listening: Give Full Attention: When a teenager wants to talk, put aside distractions. Show you’re genuinely interested by maintaining eye contact and responding thoughtfully. Validate Their Feelings: Even if you don’t fully understand their experiences, acknowledge their emotions. Saying things like, “That sounds really tough,” or “I can see why you feel that way,” helps them feel validated. Avoid Immediate Fixes: Instead of jumping in with solutions, sometimes just being there and listening can be the most supportive response.",
      },
      {
        title: "Encourage Open Communication",
        description:
          "Creating an environment where teens feel comfortable sharing their thoughts and feelings is key to their emotional growth: Be Approachable: Make sure teens know they can come to you without fear of judgment or punishment. Let them know their opinions and feelings are valued. Ask Open-Ended Questions: Instead of yes-or-no questions, try asking, “How did that make you feel?” or “What’s been on your mind lately?” This encourages deeper conversations. Create Safe Spaces: Designate times or spaces where teens can talk openly. This might be during family dinners, one-on-one chats, or even casual hangouts.",
      },
      {
        title: "Support Their Individual Needs",
        description:
          "Every teenager is unique and has different emotional needs. To support them effectively: Recognize Their Strengths: Celebrate their achievements and encourage their interests. This helps build self-esteem and a sense of accomplishment. Respect Their Boundaries: Not all teens are ready to talk about everything. Respect their need for privacy and let them open up when they’re ready. Provide Resources: Offer access to counseling, support groups, or educational materials that can help them manage stress and emotional challenges.",
      },
      {
        title: "Promote Positive Interactions",
        description:
          "A positive and supportive environment contributes greatly to emotional well-being: Encourage Positive Relationships: Foster an environment where respectful and supportive friendships are valued. Teach teens how to build healthy relationships. Model Positive Behavior: Demonstrate healthy ways to handle stress and conflict. Your actions often speak louder than words. Celebrate Efforts and Achievements: Whether it’s a small victory or a big accomplishment, acknowledge and celebrate their efforts. This reinforces a positive self-image.",
      },
      {
        title: "Be a Supportive Role Model",
        description:
          "Your behavior influences how teens handle their own emotions: Show Empathy: Demonstrate understanding and compassion in your interactions. When you show empathy, it encourages teens to practice it as well. Be Honest About Your Feelings: Sharing your own experiences and emotions can help teens understand that it’s okay to feel and express their own feelings. Encourage Problem-Solving: Instead of solving their problems for them, guide them through problem-solving strategies. This helps them develop critical thinking and emotional resilience.",
      },
    ],
    conclusion:
      "Creating a safe and supportive environment for teens involves active listening, encouraging open communication, supporting individual needs, promoting positive interactions, and being a role model. By fostering these elements, you help teens navigate their emotional journey with confidence and resilience. Remember, the teenage years are a crucial time for emotional development, and your support can make a significant difference in their growth and well-being.",
  },
];
export const searches = [
  {
    text: "Decision Making",
    color: "#FF8B13",
  },
  {
    text: "Critical Thinking",
    color: "#F8BF3B",
  },
  {
    text: "Empathy",
    color: "#9FC5EF",
  },
  {
    text: "Active Listening",
    color: "#3AA176",
  },
  {
    text: "Building Resilience",
    color: "#0764A7",
  },
  {
    text: "Mindfulness",
    color: "#F6B0A8",
  },
  {
    text: "Social Skills",
    color: "#EF5F3D",
  },
  {
    text: "Stress Management",
    color: "#FF8B13",
  },
  {
    text: "Boost Self-Esteem",
    color: "#3AA176",
  },
  {
    text: "Emotional intelligence",
    color: "#0764A7",
  },
  {
    text: "Time Management",
    color: "#F8BF3B",
  },
];
export const subjectData = [
  {
    subjectName: "Emotional Wellness",
    percentage: "54%",
    innerSubjectDivColor: "#CEE2E5",
    innerBarColor: "#89DAE5",
  },
  {
    subjectName: "Self And Social Awareness",
    percentage: "36%",
    innerSubjectDivColor: "#FFD9B2",
    innerBarColor: "#FF8B13",
  },
  {
    subjectName: "Moral Guidence",
    percentage: "71%",
    innerSubjectDivColor: "#FCEECA",
    innerBarColor: "#FCD97D",
  },
];

export const counsellorData = [
  {
    counsellorName: "Carter Mango",
    speciality: "Speciality",
    rating: 4.8,
    price: 2350,
  },
  {
    counsellorName: "Haylie Dokidis",
    speciality: "Speciality",
    rating: 4.2,
    price: 1850,
  },
];

export const interactivieActivities = [
  {
    unit: 1.1,
    time: "30mins",
    topic: "Self-Identity",
  },
  {
    unit: 1.2,
    time: "30mins",
    topic: "Strength and Challenges",
  },
  {
    unit: 2.1,
    time: "30mins",
    topic: "My body and Emotions",
  },
  {
    unit: 2.2,
    time: "30mins",
    topic: "Strength and Challenges",
  },
];

export const gamifiedActivities = [
  {
    unit: "ASA 1",
    time: "5mins",
    topic: "My Favourite Things",
  },
  {
    unit: "ASA 2",
    time: "5mins",
    topic: "My Proud Moments",
  },
  {
    unit: "ASA 3",
    time: "5mins",
    topic: "Name and Family Tree",
  },
  {
    unit: "ASA 4",
    time: "5mins",
    topic: "Strength and Challenges",
  },
];

export const activityData = [interactivieActivities, gamifiedActivities];
export const cities = [
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Surat",
  "Patna",
  "Indore",
  "Vadodara",
  "Bhopal",
  "Coimbatore",
  "Visakhapatnam",
  "Agra",
  "Madurai",
  "Varanasi",
  "Allahabad",
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Kolkata",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
];
export const tags = [
  "Mental Wellness",
  "Emotional Well-Being",
  "Life skill education",
  "SEL curriculum",
  "Self and Social Awareness",
  "Moral Guidance and Ethics",
  "National Education Policy",
];
export const blogsp = [
  {
    id: 1,
    title: "How to manage your child’s separation anxiety",
    tagLines: "Child Development and Behavior",
    image:
      "https://www.unicef.org/parenting/sites/unicef.org.parenting/files/styles/hero_extended/public/UN066587.JPG.webp?itok=EvPPdqUn",
    description:
      "Spending time away from your little one can be painful for both of you. But sometimes, saying goodbye can create feelings of worry and upset in your child. Here are some things to look out for and ways you can help your young one manage such difficult feelings and ultimately feel more safe and secure.",
    date: "",
    blogger: "unicef",
    logo: "https://e7.pngegg.com/pngimages/737/888/png-clipart-unicef-logo-united-states-unicef-united-nations-organization-child-unicef-symbol-globe-logo-thumbnail.png",
    link: "https://www.unicef.org/parenting/child-care/managing-child-separation-anxiety",
  },
  {
    id: 2,
    title: "21 Healthy Discipline Strategies for Positive Parenting",
    tagLines: "Child Development and Behavior",
    image:
      "https://positive.b-cdn.net/wp-content/uploads/2021/01/Discipline-Strategies-300x150.jpg",
    description:
      "Parenting comes with its own set of challenges, with new demands and stressors being placed on families in the forms of rapidly developing technology, easier access to information, and the looming presence of social media.",
    date: "27 Feb 2024",
    blogger: "Dr. Gabriella",
    logo: "https://secure.gravatar.com/avatar/c3abf170cc2f56ca14b367bebeee0aad?s=280&d=https%3A%2F%2Fpositivepsychology.com%2Fwp-content%2Fthemes%2Fpositivepsychology%2Fdist%2Fimages%2Fdefault_user.jpg&r=g",
    link: "https://positivepsychology.com/discipline-strategies/",
  },
  {
    id: 3,
    title: "Balancing Work and Family: Tips for Working Parents",
    tagLines: "Child Development and Behavior",
    image:
      "https://childdevelopmentinfo.com/wp-content/uploads/2024/02/parentwork.jpg",
    tagLines: "Expert Parenting Articles, Family Building",
    description:
      "In today’s fast-paced and demanding world, working parents have a unique challenge of balancing their professional responsibilities with their family life. Parenting in this day and age requires managing multiple priorities and can feel like a never-ending juggling act. But don’t worry, with the right mindset and strategies, it’s possible to achieve a work-life balance!",
    date: "February 7, 2024",
    blogger: "Robert Myers,Phd",
    logo: "https://childdevelopmentinfo.com/wp-content/uploads/2019/07/Robert-Myers-PhD-square-100x100.jpg",
    link: "https://childdevelopmentinfo.com/parenting/balancing-work-and-family-tips-for-working-parents/",
  },
  {
    id: 4,
    title: "8 Ways Parents Can Teach Kindness to Kids",
    tagLines: "Child Development and Behavior",
    image:
      "https://blog.cincinnatichildrens.org/wp-content/uploads/2023/12/8-Ways-Parents-Can-Teach-Kindness-to-Kids.2.smaller.jpg",
    description:
      "Kids understand kindness at a very early age. In fact, babies as young as 8-12 months can demonstrate kindness by sharing their food and toys with others. Kindness is the trait of being selfless, generous, considerate and friendly; qualities that most parents like to foster in their children. And with good reason – acts of kindness impact the levels of certain neurotransmitters in our brains that affect happiness and attachment to others.Further, for those kids who seem to naturally struggle with kindness, the good news is that it can be taught just like any other skill. And the earlier it’s taught, the better! Here are a few ways to foster kindness in kids: ",
    date: "2024-02-27",
    blogger: "Lynne Merk, PhD",
    logo: "https://blog.cincinnatichildrens.org/wp-content/uploads/2019/12/Lynne-Merk-PhD_avatar_1575303381-96x96.jpg",
    link: "https://blog.cincinnatichildrens.org/healthy-living/child-development-and-behavior/8-ways-parents-can-teach-kindness-to-kids/",
  },
];
export const news = [
  {
    id: 1,
    title: "Temper Tantrums",
    tagLines: "Child Development and Behavior",
    image:
      "https://i.vimeocdn.com/video/832566638-8d9ae6030ba779e59f68c76b31a6023dd4e582641786f7e4c20eba5646d3df9e-d?mw=600&mh=337",
    description:
      "Temper tantrums can be frustrating for any parent. But instead of looking at them as disasters, treat tantrums as opportunities for education.",
    date: "June 2022",
    blogger: "Elizabeth M. Schilling, PhD",
    logo: "https://photo.nemours.org/E/3937/244x278",
    link: "https://kidshealth.org/en/parents/tantrums.html",
  },
  {
    id: 2,
    title: "How Chores Help Kids Build Independence",
    tagLines: "Child Development and Behavior",
    image:
      "https://www.strong4life.com/-/media/Strong4Life/emotional-wellness/independence-and-problem-solving/elementary_age_girl_taking_out_the_trash_002_R.jpg",
    description:
      "Getting kids involved in household chores can be tough sometimes. It’s more than likely faster and easier to do things around the house ourselves. But when we don’t give kids chores, and just do things ourselves, it takes away opportunities for them to learn real-life skills and build confidence, independence and ultimately resilience (able to handle life’s ups and downs). Learn more about why chores are good for kids, how to assign kids chores and how to navigate resistance to chores.",
    date: "",
    blogger: "Strong4Life",
    logo: "",
    link: " https://www.strong4life.com/en/emotional-wellness/independence-and-problem-solving/how-chores-help-kids-build-independence#:~:text=For%20example%2C%20put%20away%20clean,re%20expected%20to%20complete%20them.",
  },
  {
    id: 3,
    title: "Sleep: The importance of a bedtime routine",
    tagLines: "Child Development and Behavior",

    image:
      "https://naitreetgrandir.com/documentsng/images/imagesprincipalegrande/sleep-importance-of-bedtime-routine.jpg",
    description:
      "Some children’s sleep problems can be attributed to their parents’ behaviour at bedtime. Well-intentioned parents may unwittingly engage in overprotective behaviours, such as staying with their child until they fall asleep or letting their child sleep in their bed if they wake up at night. ",
    date: "November 2023 ",
    blogger: "Évelyne Touchette",
    logo: "",
    lonk: "https://naitreetgrandir.com/en/step/5-8-years/family-life/sleep-importance-of-bedtime-routine/#:~:text=Getting%20adequate%20sleep%20in%20terms,ve%20learned%20during%20the%20day.",
  },
];
