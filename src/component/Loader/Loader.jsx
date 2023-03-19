import React from 'react'
import './loader.scss'
import { BsFillPatchQuestionFill } from 'react-icons/bs';
const Loader = () => {
    return (
        <div className='Loader'>
            <div className="icon">
                <BsFillPatchQuestionFill/>
            </div>
        </div>
    )
}

export default Loader
