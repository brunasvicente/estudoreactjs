import './index.scss';

//Componentes
import Cabecalho from '../../components/cabecalho';
import Card from '../../components/card';


export default function App() {

  return (
    <div className="pagina-app">
      <Cabecalho/>
      <Card/>
    </div>
  );
}
