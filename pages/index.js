import { getAllPostsForHome,getAllPagesWithSlug } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Layout from "../components/template/layout";
import Container from "../components/atoms/container";
import Intro from "../components/organisms/intro";
import HeroPost from "../components/organisms/hero-post";
import MoreStories from "../components/organisms/more-stories";

export default function Index({ preview, allPosts,allPages }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview} pages={allPages}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>

          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  const allPages = (await getAllPagesWithSlug(preview)) ?? []
  return {
    props: { preview, allPosts,allPages },
  }
}
