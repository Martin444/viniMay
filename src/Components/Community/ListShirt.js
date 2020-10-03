import React from 'react'
import styled from 'styled-components'
import CardShirt from './CardShirt'

export default function ListShirt() {
    return (
        <Contain>
            <CardShirt/>
            <CardShirt/>
            <CardShirt/>
            <CardShirt/>
            <CardShirt/>
            <CardShirt/>
            <CardShirt/>
            <CardShirt/>
        </Contain>
    )
}

const Contain = styled.div`
    display: flex;
    justify-content: center;
    /* Put a card in the next row when previous cards take all width */
    flex-wrap: wrap;
`