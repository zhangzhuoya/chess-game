import React from "react";
import { ChessType } from '../types/enums'
import { ChessComp } from './ChessComp'
import './BoardComp.css'
interface BProps {
    board: ChessType[],
    onClick?: ()=> void,
    isOver: Boolean
}
export function BoardComp(props:BProps) {
    let chessCom = props.board.map((item,index)=>{
    return <ChessComp type={item} key={index} onClick={
        ()=>{
            if (!props.isOver&&props.onClick) {
                props.onClick()
            }
        }
    }></ChessComp>
    })
    return <div className="board">
        {chessCom}
    </div>
    
}