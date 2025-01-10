import React from 'react'

const Navbar = () => {
  return (

    <nav className='bg-gradient-to-l from-indigo-400 to-indigo-800 w-full'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center justify-between text-white font-medium'>
                <a href='#'><img src='' alt='' />Belajar React</a>
                <div>
                    <a href='#Beranda' className='hover:text-indigo-500 duration-75'>Beranda</a>
                    <a href='#Perusahaan' className='hover:text-indigo-500 mx-4 duration-75'>Perusahaan</a>
                    <a href="#">Tambah pekerjaan</a>
                </div>

            </div>
        </div>
    </nav>
  )
}

export default Navbar