

import Nav from './componentes/Layout/Nav'
import Presentacion from './componentes/Secciones/Presentacion';
import Proyectos from './componentes/Secciones/Proyectos/Proyectos';
import Tecnologias from './componentes/Secciones/Tecnologias/Tecnologias';
import FormyExp from './componentes/Secciones/FormacionYexp/FormYexp';
import Idiomas from './componentes/Secciones/Idiomas';
import SobreMi from './componentes/Secciones/SobreMi';
import Logros from './componentes/Secciones/Logros';
import HowIWork from './componentes/Secciones/HowIWork';
function App() {




  return (
    <div className="App rubik-font">
      <header className="App-header">
        <Nav></Nav>
      </header>

      <div className='max-w-[1400px] mx-auto px-4 py-2 mb-10 mt-24 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8'>
        {/* PRESENTACION (Fila 1 Izq) */}
        <Presentacion />
        
        {/* PROYECTOS (Fila 1 Der) */}
        <Proyectos />

        {/* TECNOLOGIAS (Fila 2 Izq) */}
        <Tecnologias />
        
        {/* FORMACION Y EXP (Fila 2 Der) */}
        <FormyExp />
        
        {/* SOBRE MI (Fila 3 Izq) */}
        <SobreMi />

        {/* IDIOMAS (Fila 3 Der) */}
        <Idiomas />

        {/* LOGROS (Fila 4 Full) */}
        <Logros />
        
        {/* HOW I WORK (Fila 5 Full) */}
        <HowIWork />
      </div>

    </div>
  );


}

export default App;
