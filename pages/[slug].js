import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import {getAllPagesWithSlug, getPostAndMorePosts, getPreviewPageBySlug} from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Container from "../components/atoms/container";
import Header from "../components/organisms/header";
import PostTitle from "../components/atoms/post-title";
import SectionSeparator from "../components/atoms/section-separator";
import Layout from "../components/template/layout";

export default function Pages({ page, preview,pages }) {
  const router = useRouter()

  if (!router.isFallback && !page) {
    console.log(page)
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview} pages={pages}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {page.title} | Next.js Page Example with {CMS_NAME}
                </title>
                {/*<meta property="og:image" content={post.coverImage.url} />*/}
              </Head>
            </article>
            <SectionSeparator />
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPreviewPageBySlug(params.slug)
  const allPages = await getAllPagesWithSlug()
  return {
    props: {
      preview,
      page: data ?? null,
      pages: allPages ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPages = await getAllPagesWithSlug()
  return {
    paths: allPages?.map(({ slug }) => `/${slug}`) ?? [],
    fallback: true,
  }
}
