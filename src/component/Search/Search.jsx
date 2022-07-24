import React, { useState } from 'react'

function Search() {

    const [address, setAddress] = useState("")

    return (<>

        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Get Details About Anonymous Web3 Public Addresses</h1>

                    <div className="flex w-full justify-center items-end">
                        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                            <input onChange={e => setAddress(e.target.value)} type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <a href={"/user/" + address} className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">Search</a>
                    </div>
                    <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra</p>

                </div>
            </div>
        </section>

    </>)
}

export default Search