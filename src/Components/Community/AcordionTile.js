import React from 'react'
import styled from 'styled-components'

export default function AcordionTile() {
    return (
        <Container>
            <div className='item'>
                <div className='head'>
                    <h2 className='line3'>¿CÓMO CARGO MI CAMISETA?</h2>
                </div>
                <div className='conten'>
                    <p>oasdiaosdnoa isndaosdn aoi sdnaosd nasodn asodnasodi nasod inasoin</p>
                </div>
            </div>
        </Container>
    )
}


const Container = styled.div`
    
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom-color: transparent;
    border-radius: 4px;
    margin: 0;
    padding: auto;
    display:block;
    justify-content: center;
    text-align: center;
    &:hover{
        .conten{
            display: block;
        }
    }
    
    .item{
        text-align: left;
        align-items: center;
        display: block;
        cursor: pointer;
        padding: 16px;
    }

    .head{
        text-align: left;
        display: flex;
        cursor: pointer;
        padding: 16px;
    }

    .conten{
        display: none;
        border-top: 1px solid rgba(0, 0, 0, 0.3);
        padding: 16px;
    }

    .line3{
        font-size: 20px;
        color:#171E36;
        margin:0;
    }
    h2{
        font-size: 625px;
        color:#171E36;
        padding: 0;
        margin:0;
    }
`
