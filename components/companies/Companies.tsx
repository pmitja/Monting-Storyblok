import { FunctionComponent } from 'react'
import { BlokComponentModel } from '../../models/blok-component.model'
import { SbBlokData, storyblokEditable } from '@storyblok/js'
import Image from 'next/image'

interface CompaniesProps extends SbBlokData {
  name: string
  logo: any
}
const Companies: FunctionComponent<BlokComponentModel<CompaniesProps>> = ({
  blok,
}) => {
  console.log(blok)
  return (
    <div
      {...storyblokEditable(blok)}
      className="flex w-screen justify-around bg-black py-4"
    >
      {blok.logo.map((image: any, index: number) => {
        return (
          <Image
            src={image.filename}
            alt="logo image"
            key={index}
            width={400}
            height={400}
            className="w-12 object-contain"
          />
        )
      })}
    </div>
  )
}

export default Companies
