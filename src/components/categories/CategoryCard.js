import React from 'react'
import {IonCard, IonCardContent, IonCardSubtitle} from "@ionic/react";
import '../../styles/CategoryCard.css'

export default function CategoryCard(props) {
    const image = () => {
        switch (props.category) {
            case 'fitness':
                return 'https://www.culturism.ro/_pics/locuri/hp3lqw4lkb.jpg';
            case 'tenis':
                return 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR7GoifBzmoG-nrWUpXSpIlb9AvXRhdvW0d6wp_Do7OD3sshA1';
            case 'diverse':
                return 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3JyjFEjABJPPMk237E41SLxJ2uxW6laZXv-LkrKJS7is1jBky';
            default:
                return 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTZjizRLdaRI0IgiqG_7F2SmM7kkA7WDb4vgssWmhozCUFwEnH'
        }
    };

    return (
        <IonCard>
            <IonCardContent>
                <img id='category-image' src={image()}/>
                <IonCardSubtitle id='card-subtitle'>Echipamente pentru {props.category}</IonCardSubtitle>
            </IonCardContent>
        </IonCard>
    )
};

