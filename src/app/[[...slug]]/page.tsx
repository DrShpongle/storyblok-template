import {
  ISbStoriesParams,
  ISbStoryData,
  StoryblokComponent,
  StoryblokStory,
} from '@storyblok/react/rsc'
// import StoryblokProvider from '@/components/StoryBlokProvider'

const isDraftModeEnabled = process.env.NEXT_PUBLIC_IS_PREVIEW === 'true'
export const dynamic = isDraftModeEnabled ? 'force-dynamic' : 'error'

export async function fetchStoryBySlug(
  slug?: string[]
): Promise<{ story: ISbStoryData }> {
  const contentVersion = isDraftModeEnabled ? 'draft' : 'published'

  // check StoryBlok cache documentation for more information
  const cv = new Date().getTime() / 1000

  const searchParamsData: ISbStoriesParams = {
    token: process.env.NEXT_PUBLIC_SB_PREVIEW_TOKEN,
    cv,
    version: contentVersion,
  }

  const searchParams = new URLSearchParams(
    searchParamsData as Record<string, string>
  )

  const { story } = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/${
      slug?.join('/') || ''
    }?${searchParams.toString()}`,
    {
      next: {
        tags: ['page'],
      },
    }
  ).then(res => res.json())

  return {
    story: story,
  }
}

type Props = {
  params: { slug?: string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

const Home = async ({ params }: Props) => {
  const correctPath = params.slug

  const { story } = await fetchStoryBySlug(correctPath)
  console.log({ story })

  if (!story) {
    return <div>404</div>
  }

  if (isDraftModeEnabled) {
    return (
      // <StoryblokProvider>
      <StoryblokStory story={story} />
      // </StoryblokProvider>
    )
  }

  return <StoryblokComponent blok={story.content} />
}

export default Home
