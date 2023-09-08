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
          <h1 className='title-seccion-tres'>Encuentra lo que necesitas </h1>
          <div className='div-seccion-tres'>
            
            <div className='cont-img-uno'>
               <img className= 'imagen-uno' src = {imageone}></img>
               <h3>Potabilización</h3>
            </div>
            <div className='cont-img-dos'>
              <img className='imagen-dos'src ={imagetwo}></img>
              <h3>Construcción y Rehabilitación de Plantas de Tratamiento de Aguas Residuales</h3>
            </div>
            <div className='cont-img-tres'>
              <img className='imagen-tres' src = {imagethree}></img>
              <h3>Consultoría y capacitación</h3>
            </div>
            
          </div>
          <div className='div-contacto'>
            <h3>Aquí haz contacto</h3>
          </div>

          
        </div>
      </body>
    </>
  );
}

export default Home;
