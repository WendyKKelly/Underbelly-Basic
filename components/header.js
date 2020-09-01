import Link from 'next/link';
import '../components/header.style.css';
export default function Header() {
  return (
    <div className="stories">
      <Link href="/stories">
        <a className="wild">Wild & Precious Stories</a>
      </Link>
    </div>
  );
}
