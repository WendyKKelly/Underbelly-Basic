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
      <div className="hero-image">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>

      <div>
        <div>
          <title>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="title">{title}</a>
            </Link>
          </title>
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
          .hero-image {
            text-align: center;
          }

          .title {
            font-family: 'Alice', serif;
            font-size: 2.5em;
            color: #ec6f48;
            text-align: center;
            margin-left: 2vh;
          }
          a {
            border-bottom: 0px solid white;
            color: #ec6f48;
            text-align: center;
            margin-left: 2vh;
            padding-bottom: 0.25em;
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
