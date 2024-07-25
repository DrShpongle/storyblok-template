import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc'
import { GridStoryblok } from '@/@types/component-types-sb'

type GridProps = {
  blok: GridStoryblok
}

const Grid = ({ blok }: GridProps) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.columns &&
        blok.columns.map(nestedBlok => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
  )
}

export default Grid
