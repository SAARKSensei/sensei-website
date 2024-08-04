"use client";
import React from "react";
import Mental from "@/assets/mental.svg";
import Cross from "@/assets/cross1.svg";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import addchild from "@/Images/addchild.png";

const Page = () => {
  const [checkedId, setCheckedId] = useState(0);

  const concerns = [
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
  ];

  return (
    <div className="container mx-auto p-4 py-10 md:py-20">
      <div className="mx-auto flex h-min w-fit max-sm:flex-col">
        <div className="flex max-w-[600px] flex-col gap-2 lg:max-w-[700px]">
          <h4 className="h4 text-secondary">Mental Wellness</h4>
          <h1 className="h1 text-grad">
            At Sensei, we believe a healthy mind is just as important as a sharp
            one.
          </h1>
          <p className="body_2 mb-4 mt-auto text-secondary">
            Let&apos;s explore prevalent mental health concerns impacting
            countless Indians.{" "}
          </p>
        </div>
        <Mental className="mmin-h-full w-full max-w-[400px]" />
      </div>
      <div className="mx-auto flex h-min w-fit gap-4">
        <div className="scrollbar flex max-h-[658px] max-w-[524px] flex-col gap-2 overflow-y-scroll p-2 sm:max-h-[408px]">
          {concerns.map((concern, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2 rounded-[10px] bg-white pb-4 shadow-cs`}
            >
              <div
                className={`flex ${checkedId === index ? "text-primary" : "text-secondary"} items-start justify-between p-4 pb-0`}
              >
                <h4 className="body_1">{concern.title}</h4>
                <svg
                  onClick={() => setCheckedId(checkedId === index ? -1 : index)}
                  className={`w-5 min-w-5 ${checkedId === index ? "rotate-0" : "rotate-45"} transition-all md:w-6 md:min-w-6`}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9492 4.94922L5.04972 14.8487"
                    stroke="currentcolor"
                    className="opacity-100"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14.9492 14.8496L5.04972 4.95011"
                    stroke="currentcolor"
                    className="opacity-100"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>{" "}
              </div>
              {checkedId === index && checkedId !== -1 && (
                <Description className="block sm:hidden" concern={concern} />
              )}
            </div>
          ))}
        </div>
        {checkedId !== -1 && (
          <Description
            className="block max-sm:hidden"
            concern={concerns[checkedId]}
          />
        )}
      </div>
      <div className="relative mx-auto mt-10 h-fit max-w-[min(1100px,90vw)] rounded-2xl bg-gradient-to-t from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B] p-4 shadow-lg">
        <h1 className="h3 mb-4 w-[80%] text-left font-Nunito font-bold text-white">
          Teach your kid the Life-skill education they need.{" "}
        </h1>
        <Link
          href={"/child-details"}
          className="mr-auto flex h-fit w-fit cursor-pointer items-center rounded-[40px] bg-white p-2 px-4 font-Nunito text-base font-bold text-black md:px-8 md:py-6 md:text-xl"
        >
          Enroll Your Child{" "}
        </Link>
        <Image
          src={addchild}
          alt="addchild"
          sizes="auto"
          className="absolute -right-5 bottom-0 -z-[0] max-h-full max-w-[min(298px,50%)] object-contain"
        />
      </div>
    </div>
  );
};
const Description = ({ className, concern }) => (
  <div
    className={
      className +
      " scrollbar h5_b flex max-h-[658px] max-w-[540px] flex-col gap-2 overflow-y-scroll rounded-[10px] bg-secondary p-4 text-primary sm:max-h-[408px] sm:w-1/2"
    }
  >
    <p>{concern?.description}</p>
    <p>Symptoms of {concern?.title}:</p>
    <ul className="llist-inside ml-3 list-disc md:ml-5">
      {concern?.symptoms.map((s, index) => (
        <li key={index} className="h5">
          {s?.title && <h6>{s?.title} :</h6>}
          <h6>{s?.description}</h6>
        </li>
      ))}
    </ul>
    <p>Preventive Measures for {concern?.title} :</p>
    <ul className="llist-inside ml-3 flex list-disc flex-col gap-1 md:ml-5">
      {concern?.preventions.map((s, index) => (
        <li key={index} className="h5">
          {s?.title && <h6>{s?.title} :</h6>}
          <h6>{s?.description}</h6>
        </li>
      ))}
    </ul>
    {concern?.conclusion && (
      <>
        <p>Conclusion :</p>
        <p>{concern?.conclusion}</p>
      </>
    )}
  </div>
);

export default Page;
