import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineWidth = 360;
const guidelineBaseHeight = 640;

export const scale = (size) => (width / guidelineWidth) * size;
export const scaleVertical = (size) => (height / guidelineBaseHeight) * size;
