import * as Font from "expo-font";

export const _loadResourcesAsync = async () => {
  return Promise.all([
    Font.loadAsync({
      "Arimo-Bold": require("../assets/fonts/Arimo-Bold.ttf"),
      "Arimo-Medium": require("../assets/fonts/Arimo-Medium.ttf"),
      "Arimo-Regular": require("../assets/fonts/Arimo-Regular.ttf"),
      "Arimo-SemiBold": require("../assets/fonts/Arimo-SemiBold.ttf"),
      "SF-Title": require("../assets/fonts/SFSportsNightNSUpright.ttf"),
      "SF-Title-Lined": require('../assets/fonts/SFSportsNight.ttf')
    }),
  ]);
};
