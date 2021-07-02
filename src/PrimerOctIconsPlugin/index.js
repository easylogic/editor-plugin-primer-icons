import { EditorInstance } from "@easylogic/editor";
import PrimerOctIconsSelectProperty from "./PrimerOctIconsSelectProperty";
 

/**
 * 
 * initialize Feather Icons Plugin 
 * 
 * @param {EditorInstance} editor 
 */
export default function (editor) {

    // register control ui 
    editor.registerMenuItem('library', { 
        PrimerOctIconsSelectProperty,
    })
}
