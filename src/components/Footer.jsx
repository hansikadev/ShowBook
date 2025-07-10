import React from 'react';
import Floatingparticle from './Floatingparticle';
import { BookOpenIcon, CommandLineIcon, GlobeAltIcon } from '@heroicons/react/24/solid'
import {Github} from 'lucide-react'


const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-900/95 backdrop-blur-2xl border-t border-t-gray-800 ">
      {/*floating particles*/}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
                {/*brand section*/}
                <div className='space-y-6 text-center sm:text-left'>
                    <div className='flex items-center space-x-2 justify-center sm:justify-start'>
                        <BookOpenIcon className='w-8 h-8 text-cyan-400' />
                        <span className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
                            BOOKSHOW
                        </span>
                    </div>
                    <p className='text-gray-400 text-sm'>
                        Your gateway to infinite worlds. Discover, read, and escape imto stories that matter!
                    </p>
                </div>
                {/*quick links section*/}
                <div className='space-y-4 text-center sm:text-left'>
                    <h3 className='text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                        Explore 
                    </h3>
                    <ul className='space-y-3'>
                        {['Trending', 'New Releases',  'Genres','Authors'].map((item) => (
                            <li key={item}> 
                            <a href="#" className='text-gray-400 hover:text-cyan-300 text-sm transition-colors flex items-center justify-center sm:justify-start group'>
                                <span className='w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity'/>
                                    {item}
                                
                            </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/*tech stack */}
                <div className='space-y-4 text-center sm:text-left'>
                    <h3 className='text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                        Powered by
                    </h3>
                    <div className='flex flex-wrap items-center justify-center sm:justify-start gap-3'>
                        {['React', 'Tailwind CSS', 'Vite', 'GoogleAPI'].map((tech) => (
                            <span key={tech} className='px-3 py-1.5 cursor-pointer rounded-full bg-gray-800/50 text-gray-300 text-sm backdrop-blur-sm hover:bg-cyan-400/10 hover:text-cyan-300 transition-all'>
                                {tech}
                            </span>
                        ))}
                    </div>
                        <div className='mt-4 space-y-2'>
                            <div className='flex items=center justify-center sm:justify-start space-x-2 text-gray-400'>
                                <CommandLineIcon className='w-5 h-5' />{
                                    <span className='text-sm'>
                                        Developer friendly API
                                    </span>
                                }
                            </div>
                            <div className='flex items=center justify-center sm:justify-start space-x-2 text-gray-400'>
                                <GlobeAltIcon className='w-5 h-5' />{
                                    <span className='text-sm'>
                                        Global Book Database 
                                    </span>
                                }
                            </div>
                        </div>
                </div>
                {/*social links*/}
                <div className='space-y-4 text-center sm:text-left'>
                    <h3 className='text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                        Connect
                    </h3>
                    <div className='flex justify-center sm:justify-start space-x-4'>
                                {[ 
                                    ['Github','hover:text-purple-300',Github],
                                    // The following icons must be imported or defined, otherwise remove or import them
                                    // ['Twitter','hover:text-cyan-300',Twitter],
                                    // ['Discord','hover:text-indigo-300',MessageSquare], 
                                    // ['Instagram','hover:text-pink-300',Instagram],
                                ].map(([platform,className,Icon]) => (
                                    <a key={platform} href="#" className={`text-gray-400 ${className} transition-colors hover:scale-110`}>
                                        <span className='sr-only'>{platform}</span>

                                        <Icon className='w-6 h-6 md:h-8 md:w-8' stroke='currentColor' />
                                    </a>
                                ))}
                    </div>
                </div>
            </div>
            {/* copyright */}
            <div className='mt-12 border-t border-gray-800 pt-8  text-center'>
                <p className='text-gray-500 text-sm'>
                    &copy; {new Date().getFullYear()} BOOKSHOW. All stories belong to their respective authors.
                </p>
                <p className='text-gray-500 text-sm mt-2'>
                    Powered by{' '} 
                    <a href="https://hexagondigitalservices.com/"
                    target='_blank' className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 hover:text-purple-400 transition-colors'>
                        Hexagon Digital Services
                    </a>
                </p>
                <div className='mt-2 flex flex-wrap justify-center space-x-4 text-gray-500 text-sm'>
                    <a href="#" className='hover:text-cyan-300 transition-colors'>Privacy</a>
                    <span>|</span>
                    <a href="#" className='hover:text-cyan-300 transition-colors'>Terms of Service</a>
                    <span>|</span>
                    <a href="#" className='hover:text-cyan-300 transition-colors'>Contact Us</a>

                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;


