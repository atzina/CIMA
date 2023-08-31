import './Home.css';
import Water from '../../assets/agua_grande.jpg';
import React,{ useState} from 'react';

function Home() {

  const[scrolling, setScrolling] = useState(false);

   // Función para manejar el evento de desplazamiento
   const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

      // Agregar el oyente de eventos cuando se monta el componente
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <h1>HOME</h1>
      <div className="background-image">
      <img className="img-agua" src={Water}></img>
      </div>
      <div className={`content ${scrolling ? 'scrolling' : ''}`}>
        <h2>Cotenido de abajo</h2>
      </div>
    </>
  );
}

export default Home;
