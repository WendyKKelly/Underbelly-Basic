import Avatar from '../components/avatar';
import DateFormater from '../components/date-formater';
import CoverImage from '../components/cover-image';
import Link from 'next/link';

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <>
      <div>
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>

      <div>
        <div>
          <h3>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover">{title}</a>
            </Link>
          </h3>
          <div>
            <DateFormater dateString={date} />
          </div>
        </div>
        <div>
          <p>{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
      <style jsx>
        {`
          .hover {
            font-family: 'Alice', serif;
            font-size: 2.5em;
            color: #ec6f48;
            text-align: center;
            margin-left: 2vh;
          }
          a {
            border-bottom: 0px solid #white;
            color: white;
            padding-bottom: 0em;
            text-decoration: none;
          }

          a:hover {
            background-image: none;
            background-position: bottom;
            background-repeat: repeat-x;
            background-size: 0%;
            border-bottom: 0;
            padding-bottom: 0em;
            text-decoration: none;
          }
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
