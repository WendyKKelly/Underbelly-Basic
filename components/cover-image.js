import cn from 'classnames';
import Link from 'next/link';
import { cover } from 'polished';
import '../components/cover.style.css';

export default function CoverImage({ title, src, slug }) {
  const image = (
    <img src={src} alt={`Cover Image for ${title}`} className="image" />
  );
  return (
    <div>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
