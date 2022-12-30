module.exports = {
  '*.{js,yml,md,json}': ['eslint --fix', 'prettier --write'],
  '*.tf': filenames => filenames.map(filename => `terraform fmt '${filename}'`),
};
