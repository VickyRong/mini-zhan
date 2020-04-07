
export async function getComp(data){
    let comp = null;
    let defaultProps = null;

    switch (data.type){
        case "TEXT":
            comp = (await import('@/pages/Workspace/components/Text/index')).default;
            defaultProps = (await import('@/pages/Workspace/components/Text/defaultProps')).default;
        break;
        case "IMAGE":
            comp = (await import('@/pages/Workspace/components/Image/index')).default;
            defaultProps = (await import('@/pages/Workspace/components/Image/defaultProps')).default;
        break;
        case "LINE":
            comp = (await import('@/pages/Workspace/components/Line/index')).default;
            defaultProps = (await import('@/pages/Workspace/components/Line/defaultProps')).default;
        break;
        default:
            comp = null;
            defaultProps = null;
    }
    return {
        comp,
        defaultProps
    }
}
export const generateCompAndProps = async (data) => {
    let { comp,defaultProps } = await getComp(data);
    let obj = Object.assign({}, data, {
        ...defaultProps,
        workspace: {
          comp: comp,
        //   settings: {
        //     style: null,
        //     content: null,
        //   },
        },
      });
    return obj
}