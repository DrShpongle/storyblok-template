'use client'
import React from 'react'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import { COMPONENTS } from '@/components/sb'

interface IStoryblokProviderProps {
  children: React.ReactNode | React.ReactNode[]
}

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_SB_PREVIEW_TOKEN,
  use: [apiPlugin],
  components: COMPONENTS,
  apiOptions: {
    region: 'eu',
  },
})

const StoryblokProvider: React.FunctionComponent<IStoryblokProviderProps> = ({
  children,
}) => {
  return children
}

export default StoryblokProvider
