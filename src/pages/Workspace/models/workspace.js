import { generateCompAndProps } from '../components/generateCompAndProps';
import { getCompId } from '../../../utils/utils';

export default {
    namespace:'workspace',
    state:{
        elementsData:[],
        currentComp:{}
    },
    effects:{
        *addComp({ params,callback },{ call,put,select }){
            const workspace = yield select(state => state.workspace);
            const compData = yield generateCompAndProps(
                params.component.props.data
            )
            compData.id = getCompId()
            let elementsData = workspace.elementsData || []
            elementsData.push(compData);
            yield put({ 
                type: 'addCompFun',
                currentComp:compData,
                elementsData:elementsData,
            });
        },
        *updateCurComp({ params,callback },{ call,put }){
            const compData = params.compData
            yield put({
                type:'updateCurCompFun',
                currentComp:compData,
            })
        }
    },
    reducers: {
        addCompFun(state,{ currentComp,elementsData }){
            return {
                ...state,
                currentComp:currentComp,
                elementsData:elementsData
            }
        },
        updateCurCompFun(state,{ currentComp }){
            return {
                ...state,
                currentComp:currentComp,
            }
        }
    }
}