import React from 'react';

const OurTeam = () => {
    return (
        <div className='px-16 text-black my-20 bg-base-200 py-8'>
            <div className='lg:flex flex-row'>
                <div className='lg:w-96 mb-2'>
                    <span className='text-2xl font-semibold text-primary bg-neutral rounded-full px-4 py-1 mb-2'>Our Team</span>

                    <h2 className='text-xl mb-2 mt-4'>Meet Experts of Behind Work</h2>
                    <p>
                        Tech Support Expert Team provides you with enterprise-level IT support, maintenance, and protection for your computer systems and network
                    </p>
                </div>
                <div className='mb-2'>
                    <div className='lg:flex gap-4'>
                        <div className="card w-64 bg-base-100 shadow-xl text-center mb-2">
                            <div className="card-body">
                                <img className='rounded-xl mx-auto' style={{ "width": "100%", "height": "160px", "justifyContent": "center" }} src="https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <h2 className="">Local Man</h2>
                                <p>Support Engineer</p>

                            </div>
                        </div>
                        <div className="card w-64 bg-base-100 shadow-xl text-center mb-2">
                            <div className="card-body">
                                <img className='rounded-xl mx-auto' style={{ "width": "100%", "height": "160px", "justifyContent": "center" }} src="https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <h2 className="">Local Man</h2>
                                <p>Support Engineer</p>

                            </div>
                        </div>
                        <div className="card w-64 bg-base-100 shadow-xl text-center mb-2">
                            <div className="card-body">
                                <img className='rounded-xl mx-auto' style={{ "width": "100%", "height": "160px", "justifyContent": "center" }} src="https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <h2 className="">Local Man</h2>
                                <p>Support Engineer</p>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurTeam;