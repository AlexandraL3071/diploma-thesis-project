import {IonContent, IonHeader} from "@ionic/react";
import React from "react";

export const getMonthAsNumber = (month) => {
    const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'];
    for (let i = 0; i < month.length; i++) {
        if (months[i] === month) {
            return i;
        }
    }
    return 0;
};

export const canBeCancelled = (date) => {
    const currentDate = (new Date()).toString().split(' ');
    const orderDate = date.split('T')[0].split('-');
    const currentMonth = getMonthAsNumber(currentDate[1]);

    if (currentDate[3] > orderDate[0]) {
        return false
    } else if (currentMonth > orderDate[1]) {
        return false;
    } else if (currentDate[2] - orderDate[2] > 1) {
        return false;
    }
    return true
};

export const totalPrice = (products) => {
    let totalPrice = 0;
    // eslint-disable-next-line array-callback-return
    products.map(product => {
        if (product.quantity !== undefined && product.price !== undefined) {
            totalPrice += parseInt(product.price);
        }
    });
    return totalPrice
};

export const totalNumberOfProducts = (products) => {
    let totalNumberOfProducts = 0;
    // eslint-disable-next-line array-callback-return
    products.map(product => {
        if (product.quantity !== undefined) {
            totalNumberOfProducts += 1
        }
    });
    return totalNumberOfProducts
};

export const orderDate = (orderDate) => {
    const date = orderDate.split('T')[0];
    const auxDate = date.split('-');
    return auxDate[2] + '.' + auxDate[1] + '.' + auxDate[0];
};

export const scroll = () => {
    document.documentElement.scrollTop = 0;
};

export const getArrayFromSpecificIndex = (array, i, j) => {
    let newArray = [];
    for (let k = i; k < j; k++) {
        newArray.push(array[k])
    }
    return newArray;
};

export const renderOfflineMessage = (message) => {
    return (
        <IonContent>
            <IonHeader>
                {message}
            </IonHeader>
        </IonContent>
    )
};
