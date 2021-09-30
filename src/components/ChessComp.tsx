import { ChessType } from '../types/enums'
import './ChessComp.css'
interface IProps {
    type: ChessType,
    onClick?: ()=> void 

}

export function ChessComp({type,onClick}: IProps) {
    let chess = null
    if (type === ChessType.none) {
       chess =  <div className="chess-item none" onClick={onClick}></div>
    }
    if (type === ChessType.red) {
        chess = <div className="chess-item red" onClick={onClick}></div>
    }
    if (type === ChessType.black) {
        chess= <div className="chess-item black" onClick={onClick}></div>
    }
    return <div className="chess">
        {chess}
    </div>
}