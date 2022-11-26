import React from 'react';
import images from "../../../images/app-1.jpg";

const Properties = () => {
    return (
        <div className='px-16 m-auto text-black'>
            <h6 className='text-primary mb-2 text-center'>Properties</h6>
            <h2 className='text-4xl font-bold mb-2 text-center'>Featured Listings</h2>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={images} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>
        </div>
    );
};

export default Properties;