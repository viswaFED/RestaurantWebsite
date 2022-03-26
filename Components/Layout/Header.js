import {Fragment} from "react";
import mealsImage from "../../Assets/meals.jpg"
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props =>{
return <Fragment>
    <header className={classes.header}> 
        <h2>Swizz Meals</h2>
        <HeaderCartButton> Cart</HeaderCartButton>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="menu of items"/>
    </div>

</Fragment>
};

export default Header;