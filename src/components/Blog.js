import React from 'react'
import blogContent from '../BlogData'
import './style.ex.css'

const Blog = () => {
  return (
    <div>
    <section className='my-28  px-5' id='Blog'>
      <header className='text-2xl font-bold pt-10 mb-5'>
        <h2>Blog</h2>
      </header>
      <div className=''>
                    <div className="main-cont">
                        <section>
                            {/*  */}
                            {blogContent && blogContent.map((work) => (
                                <div className='cd-blog-container'>
                                    <div className="cd-blogpost-content">
                                        <h1 className="uppercase font-bold text-2xl pl-3 pt-2 flex">{work?.companyName}
                                        <span>
                                        
                                            {work?.link &&
                                                <div className='w-auto flex space-x-5 ml-2 mt-1x relative'>

                                                    <a href={work.link} target='_blank' rel='noreferrer'>
                                                        <img src='./images/icons/external-link.svg' alt='link to live website' width='24px' height='24px' />
                                                    </a>
                                                </div>
                                            }
                                        </span>
                                        </h1>

                                        <div class="timeline-content-info">
                                            <h5 className='text-sm' >{work.duration}</h5>
                                        </div>
                                        <div className='pl-2'>
                                            {work?.workDes && work.workDes.map((x) => (
                                                <h4 className='text-base pt-2'><em> <span className="text-2xl"></span> {x} </em></h4>
                                            ))}
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            ))}                        
                            
                        </section>
                    </div>
                </div>
    </section>
    </div>
  );
};

export default Blog;
