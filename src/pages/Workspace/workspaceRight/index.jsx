import * as React from 'react';
import styles from './index.less'
import { connect } from 'dva';

@connect(({workspace }) => ({
    workspace:workspace,
    currentComp:workspace.currentComp
}))

class WorkspaceRight extends React.Component {

    render(){
         let { currentComp } = this.props
        return(
            <div className = { styles.right_wrap } >
                属性面板
                <p>组件名： {currentComp.name} </p>
            </div>
        )
    }
}
export default WorkspaceRight;