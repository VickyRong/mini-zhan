import * as React from 'react';
import styles from './index.less';
import { connect } from 'dva';

const MaxWidth = {
    width: 375,
  };

@connect((workspace) => workspace)
class Comp extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { compData } = this.props;

        return(
            <div>
                <img 
                 src={ compData.defaultUrl}
                 width={MaxWidth.width}
                 height='auto'
                />
            </div>
        )
    }
}
export default Comp