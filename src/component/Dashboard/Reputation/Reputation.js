import React, { useEffect, useState } from 'react'

function Reputation() {

    const [reputationData, setReputationData] = useState({})
    const getReputation = async () => {

        fetch("https://theconvo.space/api/identity?address=ftnikhil.eth&apikey=CS7ywOwnAKForsFnBwdc2AFX6of2RBkmYBWlcAfU", {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                setReputationData(data)
            })
            .catch(err => {
                console.error(err);
            });


    }

    useEffect(() => {
        getReputation();
    }, []);

    return (
        <div>
            <h3 className="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2">Reputation</h3>
            <section class="text-gray-600 body-font">
                <div class="container py-4 mx-auto">
                    <div class="flex flex-wrap -m-4 text-center">
                        <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">

                                <h2 class="title-font font-medium text-3xl text-gray-900">{reputationData.score}</h2>
                                <p class="leading-relaxed">Total Reputation Score</p>
                            </div>
                        </div>


                        <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <h2 class="title-font font-medium text-3xl text-gray-900">{reputationData.txn.ethereumAge}</h2>
                                <p class="leading-relaxed">Age on Ethereum in Days</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">

                                <h2 class="title-font font-medium text-3xl text-gray-900">{reputationData.txn.ethereumGasSpend.slice(0, 5)}</h2>
                                <p class="leading-relaxed">Gas Spend On Ethereum </p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <h2 class="title-font font-medium text-3xl text-gray-900">{reputationData.txn.polygonAge}</h2>
                                <p class="leading-relaxed">Age on Polygon in Days</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">

                                <h2 class="title-font font-medium text-3xl text-gray-900">{reputationData.txn.polygonGasSpend.slice(0, 5)}</h2>
                                <p class="leading-relaxed">Gas Spend On Polygon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section class="text-gray-600 body-font">
                <div class="container  mx-auto">
                    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium">Authentic Cliche Forage</span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium">Kinfolk Chips Snackwave</span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium">Coloring Book Ethical</span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium">Typewriter Polaroid Cray</span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium">Pack Truffaut Blue</span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium">The Catcher In The Rye</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Reputation