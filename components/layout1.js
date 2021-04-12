import Head from 'next/head';

export default function Layout1({ children }) {
  return (
    <div>
      <main>
        <div
          id="content"
          className="container p-6 max-w-screen-lg mt-6 mx-auto"
        >
          {children}
        </div>
      </main>
    </div>
  );
}
