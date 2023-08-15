import React, { Component } from 'react';

//防抖：有定时器则清除定时器，开启新的定时器
export function anti_shake(func:Function,time:number,data:any){
    let timer:any = null;
    return function(){
        if(timer){
           clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            func(data);
        },time)
    }
}

//节流：没有定时器，则开启定时器
export function throttle(func:Function,time:number,data:any){
    let tiemr:any = null;
    return function () {
        if(!tiemr){
            tiemr = setTimeout(() => {
                func(data);
                clearTimeout(tiemr);
                tiemr = null;   
            }, time);
        }
    }

}

//拖拽
export function DragHOC(Element:any){
    return class tools extends Component<any,any> {
        constructor(props:any){
            super(props);
            this.state = {left:0,top:0}
        }
        handleMouseDown(){
            document.onmousemove = (e)=>{
                this.setState({ left: e.pageX, top: e.pageY });
            }
            document.onmouseup = ()=>{
                document.onmousemove = null;
            }
        }
        render() {
            return (
                <div onMouseDown={()=>{this.handleMouseDown() }} style={{ position:'absolute',left: this.state.left + 'px' ,top: this.state.top + 'px',width:'100%'}}>
                    <Element/>
                </div>
            )
        }
    }
    
}

