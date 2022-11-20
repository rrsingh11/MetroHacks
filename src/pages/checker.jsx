import React from "react"
//import Hero from '../assets/hero.svg'
//import Feat from '../assets/feat.svg'
import { Link } from "react-router-dom";

export default function Checker() {

    return (
        <div className='md:mx-28 mx-4 pb-12'>

            <div className='md:grid md:grid-cols-2 items-center'>
                <div className=''>
                    <h1 className='text-3xl md:text-5xl'>Our Purpose</h1>
                    <p className='text-xl py-4 tracking-wider text-justify'>In today’s world, there are many technological advancements in the medical field. Doctors have found ways
                        to deal with diseases and provides effective solutions. However, it is very hard for patients to locate hospitals near them that provide the necessary resources, especially
                        in emergencies. MedCheck is a web app that is designed to show the available resources at the nearby hospital(s) within the perimeter of the user's location. The user can use filters
                        to find the hospital that suits their desired needs. They can view data such as how many units are left, approximate amount of patients that can be served, and more.

                        Click below to get started!</p>

                    <Link to="/items">
                        <button className='bg-primary py-2 px-8 rounded-md text-xl md:text-2xl text-white'>Get Started</button>
                    </Link>

                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img {/*src="./assets/hero.svg"*/} alt="img" width="450" height="450" />
                </div>
            </div>

            <div className='md:grid md:grid-cols-2 pt-4 items-center'>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img {/*src="./assets/feat.svg"*/} alt="img" width="450" height="450" />
                </div>
                <div className=''>
                    <h1 className='text-3xl md:text-5xl'>What else do we have</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider'>MedCheck is a web app where you can:
                    </p>
                    <ul className="text-xl">
                        <li className="list-disc">Find hospitals near your location</li>
                        <li className="list-disc">Look at approximate waiting time and doctor availability</li>
                        <li className="list-disc">Staff can update more information about their affiliated hospital</li>
                        <li className="list-disc">Check out necessary resources</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
