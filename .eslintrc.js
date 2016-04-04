module.exports = {
    "parser": "babel-eslint",
    "extends": [
      "airbnb",
      "plugin:import/errors"
    ],
    "plugins": [
        "react",
        "import"
    ],
    "rules": {
        "max-len": [2, 140, 2],
        "quote-props": [2, "consistent"],
        "react/sort-comp": 0,
    },
   "globals": {
       "describe": false,
       "it": false,
   }
};
