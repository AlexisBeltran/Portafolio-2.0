import React, { useState } from 'react'

const Header = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"About",link:"/"},
      {name:"Projects",link:"/"},
      {name:"Contact",link:"/"}
    ];

    let [open,setOpen]=useState(false);
    
    return(
      <div className='w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
          <div className='font-bold text-2xl cursor-pointer flex items-center text-white'>
            <span className='text-3xl text-indigo-600 mr-1 pt-2'></span>
            Logo
          </div>
    
          <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
              <ion-icon name={open ? 'close':'menu'}></ion-icon>
          </div>

          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'} bg-navbar rounded`}>
            {
              Links.map((link)=>(
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                  <a className='cursor-pointer font-bold text-slate-100 hover:text-teal-300 text-base'>{link.name}</a>
                </li>
              ))
            }
          </ul>

          <div className='text-white font-bold'>Lenguaje</div>
        </div>
      </div>
    )
}

export default Header;