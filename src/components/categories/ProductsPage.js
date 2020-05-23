import React from 'react';
import {IonContent, IonHeader} from "@ionic/react";
import ProductCard from "./ProductCard";
import {heartOutline} from "ionicons/icons";
import {FAVORITE_LINK} from "../../utils/linkNames";
import PagingComponent from "../PagingComponent";

export default function ProductsPage(props) {
    return (
        <IonContent>
            {props.products.map(product => (
                <ProductCard product={product} type='add' icon={heartOutline}
                             text='Adauga la favorite' link={FAVORITE_LINK}/>
            ))}
            {props.products.length === 0 ? <IonHeader>Sunteti in modul offline! Restul produselor vor fi afisate cand reveniti online.</IonHeader> : ''}
            <PagingComponent length={props.length} parentCallback={props.parentCallback}/>
        </IonContent>
    )
}
