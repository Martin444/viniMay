import React from 'react'
import styled from 'styled-components'

export default function AcordionTile() {
    return (
        <Container>
            <div className='item'>
                <div className='head'>
                    <h1>¿CÓMO CARGO MI CAMISETA?</h1>
                </div>
                <div className='conten'>
                    <p>oasdiaosdnoaisndaosdnaoisdnaosdnasodnasodnasodinasodinasoin</p>
                </div>
            </div>
        </Container>
    )
}


const Container = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom-color: transparent;
    border-radius: 4px;
    display:block;
    text-align: center;
    &:hover{
        .conten{
            display: block;
        }
    }
    
    .item{
        text-align: center;
        align-items: center;
        display: block;
        cursor: pointer;
        padding: 16px;
    }

    .head{
        text-align: center;
        display: flex;
        cursor: pointer;
        padding: 16px;
    }

    .conten{
        display: none;
        border-top: 1px solid rgba(0, 0, 0, 0.3);
        padding: 16px;
    }
`
