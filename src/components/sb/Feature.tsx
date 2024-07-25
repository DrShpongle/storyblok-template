import { storyblokEditable } from '@storyblok/react/rsc'
import { FeatureStoryblok } from '@/@types/component-types-sb'

type FeatureProps = {
  blok: FeatureStoryblok
}

const Feature = ({ blok }: FeatureProps) => (
  <div {...storyblokEditable(blok)}>{blok.name}</div>
)

export default Feature
