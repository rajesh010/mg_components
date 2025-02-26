import {html,css,LitElement} from "lit"

/**
 * the plan is to have a playground styled;
 * such that each component's each parameters can be seen live 
 * for easiness of centralizing the main changes that might be necessary
 */
export class Mgcomponent extends LitElement
{

    static styles = css``

    
    render()
    {
        return html `
        
        
        `
    }
}

customElements.define("mg-component", Mgcomponent)