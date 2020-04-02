import React, { useState, useRef } from 'react';
import WorkspaceLeft from './workspaceLeft';
import WorkspaceCenter from './workspaceCenter';
import WorkspaceRight from './workspaceRight';
import NavTop from '../NavTop'
import styles from './index.less'

const Workspace = () =>{
    return(
        <>
            <NavTop/>
            <div className={ styles.workspace_wrap }>
                <WorkspaceLeft/>
                <WorkspaceCenter/>
                <WorkspaceRight/>
            </div>
        </>
    )
}
export default Workspace;