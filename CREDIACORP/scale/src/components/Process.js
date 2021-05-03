//Styles
import './styles/process.css'
//Components
import Test2 from '../images/test2.png'
import Test1 from '../images/test1.svg'

function Process(){
  return(
    <section className="process__container">
      <div className="process__description" >
        <div className="process__tag">
          <img src={Test2} alt="simbol process" />
          <h5>ANNOTATE CONTENT & LANGUAGE</h5>
        </div>
        <h2 className="process__title">
          Gather Human Insight
        </h2>
        <p className="process__content">
          Retrieve human insights for search relevance, ecommerce,<br/>
          natural language processing, audio transcription, document<br/>
          processing and more. Operational excellence augmented by<br/>
          technology enables us to exceed demanding quality, cost,<br/>
          and latency requirements.
        </p>
        <div className="process__line"></div>
        <a className="process__more" href="#">Learn More</a>
      </div>
      <div className="process__picture">
        <img src={Test1} alt="" />
      </div>
    </section>
  )
}

export default Process;
