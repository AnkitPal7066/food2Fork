
import React, { useState, useEffect } from 'react';

export default function Bhero({inputValue}) {

    const [latest, setLatest] = useState([]);

    useEffect(() => {
        fetch(`https://forkify-api.herokuapp.com/api/search?q=${inputValue}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Process the JSON response data
                setLatest(data.recipes);
            })
            .catch(error => {
                // Handle any errors that occurred during the fetch operation
                console.error('Error fetching data:', error);
            });
    }, [inputValue]); // Empty dependency array means this effect runs once on component mount
    console.log(latest);
    return (
        <div className="flex flex-col gap-5">
            <div>
                <section className="text-gray-600 body-font shadow-lg rounded-xl border shadow-black">
                    <div className="container px-5 py-12 mx-auto">
                        <div className="flex flex-wrap -m-4 justify-center">
                            {
                                latest.map((ele, idx) => (
                                    <div key={idx} className="p-4 md:w-1/3">
                                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={ele.image_url} alt="blog" />
                                            <div className="p-6">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{ele.publisher}</h2>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{ele.title}</h1>
                                                <p className="leading-relaxed mb-3">Social rank: {ele.social_rank}</p>
                                                <div className="flex items-center flex-wrap ">
                                                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href={ele.source_url}>Learn More
                                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M5 12h14"></path>
                                                            <path d="M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </a>
                                                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>1.2K
                                                    </span>
                                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                        </svg>6
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
