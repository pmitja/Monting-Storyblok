import { storyblokEditable } from '@storyblok/js'
import { StoryblokComponent } from './StoryblokComponent'

const HeaderMenu = ({ blok }: any) => (
  <div
    className="hidden items-center justify-end space-x-10 md:flex md:flex-1 lg:w-0"
    {...storyblokEditable({ blok })}
  >
    {blok.links.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
)
export default HeaderMenu
