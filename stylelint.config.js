module.exports = {
  extends: ['stylelint-config-sass-guidelines'],
  plugins: ['stylelint-selector-bem-pattern', 'stylelint-scss'],
  rules: {
    'selector-class-pattern': null,
    'at-rule-disallowed-list': null,
    'plugin/selector-bem-pattern': {
      componentName: '[A-Z]+',
      componentSelectors: {
        initial: '^\\.{componentName}(?:-[a-z]+)?$',
        combined: '^\\.combined-{componentName}-[a-z]+$',
      },
      utilitySelectors: '^\\.util-[a-z]+$',
    },
    'selector-max-id': 2,
    'max-nesting-depth': 3,
    indentation: 2,
  },
}
