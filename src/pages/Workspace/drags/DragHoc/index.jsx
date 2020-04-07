import * as React from 'react';
import { DragSource } from 'react-dnd';
import { connect } from 'dva';

const Types = {
    COMP: 'comp',
}

const source = {
    beginDrag(props){
        const item = { id:props.sourceId }
        return item
    },
    isDragging(props, monitor) {
    },
    endDrag(props, monitor, component) {
        const { dispatch } = props;
        if (!monitor.didDrop()) {
          return
        }
        const dropResult = monitor.getDropResult()
        if(dropResult){
            dispatch({
                type:'workspace/addComp',
                params:{ component }
            })
        }
      },
}

function sourceCollect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    }
}

@connect(({ workspace })=>({
    workspace
}))
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