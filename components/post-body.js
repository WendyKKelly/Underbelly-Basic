import markdownStyles from './markdown-styles.module.css';

export default function PostBody({ content }) {
  return (
    <>
      <div className="body">
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <style jsx>
        {`
          .body {
            font-family: 'Raleway', sans-serif;
            color: #545454;
            line-height: 170%;
            text-indent: 1.5em;
            margin-bottom: 1.5em;
            padding: 1.5em 1.25em 2em;
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
