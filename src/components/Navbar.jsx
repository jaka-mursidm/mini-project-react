import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className="flex h-20 items-center justify-between">
                <a href="#"><img src="" alt="" />Belajar React</a>
                <div>
                    <a href="#">Beranda</a>
                    <a href="#">Perusahaan</a>
                    <a href="#">Tambah pekerjaan</a>
                </div>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar