import { storyblokEditable } from '@storyblok/js'
import { StoryblokComponent } from './StoryblokComponent'
import Link from 'next/link'

const MenuLink = ({ blok }: any) => (
  <Link href={blok.link.cached_url} {...storyblokEditable(blok)}>
    {blok.name}
  </Link>
)
export default MenuLink
