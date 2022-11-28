import React from 'react';

const ClientFeedback = () => {
    return (
        <div className='px-16 my-10 text-black bg-base-200 py-8'>
            <h5 className='text-center mb-6'>
                <span className='text-2xl font-semibold text-primary bg-neutral rounded-full px-4 py-1'>Our Testimonial</span>
            </h5>

            <h2 className='text-center font-bold text-2xl lg:text-4xl mb-6'>Clients Feedback</h2>

            <div className='lg:flex gap-4'>
                <div className="card w-full lg:w-96 bg-base-100 shadow-xl mb-2">
                    <div className="card-body m-auto" style={{ "text-align": "justify" }}>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, </p>
                    </div>
                    <div class="flex items-center px-8 pb-8">
                        <img class="w-10 h-10 rounded-full mr-4" src="https://v1.tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" />
                        <div class="text-sm">
                            <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                            <p class="text-gray-600">SELLING AGENTS</p>
                        </div>
                    </div>
                </div>
                <div className="card w-full lg:w-96 bg-base-100 shadow-xl mb-2">
                    <div className="card-body m-auto" style={{ "text-align": "justify" }}>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, </p>
                    </div>
                    <div class="flex items-center px-8 pb-8">
                        <img class="w-10 h-10 rounded-full mr-4" src="https://v1.tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" />
                        <div class="text-sm">
                            <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                            <p class="text-gray-600">SELLING AGENTS</p>
                        </div>
                    </div>
                </div>
                <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
                    <div className="card-body m-auto" style={{ "text-align": "justify" }}>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, </p>
                    </div>
                    <div class="flex items-center px-8 pb-8">
                        <img class="w-10 h-10 rounded-full mr-4" src="https://v1.tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" />
                        <div class="text-sm">
                            <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                            <p class="text-gray-600">SELLING AGENTS</p>
                        </div>
                    </div>
                </div>



            </div>
        </div >
    );
};

export default ClientFeedback;