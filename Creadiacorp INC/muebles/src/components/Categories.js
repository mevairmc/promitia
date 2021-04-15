//import Components
import CardCategory from "../components/CardCategory";


function Categories() {
  return (
    <div>
      <div className="category__container">
        {/*Iterar cada cateogoria*/}
        <CardCategory />
      </div>
      <div className="category__bar">

      </div>
    </div>
  )
}

export default Categories;