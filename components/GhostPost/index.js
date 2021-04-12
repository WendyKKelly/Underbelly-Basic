const GhostPost = (props) => (
  <ul>
    {props.posts.map((post) => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);
