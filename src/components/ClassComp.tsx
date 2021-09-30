import React from "react";
interface Iprop {
    num: number,
    onChange?: (num:number)=>void
}
interface IState {
    msg: string
}
export class CountComp extends React.Component<Iprop,IState> {
    state:IState = {
        msg: 'eee',
    }
    render() {
        // this.state.msg
        return (<>
        <div>
            <button onClick={() => {
                if (this.props.onChange) {
                    this.props.onChange(this.props.num - 1)
                }
            }}>-</button>
            <span>{this.props.num}</span>
            <button onClick={()=>{if (this.props.onChange) {
                this.props.onChange(this.props.num+1)
            }}}>+</button>
        </div>
    </>)
    }
}