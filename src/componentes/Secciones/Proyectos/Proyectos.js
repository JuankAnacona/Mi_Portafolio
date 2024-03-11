import CardProyecto from "./CardProyecto";
function Proyectos() {
    return (
        <section id="sec_proyectos" className='border shadow-def m-9   md:m-4  rounded-xl shadow-secondary-100 md:col-start-4 md:col-span-4 md:row-start-1 md:row-end-2'>
            <div className='flex flex-col p-3 justify-start items-center'>
                <h1 className='text-2xl text-secondary-200 font-bold m-4 mt-8 text-center  md:text-3xl'>Mis proyectos </h1>
                <div id='cards-proyects'>
                    {/* PROYECTO 1*/}
                    <CardProyecto />
                </div>
            </div>
        </section>
    );
};
export default Proyectos;