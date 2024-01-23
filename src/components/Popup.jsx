import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import "../Styles/popup.scss"
import { FaChevronDown } from "react-icons/fa";

const Popup = ({setPopNow,setUser}) => {
    const [mode,setMode] = useState('Basic');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [insta,setInsta] = useState('');
    const [youtube,setYoutube] = useState('');

    const checkNext = () =>{
        if(name!=='' && email!=='' && phone!=='')
            setMode('Contact');
    }
    const checkDone = () =>{
        if(name!=='' && email!=='' && phone!==''){
            const obj = {
                name : name,
                email: email,
                phone : phone,
                insta : insta,
                youtube : youtube
            }
            setUser(obj);
            setPopNow(false)
        }
    }
  return (
    <div className='popup'>
        <div className='popup-inner'>
            <div className='popup-head'>
                <h3 className='popup-head-heading'>Add New Profile</h3>
                <button className='popup-head-close' onClick={()=>setPopNow(false)}><RxCross1/></button>
            </div>

            <div className='popup-divider'></div>

            <div className='popup-middle'>
                <div className='popup-middle-choose'>
                    <div className='popup-middle-choose1'>
                        <div className='popup-middle-name'>Basic</div>
                        <div className={`${mode==='Basic'?'popup-middle-active':'popup-middle-non-active'}`}></div>
                    </div>
                    <div className='popup-middle-choose1'>
                        <div className='popup-middle-name'>Contact</div>
                        <div className={`${mode!=='Basic'?'popup-middle-active':'popup-middle-non-active'}`}></div>
                    </div>
                </div>
                <div className='popup-middle-form'>
                    {mode==='Basic' && <>
                        <label>Enter Name*</label>
                        <div>
                            <input 
                                placeholder='Eg. John Doe'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </>}
                    {mode==='Basic' && <>
                        <label>Enter Email*</label>
                        <div> 
                            <input 
                                placeholder='Eg. John@xyz.com'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span><FaChevronDown /></span>
                            
                        </div>
                        
                    </>}
                    {mode==='Basic' && <>
                        <label>Enter Phone*</label>
                        <div>
                            <input 
                                placeholder='Eg. 9123456789'
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <span><FaChevronDown /></span>
                        </div>
                        
                    </>}
                    {mode!=='Basic' && <>
                        <label>Instagram Link <span>(Optional)</span></label>
                        <div>
                            <input 
                            placeholder='Eg. ..instagram.com/username'
                            onChange={(e) => setInsta(e.target.value)}
                        />
                        </div>
                        
                    </>}
                    {mode!=='Basic' && <>
                        <label>Youtube Link <span>(Optional)</span></label>
                        <div>
                            <input 
                            placeholder='Eg. ..youtube/username'
                            onChange={(e) => setYoutube(e.target.value)}
                        />
                        </div>
                        
                    </>}
                </div>
            </div>


            <div className='popup-divider'></div>

            <div className='popup-end'>
                {mode==='Basic' ? <button onClick={()=>checkNext()} className='popup-end-blue'>Next</button> : <div>
                    <button onClick={()=>setMode('Basic')} className='popup-end-white'>Back</button>
                    <button onClick={()=>checkDone()} className='popup-end-blue'>Done</button>
                </div> }
            </div>
        </div>
    </div>
  )
}

export default Popup