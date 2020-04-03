import React, { useState, useRef } from 'react';
import WorkspaceLeft from './workspaceLeft';
import WorkspaceCenter from './workspaceCenter';
import WorkspaceRight from './workspaceRight';
import NavTop from '../NavTop'
import styles from './index.less'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

const Workspace = () =>{
    return(
        <DndProvider backend={Backend}>
            <NavTop/>
            <div className={ styles.workspace_wrap }>
                <WorkspaceLeft/>
                <WorkspaceCenter/>
                <WorkspaceRight/>
            </div>
        </DndProvider>
    )
}
export default Workspace;