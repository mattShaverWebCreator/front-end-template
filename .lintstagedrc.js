module.exports = {
  '*.js': ['eslint --ignore-pattern "!.*" --fix', 'git add'],
  '*.scss': ['stylelint --fix', 'git add'],
  '*.{json,md}': ['prettier --check --write', 'git add'],
  '{.eslintrc.js,.stylelintrc.js,.prettierrc.js}': () => 'npm-run-all test'
}
