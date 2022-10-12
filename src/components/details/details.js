import {useParams} from "react-router-dom";
import {useContext} from "react";
import {MyContext} from "../../context/my-context";
import './details.css'
const Details = () => {
    const {product} = useParams()
    const {details} = useContext(MyContext)

  return(
      <div>
          {
              details.map((elem,i) => {
                  return(
                      <div className={'details'}>
                          <div className={'details-main'}>
                              <div className={'details-left'}>
                                  <h5>{elem.strMeal}</h5>
                                  <img src={elem.strMealThumb} alt=""/>
                              </div>
                              <div className={'details-center'}>
                                  <h5>Ingredients</h5>
                                  <div className={'ingr-main'}>
                                      <div>
                                          <img src={`https://themealdb.com/images/ingredients/${elem.strIngredient1}.png`} alt=""/>
                                          <p>{elem.strIngredient1}</p>
                                      </div>
                                      <div>
                                          <img src={`https://themealdb.com/images/ingredients/${elem.strIngredient2}.png`} alt=""/>
                                          <p>{elem.strIngredient2}</p>
                                      </div>
                                      <div>
                                          <img src={`https://themealdb.com/images/ingredients/${elem.strIngredient3}.png`} alt=""/>
                                          <p>{elem.strIngredient3}</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className={'details-bottom'}>
                              <h5>Instructions</h5>
                              <p>{elem.strInstructions}</p>
                          </div>
                      </div>
                  )
              })
          }

      </div>
  )
}
export default Details