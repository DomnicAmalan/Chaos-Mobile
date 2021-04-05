module.exports = {
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  },
  resolver: {
    blacklistRE: /#current-cloud-backend\/.*/,
  },
};
