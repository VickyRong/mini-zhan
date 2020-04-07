import * as React from 'react';
import styles from './index.less';
import DropHoc from '../drags/DropHoc'
import { connect } from 'dva';
@connect(({workspace }) => ({
    workspace:workspace,
    currentComp:workspace.currentComp
}))

class WorkspaceCenter extends React.Component {
    constructor(props){
        super(props)
    }

    handleClick = (compData) =>{
        const { dispatch } = this.props;
        dispatch({
            type:'workspace/updateCurComp',
            params:{ compData }
        })
    }
    
    generateComponents(elementsData){
        let { currentComp } = this.props
        let elem = elementsData.map((item, index) => {
            let compData = { ...item };
            let Comp = item.workspace && item.workspace.comp;
            return (
                <div 
                    onClick={ () => this.handleClick(compData) } 
                    key={index} 
                    className = { `${styles.compSty} ${compData.id == currentComp.id ? styles.highlight :''}` }
                >
                    <Comp compData={compData} index={index}/>
                </div>
            )
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