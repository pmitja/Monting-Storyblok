import PageStory from './page/PageStory'
import Grid from './grid/Grid'
import Feature from './feature/Feature'
import Teaser from './teaser/Teaser'
import { FunctionComponent } from 'react'
import { BlokComponentModel } from '../models/blok-component.model'
import Hero from './hero/Hero'
import Companies from './companies/Companies'

interface ComponentsMapProps {
  [key: string]: FunctionComponent<BlokComponentModel<any>>
}
export const ComponentsMap: ComponentsMapProps = {
  page: PageStory,
  grid: Grid,
  feature: Feature,
  teaser: Teaser,
  hero: Hero,
  companies: Companies,
  about: About,
}
