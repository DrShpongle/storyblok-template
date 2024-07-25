import { storyblokEditable } from '@storyblok/react/rsc'
import { TeaserStoryblok } from '@/@types/component-types-sb'

type TeaserProps = {
  blok: TeaserStoryblok
}

const Teaser = ({ blok }: TeaserProps) => {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>
}

export default Teaser
