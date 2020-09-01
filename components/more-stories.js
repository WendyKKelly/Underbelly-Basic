import PostPreview from '../components/post-preview';

export default function MoreStories({ posts }) {
  return (
    <>
      <section>
        <div className="stories">
          <h2>More Stories</h2>
        </div>
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
          .image {
            background-size: 60%;
            border-radius: 10%;
            box-shadow: 0 10px 6px -6px black;
            background-position-x: center right;
            background-position-y: top;
            text-align: center;

            background-repeat: no-repeat;
            min-height: 50vh;
            max-width: 70%;
          }
          @media only screen and (max-width: 1440px) {
            min-height: auto;
            background-size: 59%;
          }
          @media only screen and (max-width: 1024px) {
            background-size: 53%;
          }
          @media only screen and (max-width: 999px) {
            background: transparent;
            background-size: 0px;
            min-height: auto;
          }
          .stories {
            font-family: 'Alice', serif;
            font-size: 2.5em;
            color: #8dbb85;
          }
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
