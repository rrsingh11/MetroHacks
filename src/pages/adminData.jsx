import { React } from 'react'
import '../styles/DataUpdate.css'
export default function ResourceData() {
    const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

    return(
        <>
            <div className='heading--bar'>
                <h1>Resource Details</h1>
            </div>
            <form method="post" action={`${apiEndpoint}/resource/quickupdate`} className='update--form'>
                <input type="text" name='hospitalName' placeholder='Hospital Name'/>
                <input type="text" name='resourceName' placeholder='Resource Name'/>
                <input type="number" name='available' placeholder='Resource Quantity'/>
                <input type="text" name='' placeholder='Your Unique id'/>
                <input type="password" name='' placeholder='Password'/>
                <button>Submit</button>
            </form>
        </>
    )
}