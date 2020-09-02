import DateFormater from '../components/date-formater';
import CoverImage from '../components/cover-image';
import Link from 'next/link';

export default function PostPreview({
  title,
  coverImage,
  date,
  description,
  author,
  slug,
}) {
  return (
    <>
      <div>
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
        <h3 className="title">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="text-lg mb-4">
          <DateFormater dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{description}</p>
      </div>
      <style jsx>
        {`
          .title {
            font-family: 'Alice', serif;
            font-size: 2.5em;
            color: #ec6f48;
            text-align: center;
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
          a {
            border-bottom: 0px solid white;
            color: #ec6f48;
            text-align: center;
            margin-left: 2vh;
            padding-bottom: 0.25em;
            text-decoration: none;
          }

          a:hover {
            background-image: none;
            background-position: bottom;
            background-repeat: repeat-x;
            background-size: 20%;
            border-bottom: 0;
            padding-bottom: 0.3em;
            text-decoration: none;
          }
          . body {
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
