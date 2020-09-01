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
      <div>
        <div>
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div>
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
