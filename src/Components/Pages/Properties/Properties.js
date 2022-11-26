import React from 'react';
import images from "../../../images/app-1.jpg";
import { MdOutlineBedroomChild, MdOutlineBathroom } from 'react-icons/md';
import { AiOutlineSlackSquare } from 'react-icons/ai';
const Properties = () => {
    return (
        <div className='px-16 m-auto text-black mb-8'>
            <h6 className='text-primary mb-2 text-center'>Properties</h6>
            <h2 className='text-4xl font-bold mb-2 text-center'>Featured Listings</h2>
            <div className='flex flex-wrap gap-6'>
                <div class="max-w-sm rounded overflow-hidden shadow-lg pb-2">
                    <img class="w-full" src={images} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <h4 className='text-primary'><span className=' font-bold'>$34,900</span>/Month</h4>
                        <h3 className='text-2xl font-bold mb-2 hover:text-primary'>New Apartment Nice View</h3>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                        </p>
                    </div>
                    <div className='px-6 flex gap-2'>
                        <div>
                            <div className='flex items-center gap-1'>
                                <h6>3</h6>
                                <MdOutlineBedroomChild />
                            </div>
                            <h6>Bedrooms</h6>
                        </div>
                        <div className="border-r-2"></div>
                        <div>
                            <div className='flex items-center gap-1'>
                                <h6>2</h6>
                                <MdOutlineBathroom />
                            </div>
                            <h6>bathrooms</h6>
                        </div>
                        <div className="border-r-2"></div>
                        <div>
                            <div className='flex items-center gap-1'>
                                <h6>3450</h6>
                                <AiOutlineSlackSquare />
                            </div>
                            <h6>square Ft</h6>
                        </div>

                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg pb-2">
                    <img class="w-full" src={images} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <h4 className='text-primary'><span className=' font-bold'>$34,900</span>/Month</h4>
                        <h3 className='text-2xl font-bold mb-2 hover:text-primary'>New Apartment Nice View</h3>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                        </p>
                    </div>
                    <div className='px-6 flex gap-2'>
                        <div>
                            <div className='flex items-center gap-1'>
                                <h6>3</h6>
                                <MdOutlineBedroomChild />
                            </div>
                            <h6>Bedrooms</h6>
                        </div>
                        <div className="border-r-2"></div>
                        <div>
                            <div className='flex items-center gap-1'>
                                <h6>2</h6>
                                <MdOutlineBathroom />
                            </div>
                            <h6>bathrooms</h6>
                        </div>
                        <div className="border-r-2"></div>
                        <div>
                            <div className='flex items-center gap-1'>
                                <h6>3450</h6>
                                <AiOutlineSlackSquare />
                            </div>
                            <h6>square Ft</h6>
                        </div>

                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg pb-2">
                    <img class="w-full" src={images} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <h4 className='text-primary'><span className=' font-bold'>$34,900</span>/Month</h4>
                        <h3 className='text-2xl font-bold mb-2 hover:text-primary'>New Apartment Nice View</h3>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                        </p>
                    </div>
                    <div className='px-6 flex gap-2'>
                        <div>
                            <div className='flex items-center gap-1'>
                                <h6>3</h6>
                                <MdOutlineBedroomChild />
                            </div>
                            <h6>Bedrooms</h6>
                        </div>
                        <div className="border-r-2"></div>
                        <div>
                            <div className='flex items-center gap-1'>
                                <h6>2</h6>
                                <MdOutlineBathroom />
                            </div>
                            <h6>bathrooms</h6>
                        </div>
                        <div className="border-r-2"></div>
                        <div>
                            <div className='flex items-center gap-1'>
                                <h6>3450</h6>
                                <AiOutlineSlackSquare />
                            </div>
                            <h6>square Ft</h6>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Properties;