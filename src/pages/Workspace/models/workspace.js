
export default {
    namespace:'workspace',
    state:{},
    effects:{
        *addComponent({ params,callback },{ call,put,select }){
            const workspace = yield select(state => state.workspace);
            let compData = params.component.props.data;
            let elementsData = workspace.elementsData || []
            elementsData.push(compData);
            yield put({ 
                type: 'addCompFun',
                currentComp:compData,
                elementsData:elementsData,
            });
        }
    },
    reducers: {
        addCompFun(state,{ currentComp,elementsData }){
            return {
                ...state,
                currentComp:currentComp,
                elementsData:elementsData
            }
        }
    }
}