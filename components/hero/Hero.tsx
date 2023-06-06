import { FunctionComponent } from 'react'
import { BlokComponentModel } from '../../models/blok-component.model'
import { SbBlokData, storyblokEditable } from '@storyblok/js'
import Image from 'next/image'
import Link from 'next/link'

interface HeroProps extends SbBlokData {
  title: string
  subtitle: string
  image: any
  button: any
  achievements: any
}
const Hero: FunctionComponent<BlokComponentModel<HeroProps>> = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="relative mx-auto flex max-w-screen-2xl flex-col-reverse py-16 lg:flex-col lg:pb-0 lg:pt-0">
        <div className="inset-y-0 right-0 top-0 z-0 mx-auto w-full max-w-xl px-4 md:px-0 lg:absolute lg:mx-0 lg:mb-0 lg:w-7/12 lg:max-w-full lg:pr-0 xl:px-0">
          <svg
            className="absolute left-0 hidden h-full -translate-x-1/2 transform  text-gray-100 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <Image
            className="h-56 w-full rounded object-cover shadow-lg md:h-96 lg:h-full lg:rounded-none lg:shadow-none"
            width={1260}
            height={750}
            src={blok.image.filename}
            alt={blok.image.alt}
          />
        </div>
        <div className="relative mx-auto flex w-full max-w-xl flex-col items-start px-4 md:px-0 lg:max-w-screen-xl lg:px-8">
          <div className="mb-16 lg:mb-32 lg:mt-40 lg:max-w-lg lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              {blok.title}
            </h2>
            <p className="mb-5 pr-5 text-base text-gray-700 md:text-lg">
              {blok.subtitle}.
            </p>
            <div className="flex items-center">
              {blok.button.map((button: any, index: number) => {
                if (button.primary) {
                  return (
                    <Link
                      key={index}
                      href="/"
                      className="focus:shadow-outline mr-6 inline-flex h-12 items-center justify-center rounded bg-red-700 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-red-900 focus:outline-none"
                    >
                      {button.text}
                    </Link>
                  )
                } else {
                  return (
                    <Link
                      key={index}
                      href="/"
                      aria-label=""
                      className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-red-700"
                    >
                      {button.text}
                    </Link>
                  )
                }
              })}
            </div>
            <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3">
              {blok.achievements.map((achievement: any, index: any) => {
                return (
                  <div
                    className="group flex flex-col justify-between rounded-sm bg-gray-100 p-2 shadow-md sm:p-4 lg:p-6"
                    key={index}
                  >
                    <h3 className="text-xl font-bold text-red-600 sm:text-3xl">
                      {achievement.number}+
                    </h3>

                    <div className=" border-t-2 border-gray-100 pt-4">
                      <p className="text-sm font-medium text-gray-900">
                        {achievement.text}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
