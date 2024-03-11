

import Nav from './componentes/Layout/Nav'
import Presentacion from './componentes/Secciones/Presentacion';
import Proyectos from './componentes/Secciones/Proyectos/Proyectos';
import Tecnologias from './componentes/Secciones/Tecnologias/Tecnologias';
import FormyExp from './componentes/Secciones/FormacionYexp/FormYexp';
import Idiomas from './componentes/Secciones/Idiomas';
import SobreMi from './componentes/Secciones/SobreMi';
function App() {




  return (
    <div className="App rubik-font">
      <header className="App-header">
        <Nav></Nav>
      </header>

      <div className='flex-col justify-center py-2 mb-10 mt-24 md:grid md:grid-rows-[repeat(4, minmax(0, auto))] md:grid-cols-7'>
        {/* PRESENTACION*/}
        <Presentacion />
        {/* PROYECTOS*/}
        <Proyectos />


        {/* TECNOLOGIAS*/}
        <Tecnologias />
        {/* FORMACION Y EXP*/}

        <FormyExp />
        {/*IDIOMAS*/}
        <Idiomas />
        {/*SOBRE MI*/}
        <SobreMi />
      </div>

    </div>
  );


}

export default App;
