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
    link: "/blogs",
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

        subpoints: [
          {
            title: "Lead by Example",
            description: "Share your own feelings and emotions openly.",
          },
          {
            title: "Create a Safe Space",
            description:
              "Ensure children feel comfortable expressing themselves without fear of criticism.",
          },
          {
            title: "Active Listening",
            description:
              "Pay attention and validate their feelings without immediately offering solutions.",
          },
          {
            title: "Use Age-Appropriate Language",
            description:
              "Your approach should be based on your child's age and maturity level.",
          },
          {
            title: "Regular Check-Ins",
            description:
              "Schedule time for family discussions about feelings or establish daily routines where feelings can naturally be shared.",
          },
        ],
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
  {
    title:
      "Are “Life Skills” really the Building Blocks of a Successful Future?",
    image:
      "https://drive.google.com/uc?export=view&id=1XqBtFJSjbYy7oj_WSkLEVxF8-E5mxWzt",
    description:
      "In today’s rapidly evolving world, academic excellence alone is no longer sufficient to equip our children for the challenges and opportunities that lie ahead. Core life skills, the essential tools for navigating life, have emerged as the cornerstone of holistic child development. These skills empower children to think critically, solve problems, communicate effectively, collaborate seamlessly, unleash their creativity, and understand their emotions. In the Indian context, where a rich cultural heritage intertwines with the demands of a modernizing nation, nurturing these skills is paramount.",
    date: "April 12, 2024",
    duration: "5 min read",
    blogger: "Sensei",
    points: [
      {
        title: "The Significance of Core Life Skills in India",
        description:
          "India, a land of diversity and potential, is undergoing a transformative phase. To harness its full potential, we need citizens who are not just academically proficient but also equipped with life skills. These skills are essential for fostering a skilled workforce, driving innovation, and building a harmonious society. They align perfectly with the vision of India’s National Education Policy (NEP 2020), which emphasizes holistic development.",
      },
      {
        title: "The Four Pillars of Core Life Skills",
        subpoints: [
          {
            title: "Cognitive Skills",
            description:
              "These skills empower children to think critically, analyze information, solve problems creatively, and innovate. They are the foundation for academic success and lifelong learning.",
          },
          {
            title: "Interpersonal Skills",
            description:
              "Effective communication, collaboration, empathy, and leadership are vital for building strong relationships and working effectively in teams. These skills are essential for personal and professional success.",
          },
          {
            title: "Emotional Skills",
            description:
              "Self-awareness, self-regulation, social awareness, and relationship management form the bedrock of emotional intelligence. These skills help children understand and manage their emotions, build resilience, and foster positive relationships.",
          },
          {
            title: "Physical Skills",
            description:
              "A healthy body contributes to a healthy mind. Physical skills, including fitness, coordination, and motor skills, are essential for overall well-being and confidence.",
          },
        ],
      },
      {
        title: "The Role of Parents in Nurturing Life Skills",
        description:
          "Parents are the first and most influential teachers in a child's life. By creating a supportive environment, setting a positive example, and engaging in open communication, parents can significantly contribute to their child's life skills development. We at Sensei nurture a healthy bond between parents and their children through activity based learning modules.",
      },
      {
        title: "The Current State of Life Skills Education in India",
        description:
          "While there has been growing recognition of the importance of life skills, the Indian education system primarily focuses on academic achievement. There is a pressing need to integrate life skills into the curriculum and create a holistic learning environment. Read the NEP guidelines here.",
      },
      {
        title: "Challenges and Recommendations",
        description:
          "Several challenges hinder the effective development of life skills in India, including limited awareness, lack of trained teachers, and inadequate infrastructure. To overcome these challenges, we need a multi-faceted approach involving policymakers, educators, parents, and the community.",
        subpoints: [
          {
            title: "Policy Recommendations",
            description:
              "Incorporate life skills education into the national curriculum, provide teacher training, and allocate adequate resources.",
          },
          {
            title: "School Initiatives",
            description:
              "Develop life skills-based programs, create experiential learning opportunities, and foster partnerships with parents and the community.",
          },
          {
            title: "Parental Involvement",
            description:
              "Encourage parents to participate in their child's education, provide guidance on life skills development, and create supportive home environments.",
          },
          {
            title: "Community Support",
            description:
              "Establish community centers for life skills development, organize workshops and seminars, and promote the importance of life skills.",
          },
        ],
      },
      {
        title: "Conclusion",
        description:
          "Investing in core life skills is an investment in the future of our children and our nation. By nurturing these skills, we empower children to become confident, resilient, and compassionate individuals who can contribute meaningfully to society. Let us work together to create a generation equipped with the knowledge, skills, and values to thrive in the 21st century. Sensei, India's first ABL platform focused on life skills development, is committed to partnering with parents in this journey. Our programs, designed by RCI-approved clinical psychologists, offer a comprehensive approach to nurturing core life skills. Join us in shaping a brighter future for our children. Learn how you can start your journey with Sensei by writing to us on whatsapp.",
      },
    ],
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
export const subjects = [
  {
    title: "Mental Wellness",
    slug: "mental health",
    description:
      "At Sensei, we believe a healthy mind is just as important as a sharp one.",
    concernsHeading:
      "Let's explore prevalent mental health concerns impacting countless Indians.",
    concerns: [
      {
        title: "Anxiety",
        description:
          "Anxiety is a natural feeling that helps us stay alert to danger. But when it becomes excessive and interferes with daily life, it can be a problem. This is especially true for children and young adults. Studies suggest anxiety impacts nearly 1 in 5 adults and over 6% of children and adolescents. Despite its prevalence, many people with anxiety don't receive proper help.",
        symptoms: [
          {
            title: "Constant worries",
            description:
              "May it be about anything, from schoolwork to social situations.",
          },
          {
            title: "Physical reactions",
            description:
              "This may include headaches, stomachaches, a racing heart, sweating, and trouble sleeping.",
          },
          {
            title: "Trouble in focusing",
            description:
              "Anxiety can make it hard to concentrate on school or other activities.",
          },
          {
            title: "Increase in irritability",
            description:
              "Children and young adults with anxiety may be easily frustrated or upset.",
          },
          {
            title: "Avoidance of that one trigger",
            description:
              "They may avoid situations that cause anxiety, like social events or presentations.",
          },
        ],
        preventions: [
          {
            description:
              "Regular sleep, balanced meals, and exercise can all help manage stress and anxiety.",
          },
          {
            description:
              "Deep breathing exercises, mindfulness meditation, and yoga can calm the mind and body.",
          },
          {
            description:
              "Encourage your child to talk openly about their worries and fears.",
          },
          {
            description:
              "Help your child develop positive self-talk to challenge negative thoughts and build confidence.",
          },
          {
            description:
              "If anxiety is severe or interferes with daily life, a qualified mental health professional can provide support.",
          },
        ],
      },
      {
        title: "Depression",

        description:
          "Depression goes beyond temporary sadness. It's a long-lasting condition marked by persistent low mood, a lack of interest in things you used to enjoy, and difficulty managing daily tasks. It can impact your mood, energy levels, sleep, appetite, and focus.The National Mental Health Survey (2015-16) suggests nearly 15% of Indian adults require intervention for mental health issues, with depression being a major concern. One in 20 Indians experiences depression, and it can strike at any stage of life, including childhood and adolescence. Depression can lead to academic difficulties, strained relationships, and even suicide. It's the leading cause of disability worldwide.",

        symptoms: [
          {
            title: "Persistent Low Mood",
            description: "Feeling down and hopeless most of the day.",
          },
          {
            title: "Loss of Interest",
            description: "No longer finding joy in activities you once loved.",
          },
          {
            title: "Changes in Appetite",
            description:
              "Significant weight loss or gain due to altered eating habits.",
          },
          {
            title: "Sleep Disruptions",
            description: "Difficulty sleeping or sleeping excessively.",
          },
          {
            title: "Feelings of Worthlessness or Guilt",
            description:
              "Excessive self-criticism and negative thoughts about yourself.",
          },
        ],
        preventions: [
          {
            description:
              "Eat nutritious meals, exercise regularly, and prioritize quality sleep.",
          },
          {
            description:
              "Connect with loved ones and build a strong social support system.",
          },
          {
            description:
              "Techniques like yoga, meditation, and deep breathing can help manage stress.",
          },
          {
            description:
              "Learn healthy ways to deal with challenges and negative emotions.",
          },
          {
            description:
              "If you're struggling, don't hesitate to reach out to a mental health professional.",
          },
        ],
      },
      {
        title: "Attention-Deficit/Hyperactivity Disorder (ADHD)",
        description:
          "Attention-Deficit/Hyperactivity Disorder (ADHD) is a common neurodevelopmental condition affecting a significant portion of children in India. It impacts focus, attention, impulsivity, and hyperactivity. Children with ADHD might face challenges in school, at home, and with social interactions.Studies conducted in India suggest an ADHD prevalence rate ranging from 2% to 29%, indicating a substantial number of children could be impacted. Early diagnosis and management of ADHD can significantly improve a child's academic performance, social skills, and self-esteem. Increased awareness can significantly reduce the stigma surrounding ADHD and encourage parents to seek help.",
        symptoms: [
          {
            title: "Inattentiveness",
            description:
              "Easily distracted, forgetting things often, difficulty completing tasks.",
          },
          {
            title: "Hyperactivity",
            description:
              "Fidgets or squirms excessively, difficulty staying seated, seems to be constantly 'on the go.'",
          },
          {
            title: "Impulsivity",
            description:
              "Acts without thinking, blurts out answers before questions are finished, has difficulty taking turns.",
          },
          {
            title: "Disorganization",
            description:
              "Difficulty keeping things organized, loses belongings frequently.",
          },
          {
            title: "Difficulty following instructions",
            description:
              "Has trouble following through on instructions or completing tasks.",
          },
        ],
        preventions: [
          {
            description:
              "Regular exercise, a balanced diet, and adequate sleep can enhance focus and overall well-being.",
          },
          {
            description:
              "Create consistent routines for meals, bedtime, and playtime to provide predictability.",
          },
          {
            title: "Positive reinforcement",
            description:
              "Reward desired behaviors and offer constructive feedback for unwanted ones.",
          },
          {
            description:
              "Teach organizational skills like using planners, keeping a tidy workspace, and developing time management habits.",
          },
          {
            description:
              "Techniques like deep breathing and relaxation exercises can help manage stress, which can worsen ADHD symptoms.",
          },
        ],
        conclusion:
          "Remember, there's no proven method to prevent ADHD entirely. However, specific strategies can help manage symptoms and improve a child's overall well-being.",
      },

      {
        title: "Post-traumatic Stress Disorder (PTSD)",
        description:
          "Post-traumatic stress disorder (PTSD) is a mental health condition that can develop after experiencing a terrifying event. This could be a natural disaster, serious accident, violent assault, or war/terrorism. While some initial emotional and physical reactions are normal, PTSD symptoms can linger and significantly disrupt daily life.India faces a reality of natural disasters like floods, earthquakes, and cyclones. These events, along with violence and personal attacks, can leave a lasting impact on individuals. A study following survivors of a powerful cyclone in Orissa found a high prevalence of PTSD, highlighting its impact after natural disasters.",
        symptoms: [
          {
            title: "Intrusive thoughts and memories",
            description:
              "Flashbacks, nightmares, and distressing thoughts about the traumatic event.",
          },
          {
            title: "Avoidance",
            description:
              "Staying away from places, people, or situations that trigger memories of the trauma.",
          },
          {
            title: "Negative thoughts and feelings",
            description: "Feeling hopeless, detached, or angry.",
          },
          {
            title: "Hyperarousal",
            description:
              "Feeling constantly on edge, easily startled, or having trouble sleeping.",
          },
          {
            title: "Physical symptoms",
            description:
              "Headaches, stomachaches, chest pain, or difficulty sleeping.",
          },
        ],
        preventions: [
          {
            description:
              "Talking to friends, family, or a therapist about the traumatic experience can be very helpful.",
          },
          {
            description:
              "Exercise, relaxation techniques (like deep breathing or meditation), and spending time in nature can help manage stress.",
          },
          {
            description:
              "Therapists can provide support and guidance through treatments like cognitive behavioral therapy (CBT).",
          },
          {
            description:
              "Developing healthy coping skills and a positive outlook can help manage challenges.",
          },
          {
            description:
              "Programs to educate communities about mental health after disasters can improve overall well-being.",
          },
          {
            description:
              "Explore how Sensei empowers families [Click Here] //Redirect to B2C Page",
          },
        ],
        conclusion:
          "Remember, while there's no guaranteed way to prevent PTSD, certain practices might help.",
      },
      {
        title: "Obsessive-Compulsive Disorder (OCD)",
        description:
          "Have you ever felt the urge to wash your hands repeatedly, even though they're clean? Or maybe you constantly check if the door is locked, even after seeing it bolted shut? If so, you might be familiar with OCD (Obsessive-Compulsive Disorder). It's a common mental health condition that causes unwanted thoughts (obsessions) and repetitive behaviors (compulsions) that feel difficult to resist.Studies suggest OCD affects around 0.6% to 0.76% of the Indian population. That's a significant number of people who might be struggling silently. Recognizing OCD is crucial because it can significantly impact daily life, causing anxiety and distress.",
        symptoms: [
          {
            title: "Intrusive Thoughts",
            description:
              "Unwanted and disturbing thoughts that feel difficult to control. (e.g., thoughts of harming yourself or others)",
          },
          {
            title: "Repetitive Behaviors (Compulsions)",
            description:
              "Actions you feel driven to repeat to reduce anxiety caused by obsessions. (e.g., excessive washing, checking things repeatedly)",
          },
          {
            title: "Need for Order and Symmetry",
            description:
              "A strong urge to have things arranged in a specific way.",
          },
          {
            title: "Fear of Germs and Contamination",
            description:
              "Excessive worry about germs and getting sick, leading to frequent cleaning.",
          },
          {
            title: "Unwanted Thoughts of Violence or Aggression",
            description:
              "Intrusive thoughts of harming yourself or others, even though you wouldn't actually do it.",
          },
        ],
        preventions: [
          {
            description:
              "Maintain a regular sleep schedule, eat nutritious food, and exercise regularly. These promote overall well-being and can reduce anxiety.",
          },
          {
            description:
              "Practice deep breathing exercises, yoga, or meditation to manage stress and intrusive thoughts.",
          },
          {
            description:
              "Excessive screen time can worsen anxiety and obsessive thoughts. Encourage breaks and other activities.",
          },
          {
            description:
              "Talk openly about your thoughts and feelings with a trusted friend, family member, or therapist.",
          },
          {
            description:
              "Develop coping mechanisms to deal with everyday challenges in a healthy way.",
          },
        ],
        conclusion:
          "Remember, while there's no guaranteed way to prevent OCD, certain practices might help",
      },
      {
        title: "Oppositional Defiant Disorder (ODD)",
        description:
          "Is your child constantly arguing, defying rules, and throwing tantrums? These actions could be signs of Oppositional Defiant Disorder (ODD), a behavioral condition affecting many children in India. ODD is a mental health condition where children exhibit negative, defiant, and disobedient behavior towards authority figures like parents and teachers. They often struggle with managing emotions, controlling impulses, and following instructions.Studies suggest that around 7.73% of primary school children in India might be affected by ODD, with the prevalence being similar for both boys and girls. Identifying and addressing ODD early can prevent future problems for the child.",
        symptoms: [
          {
            title: "Frequent Arguments with Adults",
            description:
              "Constantly questioning rules, talking back disrespectfully, or deliberately doing the opposite of what's asked.",
          },
          {
            title: "Refusal to Comply with Requests or Rules",
            description:
              "Actively resisting instructions, even for simple tasks, leading to power struggles.",
          },
          {
            title: "Angry Outbursts and Temper Tantrums",
            description:
              "Intense outbursts triggered by minor frustrations, like yelling, screaming, or throwing things.",
          },
          {
            title: "Blaming Others for Mistakes",
            description:
              "Struggling to take responsibility for actions and readily shifting blame to others.",
          },
          {
            title: "Easily Annoyed and Touchy with Others",
            description:
              "Constantly on edge, easily irritated by minor inconveniences or teasing from peers.",
          },
        ],
        preventions: [
          {
            description:
              "Focus on praising good behavior, setting clear and consistent expectations, and avoiding harsh punishments.",
          },
          {
            description:
              "Teach your child to express their emotions and needs effectively by having open and honest conversations.",
          },
          {
            description:
              "Help your child learn healthy ways to manage anger and frustration through relaxation exercises, deep breathing, and other coping mechanisms.",
          },
          {
            description:
              "Encourage interaction with other children through play and group activities to foster empathy and cooperation.",
          },
          {
            description:
              "Provide opportunities for your child to succeed and celebrate their achievements to build confidence and self-worth.",
          },
        ],
      },
      {
        title: "Conduct Disorder (CD)",
        description:
          "Conduct disorder (CD) is a serious behavioral issue affecting children and teenagers. It involves a repeated pattern of actions that violate others' rights or societal norms.Studies indicate a significant number of Indian schoolchildren, roughly 5.48%, exhibit signs of CD. Boys are more commonly diagnosed. Early identification and intervention are crucial to prevent long-term negative impacts on a child's social, academic, and personal well-being.",
        symptoms: [
          {
            title: "Aggression",
            description:
              "Physical violence towards people or animals, bullying, or threats of violence.",
          },
          {
            title: "Property Damage",
            description:
              "Deliberately damaging or destroying belongings of others.",
          },
          {
            title: "Deception",
            description: "Frequent lying, stealing, or conning others.",
          },
          {
            title: "Rule-Breaking",
            description:
              "Repeatedly disobeying rules at home, school, or in the community.",
          },
          {
            title: "Lack of Remorse",
            description:
              "Not feeling bad or showing guilt after hurting someone or breaking rules.",
          },
        ],
        preventions: [
          {
            description:
              "Techniques like consistent discipline, clear communication, and positive reinforcement can promote good behavior.",
          },
          {
            description:
              "Creating a nurturing and supportive family environment is vital.",
          },

          {
            description:
              "Helping children develop healthy ways to interact with others and express their emotions.",
          },
          {
            description:
              "Addressing behavioral problems early on can prevent escalation.",
          },
          {
            description:
              "Schools and communities can offer programs that promote social-emotional learning and positive peer interaction.",
          },
          {
            description:
              "Explore how Sensei empowers families [Click Here] //Redirect to B2C Page",
          },
        ],
      },
      {
        title: "Tourette Syndrome",
        description:
          "Tourette Syndrome (TS) is a neurological disorder characterized by involuntary, repetitive movements or sounds called tics. It's crucial to raise awareness about TS in India, as it can be misdiagnosed or misunderstood.Studies suggest TS affects between 0.4% and 3.8% of children and adolescents (ages 5-18) in India. Males are diagnosed more frequently than females, with a ratio of around 3-4 to 1.",
        symptoms: [
          {
            title: "Motor Tics",
            description:
              "Involuntary movements like blinking, head jerking, or facial grimacing.",
          },
          {
            title: "Vocal Tics",
            description:
              "Uncontrolled sounds such as grunting, sniffing, or repeating words or phrases.",
          },
          {
            title: "Urge to Tic",
            description:
              "A feeling of tension or discomfort before a tic, which can be temporarily relieved by performing the tic.",
          },
          {
            title: "Variability",
            description:
              "Tics can change in frequency, intensity, and location over time.",
          },
          {
            title: "Onset",
            description: "Symptoms usually appear between ages 4 and 13.",
          },
        ],
        preventions: [
          {
            description:
              "Habit Reversal Therapy teaches individuals to recognize the urge to tic and replace it with a more controlled response.",
          },
          {
            description:
              "Deep breathing and progressive muscle relaxation can help manage stress, which can worsen tics.",
          },
          {
            description:
              "Cognitive Behavioral Therapy (CBT) can help identify and change negative thoughts or behaviors that make tics worse.",
          },
          {
            description:
              "Having understanding parents, teachers, and friends can make a significant difference for someone with TS.",
          },
          {
            description:
              "In some cases, medication can be helpful to reduce the severity of tics.",
          },
        ],
        conclusion:
          "Remember, while there's no proven prevention for TS, here are some strategies that can help manage symptoms",
      },

      {
        title: "Panic Disorders",

        description:
          "Panic disorder is a common mental health condition affecting millions of Indians. It's characterized by recurrent and unexpected panic attacks, which are sudden surges of intense fear or discomfort that peak within minutes. These attacks can be debilitating and significantly impact daily life.Studies suggest around 2.7% of the population experiences panic disorder, with a significant portion facing severe symptoms.",
        symptoms: [
          {
            title: "Rapid Heart Rate",
            description: "Palpitations, pounding chest, racing pulse.",
          },
          {
            title: "Shortness of Breath",
            description:
              "Feeling of smothering, chest tightness, rapid breathing (hyperventilation).",
          },
          {
            title: "Sweating",
            description:
              "Chills, hot flashes, dizziness, lightheadedness, dry mouth, nausea, stomach cramps.",
          },
          {
            title: "Numbness or Tingling Sensations",
            description:
              "Trembling or shaking, feeling detached from reality (derealization), fear of losing control or going crazy (depersonalization).",
          },
          {
            title: "Intrusive Thoughts",
            description:
              "Impending doom, fear of dying, feeling like you can't escape the situation.",
          },
          {
            title: "Intense Fear",
            description:
              "Overwhelming anxiety, terror, a sense of unreality or detachment from oneself or surroundings.",
          },
        ],
        preventions: [
          {
            description:
              "Practice relaxation techniques like yoga, meditation, or deep breathing exercises.",
          },
          {
            description:
              "Aim for moderate physical activity most days of the week.",
          },
          {
            description:
              "Establish a consistent sleep schedule and prioritize restful nights.",
          },
          {
            description:
              "Nourish your body with nutritious foods to maintain overall well-being.",
          },
          { description: "Excessive use can worsen anxiety symptoms." },
        ],
      },
      {
        title: "Eating Disorders",
        description:
          "Eating disorders are serious mental health conditions that disrupt your relationship with food and body image. They lead to unhealthy eating habits that can significantly harm your physical and emotional well-being.Studies in India suggest that 2-3% of the population might be affected by eating disorders, with a higher rate among young women. Many people in India may not recognize the signs and symptoms, leading to delayed diagnosis and treatment. Westernization, social media influence, and pressure to conform to specific beauty standards can increase the risk of developing eating disorders.",
        symptoms: [
          {
            title: "Unhealthy Food Habits",
            description:
              "Severe food restriction, purging behaviors after eating, or uncontrollable binge eating.",
          },
          {
            title: "Obsessive Focus on Weight and Body Image",
            description:
              "Constant preoccupation with weight or body shape, even at a healthy weight.",
          },
          {
            title: "Denial of Hunger or Fullness Cues",
            description: "Ignoring physical sensations of hunger or fullness.",
          },
          {
            title: "Changes in Mood and Behavior",
            description:
              "Anxiety, depression, irritability, social withdrawal, difficulty concentrating.",
          },
          {
            title: "Physical Health Problems",
            description:
              "Fatigue, weakness, hair loss, irregular periods, and other health complications.",
          },
        ],
        preventions: [
          {
            description:
              "Encourage healthy body image and self-acceptance, focusing on overall well-being and inner strength.",
          },
          {
            description:
              "Eat regular meals and snacks throughout the day, focusing on a balanced diet that includes all food groups.",
          },
          {
            description:
              "Be mindful of time spent on social media, which can negatively influence body image.",
          },
          {
            description:
              "Create a safe space for open communication about food, body image, and mental health concerns.",
          },
          {
            description:
              "If you suspect an eating disorder, consult a qualified mental health professional who specializes in eating disorders.",
          },
        ],
      },
    ],
  },
];
