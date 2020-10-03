import React from 'react'
import styled from 'styled-components'
import Nov from '../../images/ministry-5.jpg'
import CardTop from './CardTop'
import TopItems from './TopItems'

export default function TopTen() {
    return (
        <Container>
            <div className='topi'>
                <h1 className='line3'>TOP 10</h1>
                <h1 className='line5'>MUSEOS CON MÁS CAMISETAS</h1>
                <div className='cards'>
                    <CardTop/>
                    <CardTop/>
                    <CardTop/>
                </div>
            </div>
            <div className='items'>
                <TopItems/>
                <TopItems/>
                <TopItems/>
                <TopItems/>
                <TopItems/>
                <TopItems/>
                <TopItems/>
                <TopItems/>
            </div>
        </Container>
    )
}


const Container = styled.div`
    .topi{
        margin:0;
        padding: auto;
        align-content:center;
        display: block;
        align-items: center;
        width: 100%;
        /* height: 70vh; */
        background-image: linear-gradient(to bottom, rgba(168, 200, 19, 0.7),#A8C813), url(${Nov});
        background-size: cover;
    }

    .cards{
        padding: 2rem 15rem;
        align-items: center;
        display: flex;
        justify-content: space-around;
    }

    .line3{
        color:#fff;
        font-size: 40px;
        margin:0;
        padding-top: 2rem;
    }
    .line5{
        color:#171E36;
        font-size: 40px;
        margin:0;
    }

    .items{
        justify-content: center;
        text-align: center;
        padding: 2rem 0rem;
    }

    @media screen and (max-width: 769px){
        .line3{
            color:#fff;
            font-size: 20px;
            margin:0;
            padding-top: 2rem;
        }
        .line5{
            color:#171E36;
            font-size: 20px;
            margin:0;
        }

        .cards{
            padding: 4rem 5rem;
            align-items: center;
            display: block;
            justify-content: space-around;
        }
    }

`