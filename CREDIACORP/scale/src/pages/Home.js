//Components
import Hero from '../components/Hero'
import Service from '../components/Service'
import Services from '../components/Services'
import Contact from '../components/ContactUs'


function Home() {

  const process1 = {
    revert:false,
    tag: "Ecommerce & ERP",
    title: "Web Applications",
  }
  const process2 = {
    revert:true,
    tag: "Android & IOs",
    title: "Mobile Applications",
  }
  const process3 = {
    revert:false,
    tag:"Machine Learning & IA",
    title: "Analytics",
  }
  const process4 = {
    revert:true,
    tag:"IOT, cloud, etc",
    title: "Otras Tecnologías",
  }
  return (
    <>
    <Hero/>
    <Services/>
    <Service {...process1} />
    <Service {...process2} />
    <Service {...process3} />
    <Service {...process4} />
    <Contact />
  </>
  );
}

export default Home;