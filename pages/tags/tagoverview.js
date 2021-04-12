import { getTags, getSingleTag, getPostsByTag } from '../../api/ghost_data';
import Layout1 from '../../components/layout1';
import Link from 'next/link';

export default function TagOverview({ tagObjects }) {
  return (
    <Layout1 _title="Tag Overview - Stories">
      <div className="my-10">
        <h2 className="py-1 mx-2 my-8 text-indigo-900 text-2xl font-bold">
          Tag Overview
        </h2>
        {tagObjects.map((tag) => (
          <div className="mb-10">
            <h2 className="py-1 mx-2 my-8 text-indigo-900 text-xl">
              {tag.posts.length} post{tag.posts.length > 1 ? 's' : ''} tagged
              with <span className="font-bold">{tag.tag.name}</span>
            </h2>
            <ul>
              {tag.posts.map((post) => (
                <li className="cursor-pointer py-4 bg-gray-100 hover:bg-gray-200 m-2 rounded-md border-gray-200 border-2">
                  <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
                    <div className="mx-10">
                      <h3 className="font-medium text-indigo-900">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-xs">
                        {new Intl.DateTimeFormat('default', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        }).format(new Date(post.published_at))}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout1>
  );
}

export async function getStaticProps() {
  let tagObjects = [];

  for (const _tag of await getTags()) {
    let _posts = (await getPostsByTag(_tag.slug)).sort((a, b) => {
      return a.published_at > b.published_at ? -1 : 1;
      return 0;
    });

    tagObjects.push({
      tag: _tag,
      posts: _posts,
    });
  }

  return {
    props: { tagObjects },
  };
}
