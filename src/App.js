


function App() {



  const tec_front = [{ nombre: 'Angular', img: 'angular.svg' },
  { nombre: 'React', img: 'react.svg' }, { nombre: 'Tailwind', img: 'tailwind-css.svg' }];
  const tec_back = [{ nombre: 'Java', img: 'java.svg' }, { nombre: 'Nodejs', img: 'node-js.svg' }];
  const tec_bd = [{ nombre: 'Mongo', img: 'mongodb.svg' },
  { nombre: 'Firebase', img: 'firebase.svg' },
  { nombre: 'Oracle', img: 'oracle.svg' }];
  const tec_tools = [{ nombre: 'Git', img: 'git.svg' }];

  return (
    <div className="App rubik-font">
      <header className="App-header">


        <nav
          className="fixed top-0 z-10 block w-full max-w-full px-4 py-2 text-white bg-transparent  h-max bg-opacity-100 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <a href="#df"
              className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
              JuanK
            </a>
            <div className="flex items-center gap-4">
              <div className="hidden mr-4 lg:block">
                <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                  <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    <a href="#p" className="flex items-center">
                      Mis Proyectos
                    </a>
                  </li>
                  <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    <a href="#p" className="flex items-center">
                      Tecnologias
                    </a>
                  </li>
                  <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    <a href="#p" className="flex items-center">
                      Formacion y Exp
                    </a>
                  </li>
                  <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    <a href="#p" className="flex items-center">
                      Sobre mi
                    </a>
                  </li>
                </ul>
              </div>

              <button
                className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                type="button">
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor"
                    strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className='flex-col justify-center py-2 mb-10 mt-24'>
        {/* PRESENTACION*/}
        <section className='border-2 shadow-def m-9 rounded-xl shadow-secondary-100 min-h-[400px]'>
          <div className='flex flex-col p-3  justify-start items-center'>
            <img className='w-36 absolute rounded-3xl blur-lg -mt-20 -z-0' src={`${process.env.PUBLIC_URL}/FotoPresentacion.png`} alt='Foto de presentacion de Juan Camilo Blur'></img>
            <img className='w-36 rounded-3xl z-0 -mt-20' src={`${process.env.PUBLIC_URL}/FotoPresentacion.png`} alt='Foto de presentacion de Juan Camilo'></img>
            <h1 className='text-2xl text-secondary-200 font-bold mx-4 my-6 text-center '> &lt;/ Juan Camilo <br></br> Palacio Anacona /&gt;</h1>
            <h3 className='text-xl font-semibold italic mx-4 my-6 mb-2'>Desarrollador Web Full-Stack</h3>
            <p className='text-[18px] m-4'>Mi mision es aportar soluciones integras y confiables aportando mis conocimientos.</p>
            <div className='inline'>

              <button className=' mx-4 my-3 bg-secondary-300 text-sm rounded-2xl p-2 px-2 hover:scale-110 hover:bg-secondary-250 transition ease-in-out  duration-300'>
                <a className='flex' href={`https://github.com/JuankAnacona`} target="blank" >GitHub&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 128 128" id="github"><g fill="#181616"><path fillRule="evenodd" fill="white" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" clipRule="evenodd"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g></svg>
                </a>
              </button>

              <button className=' mx-4 mt-2 mb-6 text-sm bg-secondary-300 rounded-2xl p-2 px-2 hover:scale-110 hover:bg-secondary-250 transition ease-in-out  duration-300'>
                <a className='flex' href={`${process.env.PUBLIC_URL}/cvjuank.pdf`} download="cvjuank.pdf" >Descargar CV &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg></a>

              </button>
            </div>
          </div>
        </section>
        {/* PROYECTOS*/}
        <section className='border-2 shadow-def m-9 rounded-xl shadow-secondary-100 '>
          <div className='flex flex-col p-3 justify-start items-center'>
            <h1 className='text-2xl text-secondary-200 font-bold m-4 text-center  '>Mis proyectos </h1>
            <div id='cards-proyects'>
              {/* PROYECTO 1*/}
              <div href="#" className=" mx-4 my-6 flex flex-col items-center border  rounded-lg shadow md:flex-row md:max-w-xl border-gray-700 bg-secondary-700 hover:bg-secondary-650">
                <img className="object-cover w-full rounded-t-lg h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`${process.env.PUBLIC_URL}/Proyecto1.png`} alt="img_proyecto1" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Consultorio Odontologico</h5>
                  <p className="mb-3 font-normal text-white">Web encargada de gestionar y administrar los datos de los pacientes, empleados y consultas.</p>
                </div>

                <div id='etiquetas_techs' className='flex flex-wrap justify-center'>
                  <span
                    className="bg-white inline-flex text-primary py-0.5 px-3 items-center justify-between text-sm border-secondary-250 border rounded-full hover:bg-gray-gray1 mb-2 mr-2">
                    <img
                      alt="Icono de Angular" src={`${process.env.PUBLIC_URL}/icons/angular.svg`} decoding="async"
                      data-nimg="1" className="object-cover w-4 h-4 mr-1" loading="lazy"
                    />
                    <span className="lg:inline leading-5">Angular</span>
                  </span>
                  <span
                    className="bg-white inline-flex text-primary py-0.5 px-3 items-center justify-between text-sm border-secondary-250 border rounded-full hover:bg-gray-gray1 mb-2 mr-2">
                    <img
                      alt="Icono de Angular" src={`${process.env.PUBLIC_URL}/icons/firebase.svg`} decoding="async"
                      data-nimg="1" className="object-cover w-4 h-4 mr-1" loading="lazy"
                    />
                    <span className="lg:inline leading-5">Firebase</span>
                  </span>
                  <span
                    className="bg-white inline-flex text-primary py-0.5 px-3 items-center justify-between text-sm border-secondary-250 border rounded-full hover:bg-gray-gray1 mb-2 mr-2">
                    <img
                      alt="Icono de Angular" src={`${process.env.PUBLIC_URL}/icons/node-js.svg`} decoding="async"
                      data-nimg="1" className="object-cover w-4 h-4 mr-1" loading="lazy"
                    />
                    <span className="lg:inline leading-5">Nodejs</span>
                  </span>
                </div>
                <button className=' mx-4 my-3 bg-secondary-300 text-sm rounded-2xl p-2 px-2 hover:scale-110 hover:bg-secondary-250 transition ease-in-out  duration-300'>
                  <a className='flex' href={`https://github.com/JuankAnacona`} target="blank" >Repositorio&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 128 128" id="github"><g fill="#181616"><path fillRule="evenodd" fill="white" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" clipRule="evenodd"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g></svg>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className='border-2 shadow-def m-9 rounded-xl shadow-secondary-100 '>

          <h1 className='text-2xl text-secondary-200 font-bold m-4 text-center  '>Formacion Academica</h1>

          {/* Formacion*/}
          <ol className="relative ml-8  border-s mb-14  border-gray-700 ">
            <li className="mb-10 ms-6 mx-4">
              <span className="absolute flex items-center justify-center w-8 h-8  rounded-full -start-4 ring-4  ring-secondary-700 bg-secondary-300">
                <svg className='w-6' xmlns="http://www.w3.org/2000/svg" fill="white" data-name="Layer 1" viewBox="0 0 64 64" id="education"><path d="m59.28 18-27-8a1 1 0 0 0-.57 0l-27 8a1 1 0 0 0-.06 1.9L18 24.88V36a3 3 0 0 0 0 6h.16a14 14 0 0 0 27.68 0H46a3 3 0 0 0 0-6V24.88l4-1.48v2.78a3 3 0 0 0-1.15 4.9l-.74 1.47a1 1 0 1 0 1.79.9l.74-1.45a1.8 1.8 0 0 0 .72 0l.75 1.49a1 1 0 1 0 1.79-.9l-.74-1.47A3 3 0 0 0 52 26.18v-3.52l7.35-2.72a1 1 0 0 0-.06-1.9ZM18 40a1 1 0 0 1 0-2Zm26 0a12 12 0 0 1-24 0v-1.08a22.31 22.31 0 0 0 24 0Zm0-3.5a20.32 20.32 0 0 1-24 0v-.58a22.31 22.31 0 0 0 24 0Zm0-3a20.32 20.32 0 0 1-24 0v-7.88l11.65 4.32a1 1 0 0 0 .7 0L44 25.62Zm3 5.5a1 1 0 0 1-1 1v-2a1 1 0 0 1 1 1Zm4-9a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm-.17-9-18.67-3a1 1 0 0 0-.31 2L47 22.38l-15 5.55-23.84-8.82L32 12l23.84 7.06Z"></path><path d="M30 46v-1a1 1 0 0 0-2 0v1a4 4 0 0 0 8 0v-1a1 1 0 0 0-2 0v1a2 2 0 0 1-4 0Z"></path></svg>
              </span>
              <h3 className="font-medium leading-tight italic text-secondary-150 mb-2">FP Grado Medio</h3>
              <p className="text-sm">Sistemas MicroInformaticos y redes, 2020 - 2022 IES El Cañaveral </p>
            </li>
            <li className="ms-6 mx-4">
              <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4  ring-secondary-700 bg-secondary-300">
                <svg className='w-6' xmlns="http://www.w3.org/2000/svg" fill="white" data-name="Layer 1" viewBox="0 0 64 64" id="education"><path d="m59.28 18-27-8a1 1 0 0 0-.57 0l-27 8a1 1 0 0 0-.06 1.9L18 24.88V36a3 3 0 0 0 0 6h.16a14 14 0 0 0 27.68 0H46a3 3 0 0 0 0-6V24.88l4-1.48v2.78a3 3 0 0 0-1.15 4.9l-.74 1.47a1 1 0 1 0 1.79.9l.74-1.45a1.8 1.8 0 0 0 .72 0l.75 1.49a1 1 0 1 0 1.79-.9l-.74-1.47A3 3 0 0 0 52 26.18v-3.52l7.35-2.72a1 1 0 0 0-.06-1.9ZM18 40a1 1 0 0 1 0-2Zm26 0a12 12 0 0 1-24 0v-1.08a22.31 22.31 0 0 0 24 0Zm0-3.5a20.32 20.32 0 0 1-24 0v-.58a22.31 22.31 0 0 0 24 0Zm0-3a20.32 20.32 0 0 1-24 0v-7.88l11.65 4.32a1 1 0 0 0 .7 0L44 25.62Zm3 5.5a1 1 0 0 1-1 1v-2a1 1 0 0 1 1 1Zm4-9a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm-.17-9-18.67-3a1 1 0 0 0-.31 2L47 22.38l-15 5.55-23.84-8.82L32 12l23.84 7.06Z"></path><path d="M30 46v-1a1 1 0 0 0-2 0v1a4 4 0 0 0 8 0v-1a1 1 0 0 0-2 0v1a2 2 0 0 1-4 0Z"></path></svg>
              </span>
              <h3 className="font-medium leading-tight italic text-secondary-150 mb-2">FP Grado Superior</h3>
              <p className="text-sm">Desarrollo de Aplicaciones Web, 2022-2024 IES Alonso de Avellaneda</p>
            </li>
          </ol>

          {/* Experiencia*/}
          <h1 className='text-2xl text-secondary-200 font-bold m-4 text-center  '>Experiencia</h1>
          <ol className="relative ml-8  border-s mb-10  border-gray-700 ">
            <li className="mb-10 ms-6 mx-4">
              <span className="absolute flex items-center justify-center w-8 h-8  rounded-full -start-4 ring-4  ring-secondary-700 bg-secondary-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="work"><path fill="none" d="M0 0h24v24H0V0z"></path><path fill="white" d="M14 6V4h-4v2h4zM4 9v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1zm16-3c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"></path></svg>
              </span>
              <h3 className="font-medium italic leading-tight text-secondary-150 mb-2">Practicante HelpDesk L2</h3>
              <p className="text-sm">Soporte tecnico en remoto a usuarios en dominio 2022</p>
            </li>
            <li className="ms-6 mx-4">
              <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4  ring-secondary-700 bg-secondary-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="work"><path fill="none" d="M0 0h24v24H0V0z"></path><path fill="white" d="M14 6V4h-4v2h4zM4 9v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1zm16-3c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"></path></svg>
              </span>
              <h3 className="font-medium italic leading-tight text-secondary-150 mb-2">Experiencia 2</h3>
              <p className="text-sm">Resolviendo problemas</p>
            </li>
          </ol>

        </section>

        <section className='border-2 shadow-def m-9 rounded-xl shadow-secondary-100 '>

          <h1 className='text-2xl text-secondary-200 font-bold m-4 text-center  '>Tecnologias</h1>
          <h3 className='text-lg text-secondary-100 m-4 border-b-2 border-secondary-100 '>Frontend</h3>
          <div id='etiquetas_tec_front' className='flex flex-wrap flex-row justify-around mx-4 '>
            {tec_front.map((tecnologia) => {
              return (
                <span
                  className="bg-secondary-700 flex flex-col text-white py-0.5 px-3 basis-[30%] bas items-center justify-between text-sm border-secondary-250 border rounded-xl hover:bg-gray-gray1 mb-4 ">
                  <img
                    alt={`Icono de ${tecnologia.nombre} extraido de public`} src={`${process.env.PUBLIC_URL}/icons/${tecnologia.img}`} decoding="async"
                    data-nimg="1" className="object-cover w-6 h-6 my-3 " loading="lazy"
                  />
                  <span className=" leading-5 mb-2 text-xs lg:inline">{tecnologia.nombre}</span>
                </span>
              )
            })}
          </div>
          <h3 className='text-lg text-secondary-100 m-4 border-b-2 border-secondary-100 '>Backend</h3>
          <div id='etiquetas_tec_back' className='flex flex-wrap flex-row justify-around mx-4 '>
            {tec_back.map((tecnologia) => {
              return (
                <span
                  className="bg-secondary-700 flex flex-col text-white py-0.5 px-3 basis-[30%] bas items-center justify-between text-sm border-secondary-250 border rounded-xl hover:bg-gray-gray1 mb-4 ">
                  <img
                    alt={`Icono de ${tecnologia.nombre} extraido de public`} src={`${process.env.PUBLIC_URL}/icons/${tecnologia.img}`} decoding="async"
                    data-nimg="1" className="object-cover w-6 h-6 my-3 " loading="lazy"
                  />
                  <span className=" leading-5 mb-2 text-xs lg:inline">{tecnologia.nombre}</span>
                </span>
              )
            })}
          </div>
          <h3 className='text-lg text-secondary-100 m-4 border-b-2 border-secondary-100 '>Bases de Datos</h3>
          <div id='etiquetas_tec_front' className='flex flex-wrap flex-row justify-around mx-4 '>
            {tec_bd.map((tecnologia) => {
              return (
                <span
                  className="bg-secondary-700 flex flex-col text-white py-0.5 px-3 basis-[30%] bas items-center justify-between text-sm border-secondary-250 border rounded-xl hover:bg-gray-gray1 mb-4 ">
                  <img
                    alt={`Icono de ${tecnologia.nombre} extraido de public`} src={`${process.env.PUBLIC_URL}/icons/${tecnologia.img}`} decoding="async"
                    data-nimg="1" className="object-cover w-6 h-6 my-3 " loading="lazy"
                  />
                  <span className=" leading-5 mb-2 text-xs lg:inline">{tecnologia.nombre}</span>
                </span>
              )
            })}
          </div>
        </section>
        <section className='border-2 shadow-def m-9 rounded-xl shadow-secondary-100 '>

          <h1 className='text-2xl text-secondary-200 font-bold m-4 text-center  '>Idiomas</h1>

          {/*Idiomas*/}
          <ol className="relative ml-8  border-s mb-14  border-gray-700 ">
            <li className="mb-10 ms-6 mx-4">
              <span className="absolute flex items-center justify-center w-8 h-8  rounded-full -start-4 ring-4  ring-secondary-700 bg-secondary-300">
                <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="translate-language"><path fill="white" d="M7.01 10a.505.505 0 0 0 .405-.227.526.526 0 0 0 .055-.471c-.144-.396-.796-.396-.939 0l-.01.027a.504.504 0 0 0 .069.458.521.521 0 0 0 .42.213z"></path><path fill="white" d="M17.407 19.791a.496.496 0 0 0 .066-.452l-6.5-19A.5.5 0 0 0 10.5 0h-8A2.503 2.503 0 0 0 0 2.5v15C0 18.878 1.122 20 2.5 20H17a.5.5 0 0 0 .407-.209zM4.029 13.332l2.5-7c.142-.396.801-.396.942 0l2.5 7a.502.502 0 0 1-.302.639.503.503 0 0 1-.64-.302l-.834-2.336A.5.5 0 0 0 7.724 11H6.276a.5.5 0 0 0-.471.332l-.835 2.336a.504.504 0 0 1-.639.303.502.502 0 0 1-.302-.639zM16.312 12.626a.487.487 0 0 1 .151.185c.099.245.31.563.664.999a.499.499 0 0 0 .389.186h.016a.503.503 0 0 0 .392-.21c.476-.67.904-1.409 1.206-2.08a.503.503 0 0 0-.457-.706h-2.296a.5.5 0 0 0-.473.661l.253.741c.03.088.084.165.155.224z"></path><path fill="white" d="M21.5 4h-7.518a.5.5 0 0 0-.473.661l1.71 5c.07.203.26.339.473.339h.808a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-.695a.5.5 0 0 0-.478.354c-.303.989-.992 2.242-1.844 3.353a.5.5 0 0 0 .037.652 44.5 44.5 0 0 0 1.817 1.773.498.498 0 0 1 .031.705.512.512 0 0 1-.707.031c-.164-.15-.512-.473-.939-.888a.499.499 0 0 0-.822.52l.518 1.514A1.499 1.499 0 0 1 17 21h-4.25a.5.5 0 0 0-.468.675l.75 2A.5.5 0 0 0 13.5 24h8c1.378 0 2.5-1.122 2.5-2.5v-15C24 5.122 22.878 4 21.5 4z"></path></svg>
              </span>
              <h3 className="font-medium leading-tight  text-secondary-150 ">Español</h3>

            </li>
            <li className="ms-6 mx-4">
              <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4  ring-secondary-700 bg-secondary-300">
                <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="translate-language"><path fill="white" d="M7.01 10a.505.505 0 0 0 .405-.227.526.526 0 0 0 .055-.471c-.144-.396-.796-.396-.939 0l-.01.027a.504.504 0 0 0 .069.458.521.521 0 0 0 .42.213z"></path><path fill="white" d="M17.407 19.791a.496.496 0 0 0 .066-.452l-6.5-19A.5.5 0 0 0 10.5 0h-8A2.503 2.503 0 0 0 0 2.5v15C0 18.878 1.122 20 2.5 20H17a.5.5 0 0 0 .407-.209zM4.029 13.332l2.5-7c.142-.396.801-.396.942 0l2.5 7a.502.502 0 0 1-.302.639.503.503 0 0 1-.64-.302l-.834-2.336A.5.5 0 0 0 7.724 11H6.276a.5.5 0 0 0-.471.332l-.835 2.336a.504.504 0 0 1-.639.303.502.502 0 0 1-.302-.639zM16.312 12.626a.487.487 0 0 1 .151.185c.099.245.31.563.664.999a.499.499 0 0 0 .389.186h.016a.503.503 0 0 0 .392-.21c.476-.67.904-1.409 1.206-2.08a.503.503 0 0 0-.457-.706h-2.296a.5.5 0 0 0-.473.661l.253.741c.03.088.084.165.155.224z"></path><path fill="white" d="M21.5 4h-7.518a.5.5 0 0 0-.473.661l1.71 5c.07.203.26.339.473.339h.808a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-.695a.5.5 0 0 0-.478.354c-.303.989-.992 2.242-1.844 3.353a.5.5 0 0 0 .037.652 44.5 44.5 0 0 0 1.817 1.773.498.498 0 0 1 .031.705.512.512 0 0 1-.707.031c-.164-.15-.512-.473-.939-.888a.499.499 0 0 0-.822.52l.518 1.514A1.499 1.499 0 0 1 17 21h-4.25a.5.5 0 0 0-.468.675l.75 2A.5.5 0 0 0 13.5 24h8c1.378 0 2.5-1.122 2.5-2.5v-15C24 5.122 22.878 4 21.5 4z"></path></svg>
              </span>
              <h3 className="font-medium leading-tight  text-secondary-150 ">Ingles Intermedio</h3>

            </li>
          </ol>



        </section>
      </div>

    </div>
  );


}

export default App;
