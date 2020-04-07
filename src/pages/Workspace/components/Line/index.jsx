import * as React from 'react';
import styles from './index.less';
import { connect } from 'dva';

@connect((workspace) => workspace)
class Comp extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const { compData } = this.props;
        return(
            <div className={styles.lineComponent}></div>
        )
    }
}
export default Comp