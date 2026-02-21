// utils/mock-data.js

export const MOCK_SUBMODULE_DATA = {
  subModuleId: "EwbSubMod",
  subModuleName: "Exploring Feelings",
  interactiveActivities: [
    {
      interactiveActivityId: "EwbInterAct", // ← Use real ID from your data
      interactiveActivitiesId: "EwbInterAct",
      interactiveActivityName: "The Emotion Spectrum",
      interactiveActivityNumber: 1,
      unit: 1,
      time: "25 min",
      ratings: 4.8,
      tags: "emotions,spectrum,self-awareness",
      image: "https://via.placeholder.com/300x169",
      keyOutcomes: "1.Identify and understand one's own emotions | 2.Ability to express your emotions in healthy ways | 3.Equip with skills to manage your emotions constructively | 4.Learn new words to describe emotions with greater nuance. | 5. Strengthen communication abilities",
      materialsRequired: "1.Large sheet of paper or chart paper | 2.Sticky notes or small paper slips | 3.Crayons, sketch pens, or markers | 4.Pens or pencils | 5.Tape, glue, or Blu tack | 6.Ruler or scale | 7.Mirror (optional, to see facial expressions) | 8.Open space for acting and moving | 9.Stickers or stars (optional, for decoration or rewards) | 10.Notebook or folder (optional, to keep your spectrum safe)",
      intro: "This interactive activity helps children recognize and express different emotions through the Emotion Spectrum - a special chart that shows how feelings can be light or strong.",
      processes: [
        {
          processId: "EpProc1",
          processName: "Meet the Emotion Spectrum!",
          processNumber: 1,
          image: "https://via.placeholder.com/500x300",
          senseiMessage: "Welcome, Feeling Explorer! Today, we'll make an Emotion Spectrum, a special chart that shows how feelings can be light or strong. Every feeling matters!",
          childMessage: "I'm excited to make my own Emotion Spectrum and learn about my feelings!",
          hint: "Your spectrum is like a rainbow of feelings from calm and soft ones to strong and powerful ones! There are no wrong answers; everyone feels things in their own way."
        },
        {
          processId: "EpProc2",
          processName: "Choose Your Emotions",
          processNumber: 2,
          image: "https://via.placeholder.com/500x300",
          senseiMessage: "Let's begin with five common emotions- Happy, Sad, Angry, Scared, and Surprised! These are the feelings we'll explore today.",
          childMessage: "I can think of times when I felt each of these emotions!",
          hint: "If you don't know what one means, think about a time you felt it, that will help you understand it better!"
        },
        {
          processId: "EpProc3",
          processName: "Place Your Emotions on the Spectrum",
          processNumber: 3,
          image: "https://via.placeholder.com/500x300",
          senseiMessage: "Now let's place our feelings on the spectrum! Some feelings are soft, and some are strong – let's see where they go.",
          childMessage: "I'll put each emotion where I think it belongs on my spectrum line!",
          hint: "There's no wrong spot. You can move your emotions later if you change your mind!"
        },
        {
          processId: "EpProc4",
          processName: "Act Out Emotions!",
          processNumber: 4,
          image: "https://via.placeholder.com/500x300",
          senseiMessage: "Now let's bring your Emotion Spectrum to life! Our faces and bodies can show how we feel — even without words!",
          childMessage: "I can show emotions with my face and body - that's fun!",
          hint: "You can use a mirror if you like! Look at your face and see how it changes with each feeling."
        },
        {
          processId: "EpProc5",
          processName: "Add More Words!",
          processNumber: 5,
          image: "https://via.placeholder.com/500x300",
          senseiMessage: "Wow, Feeling Explorer! Did you know that each feeling has many friends – other words that mean almost the same thing? Let's learn some new feeling words together!",
          childMessage: "I'm learning so many new words to describe how I feel!",
          hint: "Think of these words like the cousins or friends of your main emotions."
        },
        {
          processId: "EpProc6",
          processName: "Celebrate Your Spectrum",
          processNumber: 6,
          image: "https://via.placeholder.com/500x300",
          senseiMessage: "You did it, Feeling Explorer! You made your very own Emotion Spectrum! It shows how your feelings can be light or strong, and that every emotion is important.",
          childMessage: "I'm so proud of my Emotion Spectrum! I understand my feelings better now!",
          hint: "You can decorate your spectrum with stickers, drawings, or stars to make it extra special!"
        }
      ]
    }
  ],
  digitalActivities: [
    {
      digitalActivityId: "EwbDigi1",
      digitalActivityName: "Emotion Spectrum Quiz",
      unit: 1,
      time: "15 min",
      ratings: 4.5,
      tags: "quiz,emotions,game",
      image: "https://via.placeholder.com/300x169"
    }
  ]
};