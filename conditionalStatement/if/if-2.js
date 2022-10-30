// const convertColorToRGB = (colorName) => {
//   if (colorName === "WHITE") {
//     printRGB(colorName);
//     //ETC func....
//     //ETC func....
//   } else if (colorName === "BLACK") {
//     printRGB(colorName);
//     //ETC func....
//   } else if (colorName === "RED") {
//     printRGB(colorName);
//     //ETC func....
//   } else if (colorName === "GREEN") {
//     printRGB(colorName);
//     //ETC func....
//     //ETC func....
//   } else if (colorName === "BLUE") {
//     printRGB(colorName);
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

const printRGB = (colorName) => console.log(colorToRGBMap[colorName]);

const workMap = {
  WHITE(colorName) {
    printRGB(colorName);
  },
  BLACK(colorName) {
    printRGB(colorName);
  },
};

const workByColor = (colorName) => {
  workMap[colorName](colorName);
};

workByColor("BLACK");
