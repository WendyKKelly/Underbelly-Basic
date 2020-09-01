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
