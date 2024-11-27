import React from 'react'

const page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-pink-600 lg:w-1/3 lg:mb-0 mb-4">
      There is my some projects
      </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto text-pink-500 leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them man bun deep jianbing selfies heirloom.
      </p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
        <img
            alt="gallery"
            className="w-full object-cover h-full object-center block hover:border-pink-600 border-y-4"
            src="/images/pic-png.png"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
        <img
            alt="gallery"
            className="w-full object-cover h-full object-center block  hover:border-pink-600 border-y-4"
            src="/images/web.png"
          />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img
            alt="gallery"
            className="w-full h-full object-cover object-center block  hover:border-red-600 border-y-4"
            src="/images/ban.png"
            />
        </div>
        
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
            <img
            alt="gallery"
            className="w-full h-full object-cover object-center block  hover:border-pink-600 border-y-4"
            
            src="/images/port.png"
            />
          
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block  hover:border-pink-600 border-y-4"
            src="/images/count.png"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block  hover:border-pink-600 border-y-4"
            src="/images/random.png"
          />
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default page

