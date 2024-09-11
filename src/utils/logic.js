import MentalHealthPic from "@/Images/mentalhealthpic.svg?url";
import SexEducationPic from "@/Images/sexeducationpic.svg?url";
import MoralScience from "@/Images/moralsciencepic.svg?url";
export const getRandomLightColor = () => {
  // Generate a random number in the range 128-255 for each color component
  const r = Math.floor(Math.random() * (255 - 128) + 128).toString(16);
  const g = Math.floor(Math.random() * (255 - 128) + 128).toString(16);
  const b = Math.floor(Math.random() * (255 - 128) + 128).toString(16);

  // Return the concatenated string as a hex color code
  return `#${r}${g}${b}`;
};
export const slug = (str) => {
  return str
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
};
export const getSubColour = (subjectName) => {
  switch (subjectName) {
    case "Emotional Well-Being":
      return {
        specificSubjectPicture: MentalHealthPic,
        percentage: "54%",
        innerSubjectDivColor: "#CEE2E5",
        innerBarColor: "#89DAE5",
      };
    case "Self and Social Awareness":
      return {
        specificSubjectPicture: SexEducationPic,
        percentage: "36%",
        innerSubjectDivColor: "#FFD9B2",
        innerBarColor: "#FF8B13",
      };
    case "Moral Guidance and Ethics":
      return {
        specificSubjectPicture: MoralScience,
        percentage: "71%",
        innerSubjectDivColor: "#FCEECA",
        innerBarColor: "#FCD97D",
      };
    default:
      return {
        specificSubjectPicture: MentalHealthPic,
        percentage: "54%",
        innerSubjectDivColor: "#CEE2E5",
        innerBarColor: "#89DAE5",
      };
  }
};
