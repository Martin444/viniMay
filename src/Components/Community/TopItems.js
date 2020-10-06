import React from 'react'
import styled from 'styled-components'

export default function TopItems(props) {
    return (
        <Contain>
            <dic className='position'>
                <h1>{props.count} -</h1>
            </dic>
            <dic className='userDate'>
                <h1>{props.user} </h1>
                <h1 className='us'>Usuario: {props.user}</h1>
            </dic>
            <br/>
            <dic className='row'>
                <h1>{' >> '}</h1>
            </dic>
            <dic className='countShirt'>
                <h1> {props.countShirt} CAMISETAS</h1>
            </dic>
        </Contain>
    )
}

const Contain = styled.div `
    display: flex;
    justify-content: center;
        text-align: center;



    .position{
        color:#171E36;
    }
    .userDate{
        color:#171E36;
        text-align: left;
        margin: 0;
        padding-top:20px;
    }
    .userDate h1{
        margin: 0;
    }
    .row{
        color:#A8C813;
    }
    .us{
        color:#A8C813;
        font-size: 20px;
        margin: 0;
    }
    
    .countShirt{
        color:#171E36;
    }

    @media screen and (max-width: 769px){
        justify-content: center;
        text-align: center;

        h1{
            font-size: 15px;
        }
        .userDate{
            color:#171E36;
            text-align: left;
            margin: 0;
            padding-top:10px;
        }
        .us{
        color:#A8C813;
        font-size: 10px;
        margin: 0;
    }
    }
`
