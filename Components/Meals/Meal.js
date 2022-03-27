import { Fragment } from "react"
import MealsList from "./MealsList"
import MealsSummary from "./MealsSummarry"

const Meals = ()=>{
    return <Fragment>
        <MealsSummary/>
        <MealsList/>
    </Fragment>
}
export default Meals