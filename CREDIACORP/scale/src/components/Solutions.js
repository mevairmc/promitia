//styles
import './styles/solution.css'
//Components
import Retail from '../images/retail.svg'
import Document from '../images/document.svg'
import Apps from '../images/app.svg'
import Automatization from '../images/automatization.svg'

function Solutions(){
  return(
    <div className="solutions">
      <h6 className="solutions__tag">SOLUTIONS</h6>
      <h3 className="solutions__title">Use Cases</h3>
      <p className="solutions__description">Scale‘s AI platform has been used to create AI in nearly every industry.</p>
      <div className="solutions__cases">
        <div className="solutions__case">
          <img src={Retail} alt="retail" />
          <p>Retail & Ecommerce</p>
        </div>
        <div className="solutions__case">
          <img src={Automatization} alt="automatization" />
          <p>Automatization</p>
        </div>
        <div className="solutions__case">
          <img src={Document} alt="document" />
          <p>Document Processing</p>
        </div>
        <div className="solutions__case">
          <img src={Apps} alt="applications"/>
          <p>Applications Web & Mobile</p>
        </div>
      </div>
    </div>
  )
}

export default Solutions;