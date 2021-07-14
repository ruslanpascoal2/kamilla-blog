const Prismic = require('@prismicio/client');

// Update your-repo-name with the name of your repository.
const apiEndpoint = 'https://kamilla-blog.cdn.prismic.io/api/v2'
export const Client = Prismic.client(apiEndpoint)