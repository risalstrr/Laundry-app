import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Group12 from "/public/Group12.svg";
import Group5 from "/public/Group5.svg";
import React, { useState } from 'react';
import Group from "/public/Group.png";
import Random from "/public/Random.svg"

export default function Home() {
  let [open, setOpen] = useState(false);
  return (
    <div className="relative font-Poppins">
      <div className='flex justify-center'>
      <Group12 className='absolute desktop:-top-24 desktop:w-[100%] tablet:w-[100%] desktop:left-[0%] tablet:-top-[280px] tablet:-left-0 mobile:-top-[330px] mobile:w-[105%]'/>
      <div className="absolute ">
        <section className="text-gray-600 body-font" style={{userSelect: 'auto'}}>
        <div className="container  py-24 mx-auto flex flex-wrap" style={{userSelect: 'auto'}}>
          <div className="flex flex-wrap  mt-auto mb-auto desktop:w-1/2 sm:w-2/3 content-start sm:pr-10" style={{userSelect: 'auto'}}>
                <div className="w-full mb-6" style={{ userSelect: 'auto' }}>
              <h4 className='text-white/70 mb-8'>Tentang Laundry App</h4>
              <h1 className="title-font font-extrabold text-5xl mb-8 text-white" style={{userSelect: 'auto'}}>Lorem Ipsum dolor sit amet</h1>
                  <div className="leading-relaxed text-black pr-14" style={{ userSelect: 'auto' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sagittis sed blandit est quis
                    tincidunt pellentesque fringilla consequat, diam. Turpis nulla penatibus sed tellus tincidunt erat pretium orci.
                    Nibh nullam nisl viverra fermentum.
                    Gravida quis elementum nisl mi, aliquet et pellentesque.
                  </div>
            </div>
            <div className="p-4 sm:w-1/2 desktop:w-1/4 w-1/2" style={{userSelect: 'auto'}}>
              <button className="flex mt-8 -ml-4 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg" style={{userSelect: 'auto'}}>Lihat video</button>
            </div>
            
              </div>
              <div className='bg-white/60 desktop:w-1/2 rounded-lg mt-20'>
              <div className="desktop:w-5/6 ml-10 sm:w-1/3 w-full rounded-lg overflow-hidden tablet:mt-4 sm:mt-0" style={{ userSelect: 'auto' }}>
            <Random className="object-cover object-center w-full h-full"  style={{userSelect: 'auto'}} />
          </div>
              </div>
              </div>
          </section>
          <div>
            <section className="text-gray-600 body-font" style={{userSelect: 'auto'}}>
        <div className="container px-5 py-24 mx-auto flex flex-wrap" style={{userSelect: 'auto'}}>
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto desktop:w-1/2 sm:w-2/3 content-start sm:pr-10" style={{userSelect: 'auto'}}>
            <div className="w-full sm:p-4 px-4 mb-6" style={{userSelect: 'auto'}}>
              <h1 className="title-font font-extrabold text-xl mb-2 text-white" style={{userSelect: 'auto'}}>LOREM IPSUM DOLOR SIT AMET</h1>
              <div className="leading-relaxed" style={{userSelect: 'auto'}}>Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
            </div>
            <div className="p-4 sm:w-1/2 desktop:w-1/4 w-1/2" style={{userSelect: 'auto'}}>
              <h2 className="title-font font-medium text-3xl text-gray-900" style={{userSelect: 'auto'}}>2.7K</h2>
              <p className="leading-relaxed" style={{userSelect: 'auto'}}>Users</p>
            </div>
            <div className="p-4 sm:w-1/2 desktop:w-1/4 w-1/2" style={{userSelect: 'auto'}}>
              <h2 className="title-font font-medium text-3xl text-gray-900" style={{userSelect: 'auto'}}>1.8K</h2>
              <p className="leading-relaxed" style={{userSelect: 'auto'}}>Subscribes</p>
            </div>
            <div className="p-4 sm:w-1/2 desktop:w-1/4 w-1/2" style={{userSelect: 'auto'}}>
              <h2 className="title-font font-medium text-3xl text-gray-900" style={{userSelect: 'auto'}}>35</h2>
              <p className="leading-relaxed" style={{userSelect: 'auto'}}>Downloads</p>
            </div>
            <div className="p-4 sm:w-1/2 desktop:w-1/4 w-1/2" style={{userSelect: 'auto'}}>
              <h2 className="title-font font-medium text-3xl text-gray-900" style={{userSelect: 'auto'}}>4</h2>
              <p className="leading-relaxed" style={{userSelect: 'auto'}}>Products</p>
            </div>
          </div>
          <div className="desktop:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0" style={{userSelect: 'auto'}}>
            <Group5 className="object-cover object-center w-full h-full"  style={{userSelect: 'auto'}} />
          </div>
        </div>
            </section>
            <div>
              <section className="text-gray-600 body-font" style={{userSelect: 'auto'}}>
        <div className="container px-5 py-24 mx-auto" style={{userSelect: 'auto'}}>
          <div className="flex flex-wrap w-full mb-20" style={{userSelect: 'auto'}}>
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0" style={{userSelect: 'auto'}}>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{userSelect: 'auto'}}>Pitchfork Kickstarter Taxidermy</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" style={{userSelect: 'auto'}} />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500" style={{userSelect: 'auto'}}>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                  </div>
                  
          <div className="flex flex-wrap -m-4" style={{userSelect: 'auto'}}>
            <div className="xl:w-1/4 md:w-1/2 p-4" style={{userSelect: 'auto'}}>
              <div className="bg-gray-100 p-6 rounded-lg" style={{userSelect: 'auto'}}>
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/600x300" alt="content" style={{userSelect: 'auto'}} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font" style={{userSelect: 'auto'}}>SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4" style={{userSelect: 'auto'}}>Chichen Itza</h2>
                <p className="leading-relaxed text-base" style={{userSelect: 'auto'}}>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
                    </div>
                    
            <div className="xl:w-1/4 md:w-1/2 p-4" style={{userSelect: 'auto'}}>
              <div className="bg-gray-100 p-6 rounded-lg" style={{userSelect: 'auto'}}>
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/600x300" alt="content" style={{userSelect: 'auto'}} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font" style={{userSelect: 'auto'}}>SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4" style={{userSelect: 'auto'}}>Colosseum Roma</h2>
                <p className="leading-relaxed text-base" style={{userSelect: 'auto'}}>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4" style={{userSelect: 'auto'}}>
              <div className="bg-gray-100 p-6 rounded-lg" style={{userSelect: 'auto'}}>
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/600x300" alt="content" style={{userSelect: 'auto'}} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font" style={{userSelect: 'auto'}}>SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4" style={{userSelect: 'auto'}}>Great Pyramid of Giza</h2>
                <p className="leading-relaxed text-base" style={{userSelect: 'auto'}}>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            
          </div>
        </div>
              </section>
              <div className="bg-[#7670F0] w-full h-32">
                LOREM IPSUM DOLOR SIT AMET
              </div>
              <div>
                <section className="text-gray-600 body-font" style={{userSelect: 'auto'}}>
        <div className="container px-5 py-24 mx-auto" style={{userSelect: 'auto'}}>
          <div className="flex flex-wrap w-full mb-20" style={{userSelect: 'auto'}}>
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0" style={{userSelect: 'auto'}}>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{userSelect: 'auto'}}>Pitchfork Kickstarter Taxidermy</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" style={{userSelect: 'auto'}} />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500" style={{userSelect: 'auto'}}>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
          <div className="flex flex-wrap -m-4" style={{userSelect: 'auto'}}>
            <div className="xl:w-1/4 md:w-1/2 p-4" style={{userSelect: 'auto'}}>
              <div className="bg-gray-100 p-6 rounded-lg" style={{userSelect: 'auto'}}>
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/600x300" alt="content" style={{userSelect: 'auto'}} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font" style={{userSelect: 'auto'}}>SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4" style={{userSelect: 'auto'}}>Chichen Itza</h2>
                <p className="leading-relaxed text-base" style={{userSelect: 'auto'}}>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4" style={{userSelect: 'auto'}}>
              <div className="bg-gray-100 p-6 rounded-lg" style={{userSelect: 'auto'}}>
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/600x300" alt="content" style={{userSelect: 'auto'}} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font" style={{userSelect: 'auto'}}>SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4" style={{userSelect: 'auto'}}>Colosseum Roma</h2>
                <p className="leading-relaxed text-base" style={{userSelect: 'auto'}}>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4" style={{userSelect: 'auto'}}>
              <div className="bg-gray-100 p-6 rounded-lg" style={{userSelect: 'auto'}}>
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/600x300" alt="content" style={{userSelect: 'auto'}} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font" style={{userSelect: 'auto'}}>SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4" style={{userSelect: 'auto'}}>Great Pyramid of Giza</h2>
                <p className="leading-relaxed text-base" style={{userSelect: 'auto'}}>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            
          </div>
        </div>
                </section>
                <div>
                  <section className="text-gray-600 body-font" style={{userSelect: 'auto'}}>
        <div className="container px-5 py-24 mx-auto" style={{userSelect: 'auto'}}>
          <div className="text-center mb-20" style={{userSelect: 'auto'}}>
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4" style={{userSelect: 'auto'}}>Raw Denim Heirloom Man Braid</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto" style={{userSelect: 'auto'}}>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
          </div>
          <div className="flex flex-wrap -m-4" style={{userSelect: 'auto'}}>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full" style={{userSelect: 'auto'}}>
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left" style={{userSelect: 'auto'}}>SHOOTING STARS</h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5" style={{userSelect: 'auto'}}>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>First Link
                </a>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>Second Link
                </a>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>Third Link
                </a>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>Fourth Link
                </a>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>Fifth Link
                </a>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full" style={{userSelect: 'auto'}}>
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left" style={{userSelect: 'auto'}}>THE 400 BLOWS</h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5" style={{userSelect: 'auto'}}>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>First Link
                </a>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>Second Link
                </a>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>Third Link
                </a>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>Fourth Link
                </a>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>Fifth Link
                </a>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full" style={{userSelect: 'auto'}}>
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left" style={{userSelect: 'auto'}}>THE CATALYZER</h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5" style={{userSelect: 'auto'}}>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>First Link
                </a>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>Second Link
                </a>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>Third Link
                </a>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>Fourth Link
                </a>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>Fifth Link
                </a>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full" style={{userSelect: 'auto'}}>
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left" style={{userSelect: 'auto'}}>NEPTUNE</h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5" style={{userSelect: 'auto'}}>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>First Link
                </a>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>Second Link
                </a>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>Third Link
                </a>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>Fourth Link
                </a>
                <a style={{userSelect: 'auto'}}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center" style={{userSelect: 'auto'}}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                      <path d="M20 6L9 17l-5-5" style={{userSelect: 'auto'}} />
                    </svg>
                  </span>Fifth Link
                </a>
              </nav>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" style={{userSelect: 'auto'}}>Button</button>
        </div>
      </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      
   
      {/* PEMBATASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS */}
    <div className="bg-white/60 backdrop-blur-md shadow pt-4 pl-10 pb-4 md:flex md:items-center md:justify-between fixed top-0 left-0 right-0">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>
      <div className='flex justify-between items-center '>
        <span className='font-bold text-lg text-[#596AFF] cursor-pointer'>
          Laundry App
        </span>
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
          
      </div>
      <ul className={`tablet:flex bg-white/90 backdrop-blur-xl shadow md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full desktop:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 ':'top-[-600px]'}`}>
        <li className='mx-8 my-6 md:my-0'>
          <a href='#' className='text-[#828282] text-base hover:text-[#596AFF] duration-300 '>Layanan</a>
        </li>
        <li className='mx-8 my-6 md:my-0'>
          <a href='#' className='text-[#828282] text-base hover:text-[#596AFF] duration-300 '>Tentang</a>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <button href='#' className='px-6 py-2 text-base text-[#596AFF] font-semibold rounded-lg border-2 border-[#596AFF] hover:text-white hover:bg-[#596AFF] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-[#596AFF] focus:ring-offset-2'>Login</button>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <button href='#' className='px-5 py-3 text-base text-white bg-[#596AFF] font-semibold rounded-lg '>Sign Up</button>
        </li>
        
      </ul>
      </div>
      </div>

  )
}
