
import './App.css';

function App() {
  return (
    <div className="App rubik-font">
      <header className="App-header">


      </header>

      <div className='flex-col justify-center p-2'>
        <section className='border-2 shadow-md m-9 rounded-md shadow-secondary-100'>
          <div className='flex flex-col p-3 space-y-4 justify-start items-center h-[660px] '>
            <h1 className='text-2xl text-secondary-200 font-bold m-4 text-center'>Juan Camilo <br></br> Palacio Anacona</h1>
            <img className='w-36 rounded-full' src={`${process.env.PUBLIC_URL}/FotoPresentacion.jpg`} alt='Foto de presentacion de Juan Camilo'></img>
            <h3 className='text-xl font-semibold m-4'>Desarrollador Web Full-Stack</h3>
            <p className='m-4 text-[18px]'>Mi mision es aportar soluciones integras y confiables aportando mis conocimientos.</p>
          </div>
        </section>
        <section >
          <h1>Mis proyectos más importantes</h1>
          <div className='card'></div>
          <small>Puedes encontrar todos mis proyectos en mi GitHub</small>

        </section>
        <section >
          <h1>Contacto</h1>
          <div className='card'></div>
          <small>Puedes encontrar todos mis proyectos en mi GitHub</small>
        </section>
        <section >
          <h1>Tecnologias</h1>
          <div className='card'></div>
          <small>Puedes encontrar todos mis proyectos en mi GitHub</small>
        </section>
        <section >
          <h1>Idiomas</h1>
          <div className='card'></div>
          <small>Puedes encontrar todos mis proyectos en mi GitHub</small>
        </section>
      </div>

    </div>
  );
}

export default App;
