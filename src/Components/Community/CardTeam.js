import React from 'react'
import styled from 'styled-components'
import Staff from '../../images/staff-1.jpg'

export default function CardTeam() {
    return (
        <Cardi>
            <img src={Staff} alt='profile' className='ImgP'/>
            <h2 className='name'>Gabriel</h2>
            <h2 className='last'>Benito</h2>
            <h2 className='pos'>CEO-Founder</h2>
        </Cardi>
    )
}

const Cardi = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px;

    .ImgP{
        height: 17rem;
        border-radius: 10px;
    }

    .name{
        color: #fff;
        font-size: 30px;
        margin:0;
    }
    .last{
        color: #fff;
        font-size: 20px;
        margin:0;
    }
    .pos{
        color:#A8C813;
        font-size: 20px;
        margin:0;
    }

`