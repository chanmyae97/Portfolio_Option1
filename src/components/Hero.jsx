/**
 * @copyright 2024 Aung Chan Myae
 * @license Apache-2.0
 */

/**
 * Components
 */

import { ButtonPrimary, ButtonOutline } from './Button'

import React from 'react'


const Hero = () => {
  return (
    <section 
      id="home" 
      className='pt-28 lg:pt-36'>
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img src="/gojo.jpg"
              width={40} 
              height={40}
              alt="Chan Myae portrait" 
              className="img-cover" />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping">
                </span>
              </span>
            Available for work
            </div>
        </div>
        <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
          Building Scalable Modern Website for the Future
        </h2>
        <div className="flex items-center gap-3 ">
          <ButtonPrimary 
            href='https://www.canva.com/design/DAGXr0zyff8/3HOQbhiptw86RDsT5Rropg/edit?utm_content=DAGXr0zyff8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
            label="Download CV"
            icon="download"
          />

          <ButtonOutline 
          href="#about"
          label="Scroll down"
          icon="arrow_downward"
          />
        </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img src="/Profile Photo.jpg"
             width={656}
             height={800}
             alt="Chan Myae" 
             className="w-full" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero
