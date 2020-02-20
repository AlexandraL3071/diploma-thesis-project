import React from 'react'
import '../../styles/CategoryCard.css'
import {useSelector} from "react-redux";

export function CategoryCard(props) {
    const fitnessImage = useSelector(state => state.firebase.data.products.fitnessImage);
    const tennisImage = useSelector(state => state.firebase.data.products.tennisImage);
    const othersImage = useSelector(state => state.firebase.data.products.othersImage);
    const defaultImage = useSelector(state => state.firebase.data.products.defaultImage);

    const image = () => {
        switch(props.category) {
            case 'fitness':
                return fitnessImage;
            case 'tenis':
                return tennisImage;
            case 'diverse':
                return othersImage;
            default:
                return defaultImage;
        }
    };

    return (
        <div id='category-card' className='ui card'>
            <div className='content'>
                <div className='image'>
                    <img id='image' src={image()} alt={defaultImage}/>
                </div>
            </div>
            <div id='extra-content' className='extra content'>
                <div id='label' className='label'>Echipamente pentru {props.category}</div>
            </div>
        </div>
    )
}
