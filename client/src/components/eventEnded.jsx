import React from 'react'
import { Link } from 'react-router-dom'

const EventEnded = () => {
    return (
        <div className=" m-20">
            <div className="bg-white shadow-xl rounded-2xl p-8 text-center w-full justify-center">
                <h1 className="text-3xl font-bold text-blue-800/85 mb-4">🚀 KIST Hackfest 2025 Will Start Soon!</h1>
                <p className="text-gray-700 text-lg mb-6 text-justify lg:text-center md:text-center">
                    Thank you to everyone who registered. The event will be live soon.
                </p>
                <p className="text-muted-foreground text-sm ">
                    Please wait for the next event to get started .
                    Registration period is over for this event.
                </p>
                <Link to="/" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
                    Go Home
                </Link>
            </div>

        </div>
    )
}

export default EventEnded