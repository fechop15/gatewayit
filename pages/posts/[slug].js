import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import {getAllPagesWithSlug, getAllPostsWithSlug, getPostAndMorePosts} from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import Container from "../../components/atoms/container";
import Header from "../../components/organisms/header";
import PostTitle from "../../components/atoms/post-title";
import PostHeader from "../../components/organisms/post-header";
import PostBody from "../../components/organisms/post-body";
import SectionSeparator from "../../components/atoms/section-separator";
import MoreStories from "../../components/organisms/more-stories";
import Layout from "../../components/template/layout";

export default function Post({ post, morePosts, preview,allPages }) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview} pages={allPages}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={post.coverImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts && morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  const allPages = await getAllPagesWithSlug()

  return {
    props: {
      preview,
      post: data?.post ?? null,
      allPages: allPages ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  }
}
