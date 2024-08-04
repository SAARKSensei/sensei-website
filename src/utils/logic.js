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
