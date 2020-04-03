import * as React from 'react';
import { DragSource } from 'react-dnd'

const Types = {
    COMP: 'comp',
}

const source = {
    beginDrag(props){
        console.log('props:',props)
        const item = { id:props.sourceId }
        return item
    },
    isDragging(props, monitor) {
    },
    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
          return
        }
        const dropResult = monitor.getDropResult()
        console.log('dropResult---------------:',dropResult)
        if(dropResult){
            console.log('拖拽结束：')
        }
      },
    
}

function sourceCollect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    }
}

@DragSource(Types.COMP, source, sourceCollect)
class DragHoc extends React.Component {
    render(){
        const { connectDragSource } = this.props
        return(
            connectDragSource(
                <div>{this.props.children}</div>
            )
        )
    }
}


export default DragHoc;