import React from 'react'
import Box from '../Components/box'
import DownCom from '../Components/Community/DownCom'
import ListShirt from '../Components/Community/ListShirt'
import Questions from '../Components/Community/Questions'
import TitleCom from '../Components/Community/TitleCom'

export default function Comunity() {
    return (
        <div>
            <Box/>
            <TitleCom/>
            <ListShirt/>
            <Questions/>
            <DownCom/>
        </div>
    )
}
