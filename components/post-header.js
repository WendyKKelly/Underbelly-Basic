import Avatar from '../components/avatar'
import DateFormater from '../components/date-formater'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
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
      p{
        font-family: 'Raleway', sans-serif;
      }

      `}
    </style>
  </>
  )
}
