export default function PostTitle({ children }) {
  return (
    <>
      <h1 className="post-title">{children}</h1>
      <style jsx>
        {`
          .post-title {
            font-family: 'Raleway', sans-serif;
            font-size: 2.5em;
            color: #8dbb85;
            text-align: center;
            margin-left: 2vh;
            padding-top: 0.8vh;
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
