// const convertColorToRGB = (colorName) => {
//   if (colorName === "WHITE") {
//     return "#FFFFFF";
//   } else if (colorName === "BLACK") {
//     return "#000000";
//   } else if (colorName === "RED") {
//     return "#FF0000";
//   } else if (colorName === "GREEN") {
//     return "#00FF00";
//   } else if (colorName === "BLUE") {
//     return "#0000FF";
//   }
// };

// ####################
/// 아래 와 같이 수정해서 사용
// ####################

const colorToRGBMap = {
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  RED: "#FF0000",
  GREEN: "#00FF00",
  BLUE: "#0000FF",
};

const convertColorToRGB = (colorName) => {
  return colorToRGBMap[colorName];
};

console.log(convertColorToRGB("WHITE"));
