import Container from '../components/atoms/container'
import MoreStories from '../components/organisms/more-stories'
import HeroPost from '../components/organisms/hero-post'
import Intro from '../components/organisms/intro'
import Layout from '../components/templates/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { ITEM_MENU } from '../lib/constants'
import Navbar from "../components/organisms/Navbar";
import Tabbar from "../components/organisms/Tabbar";
import useNavigation from "../hooks/useNavigation";

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const { currentRoute, setCurrentRoute } = useNavigation();

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
          <link rel='manifest' href='/manifest.json' />
        </Head>
        <Navbar
          navigationData={ITEM_MENU}
          currentRoute={currentRoute}
          setCurrentRoute={setCurrentRoute}
      />
        <Tabbar
            navigationData={ITEM_MENU}
            currentRoute={currentRoute}
            setCurrentRoute={setCurrentRoute}
        />

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
  return {
    props: { preview, allPosts },
  }
}
