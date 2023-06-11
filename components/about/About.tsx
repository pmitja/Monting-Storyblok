import { FunctionComponent } from 'react'
import { BlokComponentModel } from '../../models/blok-component.model'
import { SbBlokData, storyblokEditable } from '@storyblok/js'
import Image from 'next/image'
import Button from '../button/Button'
import { render } from 'storyblok-rich-text-react-renderer-ts'

interface AboutProps extends SbBlokData {
  text: string
  title: string
  list: any
  buttonText: string
  user: any
  image: any
}
const About: FunctionComponent<BlokComponentModel<AboutProps>> = ({ blok }) => {
  console.log(blok)
  return (
    <div {...storyblokEditable(blok)}>
      <div className="relative mx-auto flex max-w-screen-2xl flex-col gap-10 py-8 lg:flex-row lg:justify-between lg:py-20">
        <div className="relative mx-auto w-full max-w-xl px-4 lg:max-w-4xl">
          <Image
            width={500}
            height={500}
            src={blok.image.filename}
            alt="About image"
            className="w-full"
          />
          <div className="absolute bottom-0 right-0 flex gap-2 bg-gray-100 p-2">
            <Image
              width={50}
              height={50}
              alt="User image"
              src={blok.user[0].image.filename}
              className="h-9 w-9 rounded-full object-cover lg:h-10 lg:w-10"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900">
                {blok.user[0].name}
              </span>
              <span className="text-sm text-gray-900">
                {blok.user[0].position}
              </span>
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-xl flex-col px-4 align-middle lg:m-0">
          <h2 className="mb-5 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
            {blok.title}
          </h2>
          <p className="md:text-md mb-5 pr-5 text-base text-gray-700">
            {blok.text}
          </p>
          <div className="mb-5">
            {render(blok.list, {
              nodeResolvers: {
                list_item: (children) => {
                  return (
                    <li className="my-2 flex justify-start gap-1 rounded-md">
                      <span className="m-2 h-2 w-2 rounded-full bg-red-600"></span>
                      <div className="flex-grow px-2 font-medium">
                        {children}
                      </div>
                    </li>
                  )
                },
              },
            })}
          </div>
          <Button to="/">{blok.buttonText}</Button>
        </div>
      </div>
    </div>
  )
}

export default About
