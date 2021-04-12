import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'https://underbellystories.club',
  key: '06f303648c25dc038f07928838',
  version: 'v4',
});

export async function getPosts() {
  return await api.posts
    .browse({
      include: 'tags,authors',
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
// retrieve all pages

export async function getPages() {
  return await api.pages
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });
}

// retrieve one single page

export async function getSinglePage(pageSlug) {
  return await api.pages
    .read({
      slug: pageSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
export async function getTags() {
  return await api.tags
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });
}

// retrieve a single tag

export async function getSingleTag(tagSlug) {
  return await api.tags
    .read({
      slug: tagSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getPostsByTag(tag) {
  const posts = await api.posts
    .browse({
      filter: `tag:${tag}`,
    })
    .catch((err) => {
      console.error(err);
    });
  return posts;
}
