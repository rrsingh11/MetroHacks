import { useState, React } from 'react'
import '../styles/DataUpdate.css'
export default function ResourceData() {
    return(
        <>
            <div className='heading--bar'>
                <h1>Admin Details</h1>
            </div>
            <form action="localhost:3000/" className='update--form'>
                <input type="text" name='' placeholder='Resource Name'/>
                <input type="text" name='' placeholder='Resource Quantity'/>
                <input type="text" name='' placeholder='Your Unique id'/>
                <input type="password" name='' placeholder='Password'/>
                <button>Submit</button>
            </form>
        </>
    )
}