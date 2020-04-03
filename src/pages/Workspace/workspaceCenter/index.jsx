import * as React from 'react';
import styles from './index.less';
import DropHoc from '../drags/DropHoc'
import { connect } from 'dva';
@connect()
class WorkspaceCenter extends React.Component {
    render(){
        const { isOver, canDrop, connectDropTarget } = this.props
        console.log('center--------isOver',isOver)
        console.log('center--------canDrop',canDrop)
        return(
            <div className={ styles.center_wrap }>
               <div className={ styles.center_content }>
                   <div className={ styles.header }>
                       微站标题
                   </div>
                    <DropHoc>
                        <div className={ styles.content }>
                            拖拽目的地
                        </div>
                    </DropHoc>
                </div> 
            </div>
        )
    }
}
export default WorkspaceCenter;