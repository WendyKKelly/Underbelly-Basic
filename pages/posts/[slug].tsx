import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import { useState, useEffect, useMemo } from 'react'
import { TinaCMS, useForm, usePlugin } from 'tinacms'
import { HtmlFieldPlugin, MarkdownFieldPlugin } from 'react-tinacms-editor'

const cms = new TinaCMS({ enabled: true })

cms.plugins.add(HtmlFieldPlugin)
cms.plugins.add(MarkdownFieldPlugin)

export default function Post({ post: initialPost, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !initialPost?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const sayHello = React.useCallback(() => {
    // get all of the "hello" plugins.
    const helloPlugins = cms.plugins.all(post.content)

    // iterate over all of the "hello" plugins
    helloPlugins.forEach(plugin => alert(`Hello, ${plugin.user}!`))
  }, [])
  const formConfig =
  {
  id: initialPost.slug, // a unique identifier for this instance of the form
  label: 'Blog Post', // name of the form to appear in the sidebar
  initialValues: initialPost, // populate the form with starting values
  onSubmit: values => {
    // do something with the data when the form is submitted
    alert(`Submitting ${values.title}`)
  },
  fields: [
    {
      name: "description",
      label: "Description",
      component: "html",
    },
    {
      name: 'body',
      label: 'Blog Body',
      component: 'markdown',
    },
  ],
}
const [post, form] = useForm(formConfig)
usePlugin(form)

  return (
    <Layout preview={preview}>
      <>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | The Underbelly Blog
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
      </>
    </Layout>

  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
        rawMarkdownBody: post.content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
