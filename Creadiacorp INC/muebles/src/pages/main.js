// Import libraries
// import styled from '@emotion/styled';
// Import components
import Categories from '../components/Categories';
import DesignInspiration from '../components/DesignInspiration';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Message from '../components/Message';
import Footer from '../components/Footer';

/*const ContainerMain = styled.div(props => ({
  display: 'flex',
  flexDirection: props.column && 'column'
}))*/



function Main(props) {
  return(
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <DesignInspiration />
      <Message />
      <Footer />
    </div>
  )
}

export default Main;