import { getTags, getSingleTag, getPostsByTag } from '../../api/ghost_data';
import Link from 'next/link';
import { DrawerProvider } from '../../components/DrawerContext';

import Sticky from 'react-stickynode';
import NavBar from '../../components/NavBar';
import {
  GlobalStyle,
  ContentWrapper,
} from '../../components/AgencyDigital/agencyDigital.style';

import Head from 'next/head';
import Footer from '../../components/Footer';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme/agencyDigital';

export default function TagPage(tagData) {
  let _title = tagData.tag.name + ' - My blog';
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>The Underbelly</title>
          <meta name="theme-color" content="#FF825C" />
          <meta name="Description" content="Underbelly project" />
        </Head>

        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <NavBar />
            </DrawerProvider>
          </Sticky>

          <div className="my-10">
            <h2 className="py-1 mx-2 my-8  text-indigo-900 text-xl">
              {' '}
              <span className="font-bold">{tagData.tag.name}</span>
            </h2>
            <ul>
              {tagData.posts.map((post) => (
                <li>
                  <div className="cursor-pointer py-4 bg-gray-100 hover:bg-gray-200 m-2 rounded-md border-gray-200 border-2">
                    <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
                      <div className="mx-10">
                        <h3 className="font-medium text-indigo-900">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-xs">
                          {new Intl.DateTimeFormat('default', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          }).format(new Date(post.published_at))}
                        </p>
                        <p className="italic text-gray-700 text-xs">
                          (reading time: {post.reading_time} min.)
                        </p>
                      </div>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Footer />
        </ContentWrapper>
      </ThemeProvider>
    </>
  );
}

export async function getStaticPaths() {
  const tags = await getTags();
  const paths = tags.map((tag) => ({
    params: { slug: tag.slug },
  }));
  return { paths, fallback: false };
}

// Pass the tag slug over to the "getSingleTag" function
// and retrieve all associated posts

export async function getStaticProps({ params }) {
  const _tag = await getSingleTag(params.slug);
  let _posts = (await getPostsByTag(params.slug)).sort((a, b) => {
    return a.published_at > b.published_at ? -1 : 1;
  });
  return { props: { tag: _tag, posts: _posts } };
}
