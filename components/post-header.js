import Avatar from '../components/avatar';
import DateFormater from '../components/date-formater';
import CoverImage from '../components/cover-image';
import PostTitle from '../components/post-title';

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle className="post-title">{title}</PostTitle>

      <div className="body">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormater dateString={date} />
        </div>
      </div>

      <style jsx>
        {`
          .post-title {
            font-family: 'Raleway', sans-serif;
            font-size: 1.5em;
            color: #8dbb85;
            float: right;
            margin-left: 2vh;
          }
          .body {
            font-family: 'Raleway', sans-serif;
            font-size: 1.5em;
            color: #8dbb85;
            float: right;
            margin-left: 2vh;
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
