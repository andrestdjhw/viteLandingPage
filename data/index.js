import { equipos } from "./common/equipos"

export const getPageContext=(pagePath)=>{
    const commonVariables = {
        ...equipos
    }

    let pageVariables = {};
    console.log("Page is been loaded: ", pagePath);
    return{
        ...commonVariables,
        ...pageVariables
    }
}
