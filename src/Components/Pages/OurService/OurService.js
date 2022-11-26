import React from 'react';
import buy from '../../../images/buy-home.png';
import rent from '../../../images/rent-home.png';
import sell from '../../../images/sell-home.png';

const OurService = () => {
    return (
        <div className='mt-6 px-16 m-auto py-16 text-black text-center bg-base-200'>
            <h6 className='text-primary text-xl mb-2'>Our Services</h6>
            <h2 className='text-4xl font-bold mb-4'>Our Main Focus</h2>
            <div className='grid grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={buy} alt="buy images" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Buy a home</h2>
                        <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                        <div className="card-actions">
                            <button className="text-base-300 hover:text-primary">Find A Home</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={rent} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Rent a home</h2>
                        <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>

                        <div className="card-actions">
                            <button className="text-base-300 hover:text-primary">Find A Home</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={sell} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Sell a home</h2>
                        <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                        <div className="card-actions">
                            <button className="text-base-300 hover:text-primary">Find A Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;