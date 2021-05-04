//Styles
import './styles/process.css'
//Components
import Test2 from '../images/test2.png'
import Test1 from '../images/test1.svg'

function Service(props){
  let style = null
  if(props.revert){
  style={
    "align-items": "flex-end",
    "text-align": "end"
  }}
  const html1 = () =>{ return <div className="process__description" style={style}>
        <div className="process__tag">
          <img src={Test2} alt="simbol process" />
          <h5>{props.tag}</h5>
        </div>
        <h2 className="process__title" style={style}>
          {props.title}
        </h2>
        <p className="process__content" >
          Retrieve human insights for search relevance, ecommerce,<br/>
          natural language processing, audio transcription, document<br/>
          processing and more. Operational excellence augmented by<br/>
          technology enables us to exceed demanding quality, cost,<br/>
          and latency requirements.
        </p>
        <div className="process__line"></div>
        <a className="process__more" href="#">Learn More</a>
      </div>
  };

  const html2 = () => { return <div className="process__picture">
        <img src={Test1} alt="" />
      </div>}

  if(!props.revert){
      return(
      <section className="process__container">
        { html1()} {html2()}
        </section>
  )}else{
    return(
      <section className="process__container">
        { html2()} {html1()}
      </section>
    )}
}

export default Service;
