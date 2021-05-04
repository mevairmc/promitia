//styles
import './styles/services.css'
//Components
import Retail from '../images/retail.svg'
import Document from '../images/document.svg'
import Apps from '../images/app.svg'
import Automatization from '../images/automatization.svg'

function Services(){

  return(
    <div className="services">
      <h6 className="services__tag">SERVICES</h6>
      <h3 className="services__title">Te brindamos</h3>
      <p className="services__description">Soluciones tecnológicas a la medida de tus necesidades.</p>
      <div className="services__cases">
        <div className="services__case">
          <img src={Retail} alt="retail" />
          <p>Web Applications</p>
        </div>
        <div className="services__case">
          <img src={Automatization} alt="automatization" />
          <p>Mobile Applications</p>
        </div>
        <div className="services__case">
          <img src={Document} alt="document" />
          <p>Analytics</p>
        </div>
        <div className="services__case">
          <img src={Apps} alt="applications"/>
          <p>Otras tecnologías</p>
        </div>
      </div>
    </div>
  )
}

export default Services;