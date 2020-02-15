import ProductCard from './ProductCard';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import React from 'react';
import {useSelector} from 'react-redux';
import {ADD_FAVORITE_LINK, CATEGORIES_LINK} from "../../utils/linkNames";
import '../../styles/AllProducts.css'
import '../../styles/Content.css'

export default function OthersCategory() {
    const othersProducts = useSelector(state => state.firebase.data.products.others);

    const renderList = () => {
        return (
            <div id='container'>
                {othersProducts.map(product => (
                    <ProductCard product={product} type='add' button='ui basic pink button' icon='heart icon' text='Adauga la favorite' link={ADD_FAVORITE_LINK}/>
                ))}
            </div>
        )
    };

    return (
        <div>
            {renderList()}
            <Link to={CATEGORIES_LINK}><Button id='button' inverted>Inapoi</Button></Link>
        </div>
    )
}
