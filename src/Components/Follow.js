import React from 'react'
import styled from 'styled-components'

export default function Follow() {
    return (
        <Following>
            <div>
                image
            </div>
            <div>
                siguenos 
            </div>
            <div>
                image
            </div>
        </Following>
    )
}


const Following = styled.div`
        display:flex;
        background: radial-gradient(circle farthest-side,#2A355A,#090C17);
        justify-content: space-between;

`
