const path = require('path');

const BLOGS_PATH = path.resolve(__dirname, '../blog');
const DEFAULT_LANG = 'pt';

function getFileLanguageForSlug(fileName) {
  return fileName.split('.')[1] || DEFAULT_LANG;
}

const createFields = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const fileName = path.basename(node.fileAbsolutePath, `.mdx`);

    const postDirectoryPath = path.dirname(node.fileAbsolutePath);

    /* if it's translated, will be "index.<locale-prefix>" (e.g. index.en) */
    const isDefaultLanguage = fileName === 'index';
    const postLang = getFileLanguageForSlug(fileName);

    /* Gets the relative nested folder path */
    const postPath = path.relative(BLOGS_PATH, postDirectoryPath);
    const localePath = isDefaultLanguage ? '' : `${postLang}/`;
    const blogPostFolderPath = `/blog/${localePath}${postPath}`;

    createNodeField({
      node,
      name: `slug`,
      value: blogPostFolderPath,
    });

    /* lang is used to avoid showing twice a post which has translation */
    createNodeField({
      node,
      name: `lang`,
      value: postLang,
    });

    /* commonSlug is used to group translated versions of the same post */
    createNodeField({
      node,
      name: `commonSlug`,
      value: blogPostFolderPath,
    });
  }
};

module.exports = {
  createFields,
  BLOGS_PATH,
  DEFAULT_LANG,
};
