module.exports = {
  extends: ["@react-native-community", "eslint-config-prettier"],
  rules: {
    "no-shadow": "off",
    "consistent-this": ["error", "self"],
    "react/no-did-update-set-state": "off",
    "react/no-did-mount-set-state": "off",
    "react/prop-types": "error",
    "react-native/no-unused-styles": "error",
    "react-native/no-inline-styles": "error",
    "prettier/prettier": "off",
  },
};
