import React from 'react'
import Box from '../Components/box'
import DownCom from '../Components/Community/DownCom'
import ListShirt from '../Components/Community/ListShirt'
import Museo from '../Components/Community/Museo'
import Questions from '../Components/Community/Questions'
import TeamVini from '../Components/Community/TeamVini'
import TitleApShirt from '../Components/Community/TitleApShirt'
import TitleCom from '../Components/Community/TitleCom'

export default function Comunity() {
    return (
        <div>
            <Box/>
            <TitleCom/>
            <ListShirt/>
            
            <Museo/>
            <Questions/>
            <TeamVini/>
            <DownCom/>
        </div>
    )
}
