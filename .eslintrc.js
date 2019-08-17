module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    // 'airbnb'
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-console': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn' // Checks effect
  }
};
