import logo from './logo.svg';
import './App.css';
import Component from './components/Component';
import { Export } from './components/Export';
import { Export1 } from './components/Export';
 /* Only Export kriye tyre import krti vakhte ane {} ma lakhvu n j name export krti vakhte apyu hoi aj same name import krti vakhte apvu */
 import { Export2 } from './components/Export';
 import { Export3 } from './components/Export';

 /* EXPORT DEFAULT MA AAPRE IMPORT KARTI VAKHTE KAI PN NAME API SAKAY EXPORT DEFAULT KRTI VALKHTE J NAME APYU HOI AJ SAME NAME APVU JARURI NATHI */

// import Helllo from './components/ExportDefault';


import ExportDefault from './components/ExportDefault';

import Hello from './components/Practice'



function App() {
  return (
    <div className="App">
    <Component />
    <Export /> 
    <Export1 />
    <Export2 />
    <Export3 />
    {/* <Helllo /> */}
    <ExportDefault />
    <Hello />


    </div>
  );
}

export default App;
