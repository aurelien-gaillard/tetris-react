import React from 'react'
import { STAGE_HEIGHT, STAGE_WIDTH } from '../gameHelpers'
import Cell from './Cell'
import { StyledStage } from './styles/StyledStage'


const Stage = ({stage}) => {
    return (
<StyledStage
width={stage[0].length}
height={stage.length}
>
    {
        stage.map(row => row.map((cell, x) => {
            return (
                <Cell 
                key={x}
                type={cell[0]}
                />
            )
        }))
    }
</StyledStage>
    )
}

export default Stage