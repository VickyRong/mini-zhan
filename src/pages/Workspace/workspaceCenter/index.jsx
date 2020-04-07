import * as React from 'react';
import styles from './index.less';
import DropHoc from '../drags/DropHoc'
import { connect } from 'dva';
@connect((workspace) => workspace)

class WorkspaceCenter extends React.Component {
    generateComponents(elementsData){
       let elem = elementsData.map((item, index) => {
            let compData = { ...item };
            let Comp = item.workspace && item.workspace.comp;
            return <Comp compData={compData} index={index} key={index}/>
        })
        return elem
    }


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
                                    this.generateComponents(elementsData)
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