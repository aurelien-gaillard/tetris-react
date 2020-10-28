import React from "react"
import { StyledCell } from "./styles/StyledCell"
import { TETROMINOS } from "../tetrominos"

const Cell = ({ type }) => {
  return (
    <div>
      <StyledCell type={type} color={TETROMINOS[type].color}></StyledCell>
    </div>
  )
}

export default React.memo(Cell)
