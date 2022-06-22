import sponsor from '../img/sponsor-logo.png';
import Distorcion from './Distorcion';

const Home = () => {
    
    return(
    <>
    {/* SPONSOR */}
    <div className="text">
            <h1>
                <span className="hideText">
                    tom&hill
                </span>
            </h1>
            <h2>duality</h2>
            <h3>
                <span className="hideText">
                    Collection 2022 <br /> duality
                </span>
            </h3>
            <p>
                <span className="hideText">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem explicabo voluptate itaque.
                </span>
            </p>
        </div>
        {/* SPONSOR */}
        <div className="sponsor">
            <img src={sponsor} alt="" />
            <p>By Miguel Ayllón</p>
        </div>
        {/* DISTORCION */}
        {/* la capa de lienzo donde vamos a cargar esas imágenes */}
        <Distorcion />
    </>
    )
}

export default Home
