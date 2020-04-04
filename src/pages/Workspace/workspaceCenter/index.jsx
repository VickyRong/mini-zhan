import * as React from 'react';
import styles from './index.less';
import DropHoc from '../drags/DropHoc'
import { connect } from 'dva';
@connect((workspace) => workspace)

class WorkspaceCenter extends React.Component {
    render(){
        const { workspace } = this.props;
        const elementsData = workspace.elementsData || [] ;
        return(
            <div className={ styles.center_wrap }>
               <div className={ styles.center_content }>
                    <div className={ styles.header }>
                        微站标题
                    </div>
                    <DropHoc>
                        { 
                            <div className={ styles.content }>
                                {
                                    elementsData.map((item,index) => 
                                        <div key={index}>{ item.name }</div>
                                    )
                                } 
                            </div> 
                        }
                    </DropHoc>
                </div> 
            </div>
        )
    }
}
export default WorkspaceCenter;