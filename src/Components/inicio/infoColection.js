import React from 'react'
import styled from 'styled-components'
import Mock from '../../images/archivo-mockups-02.png'

export default function InfoCollection() {
    return (
        <CollectionSection>
            <div className='mocups'>
                <img src={Mock} alt='Moc' className='moc1'/>
            </div>
            <div className='info'>
                <h1 className='line1'>CREÁ TU MUSEO</h1>
                <p className='line2'>Publicá tu colección de camisetas para exhibir, vender o intercambiar con otros fanáticos</p>
                <h1 className='line1'>INTERACTÚA</h1>
                <p className='line2'>Likeá y comentá tus camisetas preferidas de otros usuarios</p>
                <h1 className='line1'>CHATEÁ</h1>
                <p className='line2'>Mandale mensaje privados a otros fanáticos para charlar sobre sus reliquias</p>
            </div>
        </CollectionSection>
    )
}


const CollectionSection = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 5rem;
    .mocups{
        flex:1;
    }

    .moc1{
        height: 40em;
    }

    .info{
        flex:1;
        text-align: left;
        align-items: center;
        justify-content:center;
    }

    .line1{
        font-size: 45px;
        color:#A8C813;
    }

    .line2{
        font-size: 20px;
        font-weight: normal;
    }

    @media screen and (max-width: 760px){
        display: block;
        padding: 0;

        .moc1{
            height: 15em;
        }

        .info{
            padding: 0rem 2rem;
            text-align: center;
        }

        .line1{
            font-size: 25px;
            color:#A8C813;
        }

        .line2{
            font-size: 14px;
            font-weight: normal;
        }
    }
`