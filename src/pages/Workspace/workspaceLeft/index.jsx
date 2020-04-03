import * as React from 'react';
import styles from './index.less'
import DragHoc from '../drags/DragHoc'


class WorkspaceLeft extends React.Component {
    state = {
        compList:[
            { type:'TEXT',name:'文本' },
            { type:'IMAGE',name:'图片' },
            { type:'LINE',name:'分割线' },
        ]
    }
    render(){
        const { compList } = this.state

        return(
            <div className={styles.left_wrap} >
                {
                    compList.map((item,index) => 
                        <div className={styles.comp_container} key={index}>
                            <DragHoc data={item} >
                                <div className={styles.comp_style}>
                                    { item.name }
                                </div>
                            </DragHoc>
                        </div>
                    )
                }
            </div>
        )
    }
}
export default WorkspaceLeft;