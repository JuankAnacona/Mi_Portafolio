

import Nav from './componentes/Layout/Nav'
import Presentacion from './componentes/Secciones/Presentacion';
import Proyectos from './componentes/Secciones/Proyectos/Proyectos';
import Tecnologias from './componentes/Secciones/Tecnologias/Tecnologias';
import FormyExp from './componentes/Secciones/FormacionYexp/FormYexp';
import Idiomas from './componentes/Secciones/Idiomas';
import SobreMi from './componentes/Secciones/SobreMi';
import Logros from './componentes/Secciones/Logros';
import HowIWork from './componentes/Secciones/HowIWork';
import TechTicker from './componentes/Layout/TechTicker';
import Liderazgo from './componentes/Secciones/Liderazgo';

function App() {




  return (
    <div className="App rubik-font">
      <header className="App-header">
        <Nav></Nav>
      </header>

      <div className='max-w-[1400px] mx-auto px-4 py-2 mb-10 mt-24 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start'>
        {/* COLUMNA IZQUIERDA (Desktop) */}
        <div className='lg:col-span-5 flex flex-col gap-6 lg:gap-8'>
          <Presentacion />
          <Tecnologias />
          <SobreMi />
          <Liderazgo />
          <Idiomas />
        </div>
        
        {/* COLUMNA DERECHA (Desktop) */}
        <div className='lg:col-span-7 flex flex-col gap-6 lg:gap-8'>
          <Proyectos />
          <FormyExp />
        </div>

        {/* SECCIONES ANCHURA COMPLETA */}
        <div className='lg:col-span-12 flex flex-col gap-6 lg:gap-8'>
          <Logros />
          <HowIWork />
        </div>
      </div>

      <TechTicker />
    </div>
  );


}

export default App;
