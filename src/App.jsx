
import React from 'react'
const App = () => {
  const name = 'Jaka'; 
  const x = 10;
  const y =  5;
  const buah = ['Pisang','Jeruk','Semangka','Apel','Mangga'];
  const login = true;
  return (
    <>
      <h1 className='text-2xl'>Hello World!, My Name is {name}</h1>
      <p className='text-slate-500'>Learn React</p>
      <p> Hasil dari x + y adalah {x + y}</p>

      <h3 className='text-xl mt-3'>List buah - buahan :</h3>
      <ul>
        {buah.map((buah,index)=>(
          <li key={index}>{buah}</li>
        ))}
      </ul>

      <h3 className='text-xl mt-3'>{login ? 'Selamat datang member!' : 'Selamat datang tamu!'}</h3>
    </>
  
  );
}

export default App