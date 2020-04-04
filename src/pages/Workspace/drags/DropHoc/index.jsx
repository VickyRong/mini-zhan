import * as React from 'react';
import { DropTarget } from 'react-dnd'

const Types = {
    COMP: 'comp',
}

const target = {
    canDrop(props, monitor) {
        return true;
    },

    hover(props, monitor, component) {
    },

    drop(props, monitor, component) {
        return { moved: true }
    },
    
}

function targetCollect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    }
  }

@DropTarget(Types.COMP, target, targetCollect)
class DropHoc extends React.Component {
    render(){
        const { connectDropTarget } = this.props
        return(
            connectDropTarget( this.props.children )
        )
    }
}
export default DropHoc;