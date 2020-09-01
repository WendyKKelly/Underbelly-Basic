import Link from 'next/link';
import '../components/header.style.css';

export default function Header() {
  return (
    <div className="title">
      <Link href="/stories">
        <a>Wild & Precious Stories</a>
      </Link>
    </div>
  );
}
