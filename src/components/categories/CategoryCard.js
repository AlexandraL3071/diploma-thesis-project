import React from 'react'
import '../../styles/CategoryCard.css'
import {useSelector} from "react-redux";;

export function CategoryCard(props) {
    const fitnessImage = useSelector(state => state.firebase.data.products.fitnessImage);
    const tennisImage = useSelector(state => state.firebase.data.products.tennisImage);
    const othersImage = useSelector(state => state.firebase.data.products.othersImage);

    const image = () => {
        switch(props.category) {
            case 'fitness':
                return fitnessImage;
            case 'tennis':
                return tennisImage;
            case 'others':
                return othersImage;
            default:
                return ''
        }
    };

    return (
        <div className='ui inverted card'>
            <div className='content'>
                <div className='image'>
                    <img src={image()}/>
                </div>
            </div>
            <div className='extra content'>
                <div id='label' className='label'>Echipamente pentru {props.category}</div>
            </div>
        </div>
    )
}
