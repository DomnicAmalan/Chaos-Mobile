export const _loadResourcesAsync = async () => {
  return Promise.all([
    Font.loadAsync({
      ColabBol: require("./assets/fonts/ColabBol.otf"),
      SFSportsNightNSUpright: require("./assets/fonts/SFSportsNightNSUpright.ttf"),
    }),
  ]);
};