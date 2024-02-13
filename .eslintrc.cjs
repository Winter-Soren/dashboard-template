module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  "plugins": [
    "react",
    "react-hooks",
    "prettier"
  ],
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaVersion": 8,
    "requireConfigFile": false,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true
    }
  },
  "rules": {
    "import": 0,
    "max-len": 0,
    "no-alert": 0,
    "no-shadow": 0,
    "no-console": 0,
    "comma-dangle": 0,
    "react/jsx-key": 1,
    "import/no-cycle": 0,
    "no-return-assign": 0,
    "arrow-body-style": 1,
    "react/prop-types": 1,
    "consistent-return": 1,
    "no-param-reassign": 0,
    "react/display-name": 0,
    "no-use-before-define": 0,
    "no-underscore-dangle": 0,
    "react/button-has-type": 1,
    "react/no-children-prop": 0,
    "react/forbid-prop-types": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/react-in-jsx-scope": 0,
    "react/no-array-index-key": 0,
    "react/no-unused-prop-types": 1,
    "react-hooks/rules-of-hooks": 2,
    "react/require-default-props": 0,
    "react/no-unescaped-entities": 0,
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-curly-brace-presence": 0,
    "react/destructuring-assignment": 0,
    "import/no-extraneous-dependencies": 0,
    "no-unused-vars": [
      1,
      {
        "ignoreRestSiblings": false
      }
    ],
    "prefer-destructuring": [
      1,
      {
        "object": true,
        "array": false
      }
    ]
  }
}

