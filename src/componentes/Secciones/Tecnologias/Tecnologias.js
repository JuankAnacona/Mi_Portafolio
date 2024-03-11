function Tecnologias() {

    const techs = [[{ nombre: 'Angular', img: 'angular.svg' },
    { nombre: 'React', img: 'react.svg' }, { nombre: 'Tailwind', img: 'tailwind-css.svg' }],
    [{ nombre: 'Java', img: 'java.svg' }, { nombre: 'Nodejs', img: 'node-js.svg' }],
    [{ nombre: 'Mongo', img: 'mongodb.svg' },
    { nombre: 'Firebase', img: 'firebase.svg' },
    { nombre: 'Oracle', img: 'oracle.svg' }],
    [{ nombre: 'Git', img: 'git.svg' }]
    ];
    return (
        <section id="sec_tecnologias" className='border shadow-def m-9 md:m-4 rounded-xl shadow-secondary-100 md:col-start-1 md:col-end-4 md:row-start-2 md:row-end-3 '>

            <h1 className='text-2xl text-secondary-200 font-bold m-4 mt-8 text-center  md:text-3xl'>Tecnologias</h1>
            <h3 className='text-lg text-secondary-100 m-4 border-b-2 border-secondary-100 '>Frontend</h3>
            <div id='etiquetas_tec_front' className='flex flex-wrap flex-row justify-around mx-4 '>
                {techs[0].map((tecnologia) => {
                    return (
                        <span
                            className="bg-secondary-700 flex flex-col text-white py-0.5 px-3 basis-[30%] bas items-center justify-between text-sm border-secondary-250 border rounded-xl hover:bg-gray-gray1 mb-4 ">
                            <img
                                alt={`Icono de ${tecnologia.nombre} extraido de public`} src={`${process.env.PUBLIC_URL}/icons/${tecnologia.img}`} decoding="async"
                                data-nimg="1" className="object-cover w-6 h-6 my-3 md:w-16 md:h-16" loading="lazy"
                            />
                            <span className=" leading-5 mb-2 text-xs md:text-base lg:inline">{tecnologia.nombre}</span>
                        </span>
                    )
                })}
            </div>
            <h3 className='text-lg text-secondary-100 m-4 border-b-2 border-secondary-100 '>Backend</h3>
            <div id='etiquetas_tec_back' className='flex flex-wrap flex-row justify-around mx-4 '>
                {techs[1].map((tecnologia) => {
                    return (
                        <span
                            className="bg-secondary-700 flex flex-col text-white py-0.5 px-3 basis-[30%] bas items-center justify-between text-sm border-secondary-250 border rounded-xl hover:bg-gray-gray1 mb-4 ">
                            <img
                                alt={`Icono de ${tecnologia.nombre} extraido de public`} src={`${process.env.PUBLIC_URL}/icons/${tecnologia.img}`} decoding="async"
                                data-nimg="1" className="object-cover w-6 h-6 my-3 md:w-16 md:h-16 " loading="lazy"
                            />
                            <span className=" leading-5 mb-2 text-xs md:text-base lg:inline">{tecnologia.nombre}</span>
                        </span>
                    )
                })}
            </div>
            <h3 className='text-lg text-secondary-100 m-4 border-b-2 border-secondary-100 '>Bases de Datos</h3>
            <div id='etiquetas_tec_front' className='flex flex-wrap flex-row justify-around mx-4 '>
                {techs[2].map((tecnologia) => {
                    return (
                        <span
                            className="bg-secondary-700 flex flex-col text-white py-0.5 px-3 basis-[30%] bas items-center justify-between text-sm border-secondary-250 border rounded-xl hover:bg-gray-gray1 mb-4 ">
                            <img
                                alt={`Icono de ${tecnologia.nombre} extraido de public`} src={`${process.env.PUBLIC_URL}/icons/${tecnologia.img}`} decoding="async"
                                data-nimg="1" className="object-cover w-6 h-6 my-3  md:w-16 md:h-16 " loading="lazy"
                            />
                            <span className=" leading-5 mb-2 text-xs md:text-base lg:inline">{tecnologia.nombre}</span>
                        </span>
                    )
                })}
            </div>
        </section>)
};
export default Tecnologias;