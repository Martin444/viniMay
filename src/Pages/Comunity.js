import React from 'react'
import { Animated } from 'react-animated-css'
import Box from '../Components/box'
import DownCom from '../Components/Community/DownCom'
import ListShirt from '../Components/Community/ListShirt'
import Museo from '../Components/Community/Museo'
import Questions from '../Components/Community/Questions'
import TeamVini from '../Components/Community/TeamVini'
import TitleCom from '../Components/Community/TitleCom'

export default function Comunity() {
    return (
        <div>
            <Box/>
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                
                <TitleCom/>
            </Animated>
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>

                <ListShirt/>
            </Animated>
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>

                <Museo/>
            </Animated>

            <Questions/>
            <TeamVini/>
            <DownCom/>
        </div>
    )
}
