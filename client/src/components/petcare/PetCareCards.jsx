import React from 'react'
import Link from 'antd/es/typography/Link'

const PetCareCards = ({Date, Title, Description}) => {
  return (
    <>
    <div className="dark:bg-gray-800 dark:text-gray-100 mb-10">
      <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-xl dark:bg-gray-900 bg-blue-100">
        <div className="flex items-center justify-between">
          <span className="text-sm dark:text-gray-400">{Date}</span> 
          {/* <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</a> */}
        </div>
        <div className="mt-3">
          <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Title {Title}</a>
          <p className="mt-2">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër. {Description} </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          {/* <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</a> */}
          <div>
            <a rel="noopener noreferrer" href="#" className="flex items-center">
              {/* <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" /> */}
              {/* <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span> */}
              <Link rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</Link>
            </a>
          </div>
        </div>
      </div>         
    </div>
      
    </>
  )
}

export default PetCareCards
