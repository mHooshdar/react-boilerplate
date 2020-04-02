module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
  rules: {
    indentation: 2,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          '/^include/',
          '/^extend/',
          '/^mixin/',
          '/^if/',
          '/^else/',
          '/^function/',
          '/^return/',
          '/^for/',
          '/^each/',
        ],
      },
    ],
  },
};
