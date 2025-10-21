import React from 'react'
import { Heart } from 'iconsax-reactjs'
import { RainbowButton } from '.'

export const Header = () => {
  return (
    <div className="py-8 container m-auto">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-sm text-gray-400">
        <span className="flex items-center">
          Designed & built with
          <Heart variant="Bold" size={16} color="red" className="mx-1" />
          by
          <a
            className="ml-1 text-primary hover:underline"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Onimuxha"
          >
            Onimuxha
          </a>
        </span>
      </div>
      <div className="flex flex-col items-center my-36">
        <h1 className="text-4xl text-center md:text-6xl font-extrabold leading-tight text-white mb-6">
          PIKTOZA for <br className="hidden md:inline" />
          React & React Native
        </h1>

        <div className="flex-auto flex space-x-3 text-xs md:text-sm h-11 mt-7">
          {/* <button className="px-6 text-white transition-colors duration-150 bg-bg h-full rounded-full text-sm font-normal focus:shadow-outline border-2 border-border">
            piktoza-reactjs npm
          </button> */}
          {/* <RainbowButton>Get Started ✌️</RainbowButton> */}
          <div className="text-white flex justify-center items-center transition-colors duration-150 bg-bg h-full rounded-full text-sm font-normal focus:shadow-outline border-2 border-border">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.npmjs.com/package/iconsax-reactjs"
              className="border-r-2 h-full border-border px-4  flex items-center justify-center"
            >
              React
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.npmjs.com/package/iconsax-react-nativejs"
              className="h-full flex items-center justify-center px-4"
            >
              React Native
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
