
import './App.css';
import Tilt from 'react-parallax-tilt'
function App() {
  return (
    <div className="App bg-gray-900 h-screen relative overflow-hidden flex flex-col justify-center items-center">
      <div className='h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 animate-bounce '></div>
      <div className='h-35-r w-35-r bg-gradient-to-r from-blue-500 to-purple-400 rounded-full absolute right-2/3 -top-56 animate-bounce'></div>
      <div className='h-35-r w-35-r bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full absolute top-96 -left-20 animate-bounce '></div>
      <div className='h-35-r w-35-r bg-gradient-to-r from-amber-400 via-red-800 to-rose-900 rounded-full absolute top-96 left-2/4 animate-bounce    '></div>
      <Tilt>
      <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
        <form className='h-full flex flex-col justify-evenly items-center'>
          <div className="font-poppins text-white text-2xl tracking-wider ">KAYIT OL</div>
          <input type="text" placeholder="e-mail" className='input-text'/>
          <input type="password" placeholder="sifre" className='input-text '/>
          <input type="password" placeholder="sifreyi tekrarlayin" className='input-text '/>
          <div className="font-poppins text-white  tracking-wider ">Dogum Tarihi</div>
          <input type="date" className='input-text'/>
          <input type="submit" className='font-poppins cursor-pointer px-5 py-1 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80'></input>
          
        </form>
      </div>
      </Tilt>
    </div>
    

  );
}

export default App;
