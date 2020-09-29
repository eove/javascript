module.exports = {
  extends: ["@react-native-community", "eslint-config-prettier"],
  rules: {
    "no-shadow": "off",
    "consistent-this": ["error", "self"],
    "react/no-did-update-set-state": "off",
    "react/react/no-did-mount-set-state": "off",
    "prettier/prettier": 0,
  },
};
