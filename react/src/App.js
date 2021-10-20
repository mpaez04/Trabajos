import './App.css';
import Body from './Components/Body';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Button } from 'react-bootstrap';

function App() {
  const temas=["Tipos de componentes",
               "Contenedores",
               "Usar mas de un componente",
               "Funciones",
               "Props",
               "Prop-Types",
               "DefaultProps"]
  return (
    <div className="App">
      <Banner texto="Desarrollo de Aplicaciones para Dispositivos Móviles"/>
      <Header/>
      <Banner texto="8/Oct/2021"/>
      <Body
        practica="Práctica 1 - Unidad 2"
        temas={temas}
      />
      <Footer 
        pie={<p>Copyright &copy; Todos los derechos reservados </p>}
      />
    </div>
  );
}
export default App; 
