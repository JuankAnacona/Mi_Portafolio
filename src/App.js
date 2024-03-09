
import './App.css';

function App() {





  return (
    <div className="App rubik-font">
      <header className="App-header">


      </header>

      <div className='flex-col justify-center p-2 my-10'>
        {/* PRESENTACION*/}
        <section className='border-2 shadow-def m-9 rounded-xl shadow-secondary-100 min-h-[500px]'>
          <div className='flex flex-col p-3  justify-start items-center'>
            <img className='w-36 rounded-3xl -mt-20' src={`${process.env.PUBLIC_URL}/FotoPresentacion.png`} alt='Foto de presentacion de Juan Camilo'></img>
            <h1 className='text-2xl text-secondary-200 font-bold mx-4 my-6 text-center '>Juan Camilo <br></br> Palacio Anacona</h1>
            <h3 className='text-xl font-semibold italic mx-4 my-6 mb-2'>Desarrollador Web Full-Stack</h3>
            <p className='text-[18px] m-4'>Mi mision es aportar soluciones integras y confiables aportando mis conocimientos.</p>
            <button className=' mx-4 my-6 bg-secondary-300 rounded-2xl p-3 px-4 hover:scale-110 hover:bg-secondary-250 transition ease-in-out  duration-300'><a className='flex' href={`${process.env.PUBLIC_URL}/cvjuank.pdf`} download="cvjuank.pdf" >Descargar CV
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg></a>

            </button>
          </div>
        </section>
        {/* PROYECTOS*/}
        <section className='border-2 shadow-def m-9 rounded-xl shadow-secondary-100 '>
          <div className='flex flex-col p-3 justify-start items-center'>
            <h1 className='text-2xl text-secondary-200 font-bold m-4 text-center border-b-2 '>Mis proyectos Importantes</h1>
            <div id='cards-proyects'>
              {/* PROYECTO 1*/}
              <div href="#" class=" mx-4 my-6 flex flex-col items-center border  rounded-lg shadow md:flex-row md:max-w-xl border-gray-700 bg-secondary-700 hover:bg-secondary-650">
                <img class="object-cover w-full rounded-t-lg h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`${process.env.PUBLIC_URL}/Proyecto1.png`} alt="img_proyecto1" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Consultorio Odontologico</h5>
                  <p class="mb-3 font-normal text-white">Web encargada de gestionar y administrar los datos de los pacientes, empleados y consultas.</p>
                </div>
                <div id='etiquetas_techs' className='flex flex-wrap justify-center'>
                  <span
                    class="bg-white inline-flex text-primary py-0.5 px-3 items-center justify-between text-sm border-secondary-250 border rounded-full hover:bg-gray-gray1 mb-2 mr-2">
                    <img
                      alt="Icono de Angular" src={`${process.env.PUBLIC_URL}/icons/angular.svg`} decoding="async"
                      data-nimg="1" class="object-cover w-4 h-4 mr-1" loading="lazy"
                      width="16" height="16" />
                    <span class="lg:inline leading-5">Angular</span>
                  </span>
                  <span
                    class="bg-white inline-flex text-primary py-0.5 px-3 items-center justify-between text-sm border-secondary-250 border rounded-full hover:bg-gray-gray1 mb-2 mr-2">
                    <img
                      alt="Icono de Angular" src={`${process.env.PUBLIC_URL}/icons/firebase.svg`} decoding="async"
                      data-nimg="1" class="object-cover w-4 h-4 mr-1" loading="lazy"
                      width="16" height="16" />
                    <span class="lg:inline leading-5">Firebase</span>
                  </span>
                  <span
                    class="bg-white inline-flex text-primary py-0.5 px-3 items-center justify-between text-sm border-secondary-250 border rounded-full hover:bg-gray-gray1 mb-2 mr-2">
                    <img
                      alt="Icono de Angular" src={`${process.env.PUBLIC_URL}/icons/node-js.svg`} decoding="async"
                      data-nimg="1" class="object-cover w-4 h-4 mr-1" loading="lazy"
                      width="16" />
                    <span class="lg:inline leading-5">Nodejs</span>
                  </span>
                </div>
              </div>

            </div>


          </div>

        </section>

        <section className='border-2 shadow-def m-9 rounded-xl shadow-secondary-100 '>

          <h1 className='text-2xl text-secondary-200 font-bold m-4 text-center  '>Formacion y Experiencia</h1>

          {/* Experiencia*/}
          <ol class="relative ml-8  border-s mb-5  border-gray-700 ">
            <li class="mb-10 ms-6">
              <span class="absolute flex items-center justify-center w-8 h-8  rounded-full -start-4 ring-4  ring-secondary-700 bg-secondary-300">
                <svg className='w-6' xmlns="http://www.w3.org/2000/svg" fill="white" data-name="Layer 1" viewBox="0 0 64 64" id="education"><path d="m59.28 18-27-8a1 1 0 0 0-.57 0l-27 8a1 1 0 0 0-.06 1.9L18 24.88V36a3 3 0 0 0 0 6h.16a14 14 0 0 0 27.68 0H46a3 3 0 0 0 0-6V24.88l4-1.48v2.78a3 3 0 0 0-1.15 4.9l-.74 1.47a1 1 0 1 0 1.79.9l.74-1.45a1.8 1.8 0 0 0 .72 0l.75 1.49a1 1 0 1 0 1.79-.9l-.74-1.47A3 3 0 0 0 52 26.18v-3.52l7.35-2.72a1 1 0 0 0-.06-1.9ZM18 40a1 1 0 0 1 0-2Zm26 0a12 12 0 0 1-24 0v-1.08a22.31 22.31 0 0 0 24 0Zm0-3.5a20.32 20.32 0 0 1-24 0v-.58a22.31 22.31 0 0 0 24 0Zm0-3a20.32 20.32 0 0 1-24 0v-7.88l11.65 4.32a1 1 0 0 0 .7 0L44 25.62Zm3 5.5a1 1 0 0 1-1 1v-2a1 1 0 0 1 1 1Zm4-9a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm-.17-9-18.67-3a1 1 0 0 0-.31 2L47 22.38l-15 5.55-23.84-8.82L32 12l23.84 7.06Z"></path><path d="M30 46v-1a1 1 0 0 0-2 0v1a4 4 0 0 0 8 0v-1a1 1 0 0 0-2 0v1a2 2 0 0 1-4 0Z"></path></svg>
              </span>
              <h3 class="font-medium leading-tight">FP Grado Medio</h3>
              <p class="text-sm">Sistemas MicroInformaticos y redes, 2020-2022 IES El Cañaveral </p>
            </li>
            <li class="ms-6">
              <span class="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4  ring-secondary-700 bg-secondary-300">
                <svg className='w-6' xmlns="http://www.w3.org/2000/svg" fill="white" data-name="Layer 1" viewBox="0 0 64 64" id="education"><path d="m59.28 18-27-8a1 1 0 0 0-.57 0l-27 8a1 1 0 0 0-.06 1.9L18 24.88V36a3 3 0 0 0 0 6h.16a14 14 0 0 0 27.68 0H46a3 3 0 0 0 0-6V24.88l4-1.48v2.78a3 3 0 0 0-1.15 4.9l-.74 1.47a1 1 0 1 0 1.79.9l.74-1.45a1.8 1.8 0 0 0 .72 0l.75 1.49a1 1 0 1 0 1.79-.9l-.74-1.47A3 3 0 0 0 52 26.18v-3.52l7.35-2.72a1 1 0 0 0-.06-1.9ZM18 40a1 1 0 0 1 0-2Zm26 0a12 12 0 0 1-24 0v-1.08a22.31 22.31 0 0 0 24 0Zm0-3.5a20.32 20.32 0 0 1-24 0v-.58a22.31 22.31 0 0 0 24 0Zm0-3a20.32 20.32 0 0 1-24 0v-7.88l11.65 4.32a1 1 0 0 0 .7 0L44 25.62Zm3 5.5a1 1 0 0 1-1 1v-2a1 1 0 0 1 1 1Zm4-9a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm-.17-9-18.67-3a1 1 0 0 0-.31 2L47 22.38l-15 5.55-23.84-8.82L32 12l23.84 7.06Z"></path><path d="M30 46v-1a1 1 0 0 0-2 0v1a4 4 0 0 0 8 0v-1a1 1 0 0 0-2 0v1a2 2 0 0 1-4 0Z"></path></svg>
              </span>
              <h3 class="font-medium leading-tight">FP Grado Superior</h3>
              <p class="text-sm">Desarrollo de Aplicaciones Web, 2022-2024 IES Alonso de Avellaneda</p>
            </li>
          </ol>




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
