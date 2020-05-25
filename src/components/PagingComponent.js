import React, {useState} from 'react'
import {IonButton, IonContent, IonItem, IonLabel} from "@ionic/react";
import '../styles/PagingComponent.css'

export default function PagingComponent(props) {

    const [pageNumber, setPageNumber] = useState(0);

    const maxPageNumber = () => {
        return ((props.length) / 5 + 1) | 0;
    };

    const goBack = () => {
        props.parentCallback(pageNumber - 1);
        setPageNumber(pageNumber - 1);
    };

    const goForward = () => {
        props.parentCallback(pageNumber + 1);
        setPageNumber(pageNumber + 1);
    };

    return (
        <IonContent id="full-width">
            <IonItem id="page-item">
                {pageNumber > 0 ? <IonButton className="paging-button" color="dark"
                                             onClick={() => goBack()}>&lt;</IonButton> : ""}
                <IonLabel id="page-label">{pageNumber + 1} din {maxPageNumber()}</IonLabel>
                {pageNumber < maxPageNumber() - 1 ? <IonButton className="paging-button" color="dark"
                                                               onClick={() => goForward()}>&gt;</IonButton> : ""}
            </IonItem>
        </IonContent>
    )
}
