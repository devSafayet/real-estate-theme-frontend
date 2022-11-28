import React, { useState } from 'react';
import ApartmentsDetails from './ApartmentsDetails';
import './Apartment.css';

const ApartmentsPlan = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div className='text-black mb-16 px-16'>
            <h5 className='text-center mb-6'>
                <span className='text-2xl font-semibold text-primary bg-neutral rounded-full px-4 py-1'>Apartment Sketch</span>
            </h5>
            <h2 className='text-4xl font-bold text-center mb-4'>Apartments Plan</h2>
            <div>
                <div className="bloc-tabs flex flex-wrap md:text-lg text-sm gap-4 justify-center my-8 ">
                    <button className={toggleState === 1 ? "tabs tabs-boxed active-tabs" : "tabs tabs-boxed"}
                        onClick={() => toggleTab(1)}
                    >
                        The Studio
                    </button>
                    <button className={toggleState === 2 ? "tabs tabs-boxed active-tabs" : "tabs tabs-boxed"}
                        onClick={() => toggleTab(2)}
                    >
                        Deluxe Portion
                    </button>
                    <button
                        className={toggleState === 3 ? "tabs tabs-boxed active-tabs" : "tabs tabs-boxed"}
                        onClick={() => toggleTab(3)}
                    >
                        Penthouse
                    </button>
                    <button
                        className={toggleState === 4 ? "tabs tabs-boxed active-tabs" : "tabs tabs-boxed"}
                        onClick={() => toggleTab(4)}
                    >
                        Top Garden
                    </button>
                    <button
                        className={toggleState === 5 ? "tabs tabs-boxed active-tabs" : "tabs tabs-boxed"}
                        onClick={() => toggleTab(5)}
                    >
                        Double Height
                    </button>
                </div>
                <div className="content-tabs lg:flex">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >


                        <ApartmentsDetails />
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >


                        <ApartmentsDetails />
                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >


                        <ApartmentsDetails />
                    </div>
                    <div
                        className={toggleState === 4 ? "content  active-content" : "content"}
                    >


                        <ApartmentsDetails />
                    </div>
                    <div
                        className={toggleState === 5 ? "content  active-content" : "content"}
                    >


                        <ApartmentsDetails />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentsPlan;