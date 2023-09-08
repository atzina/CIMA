import './Home.css';
import imageone from '../../assets/gota.jpg';
import imagetwo from '../../assets/platas2.jpg';
import imagethree from '../../assets/laboratorio.jpg';


function Home() {


  return (
    <>
      <div className='title'>
        <h1>Consultores</h1>
        <h1>Integrales en</h1>
        <h1>Materia de Agua y</h1> 
        <h1>Medio Ambiente</h1>
      </div>
      
      <body>
        <div className="vacio">
        </div>
        
        <div className='conteiners'>
          <div className='wave'>
            <div className='contenido'>
              <h2>Cotenido de abajo</h2>
              <p>somos una empresa con más de 20 años de experiencia en Saneamiento</p>
            </div>
          </div>
          <div className='div-seccion-dos'>
            <div className='cont-img-uno'>
               <img className= 'imagen-uno' src = {imageone}></img>
            </div>
            <div className='cont-img-dos'>
              <img className='imagen-dos'src ={imagetwo}></img>
            </div>
            <div className='cont-img-tres'>
              <img className='imagen-tres' src = {imagethree}></img>
            </div>
            
          </div>
          <div className='div-contacto'>
            <h1>Aquí haz contacto</h1>
          </div>

          
        </div>
      </body>
    </>
  );
}

export default Home;
