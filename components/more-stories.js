import PostPreview from '../components/post-preview';

export default function MoreStories({ posts }) {
  return (
    <>
      <section>
        <h2>More Stories</h2>
        <div className="post">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              description={post.description}
            />
          ))}
        </div>
      </section>
      <style jsx>
        {`
          body {
            font-family: 'Raleway', sans-serif;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: 'Alice', serif;
            margin-top: 0;
          }
          p {
            font-family: 'Raleway', sans-serif;
          }
        `}
      </style>
    </>
  );
}
