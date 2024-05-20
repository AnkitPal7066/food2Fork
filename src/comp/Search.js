import React, { useState } from 'react';

export default function Search({setInputValue, inputValue}) {


    const handleSearch = () => {
        setInputValue(inputValue);
    }

    const handleChange = (e) => {
       setInputValue(e.target.value);
    }

    return (
        <div className="mb-5">
            <div className="flex items-center justify-center mt-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => handleChange(e)}
                    placeholder="Search..."
                    className="border w-96 border-gray-300 px-4 py-2 rounded-md mr-2 focus:outline-none focus:border-blue-500"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-6 py-2 rounded-md"
                >
                    Search
                </button>
            </div>
        </div>
    );
}
