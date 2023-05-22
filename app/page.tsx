import { getStory } from '../utils/storyblok'
import StoryblokBridge from '../components/StoryblokBridge'
import { StoryblokComponent } from '../components/StoryblokComponent'
import { draftMode } from 'next/headers'
import Navigation from '../components/navigation/Navigation'

async function fetchData() {
  const story = await getStory('home')
  return {
    story: story ?? false,
  }
}

async function fetchNavbar() {
  const config = await getStory('config')
  return {
    config: config ?? false,
  }
}

export default async function Home() {
  const { story } = await fetchData()
  const { config } = await fetchNavbar()
  const { isEnabled } = draftMode()
  const version = process.env.NEXT_PUBLIC_STORYBLOK_VERSION
  return (
    <main>
      <Navigation blok={config.content} />
      {isEnabled || version === 'draft' ? (
        <StoryblokBridge blok={story.content} />
      ) : (
        <StoryblokComponent blok={story.content} />
      )}
    </main>
  )
}
