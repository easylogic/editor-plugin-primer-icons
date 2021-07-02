import editor from '@easylogic/editor';
import '@easylogic/editor/dist/editor.css';

import PrimerOctIconsPlugin from './PrimerOctIconsPlugin';

editor.createDesignEditor({
    container: document.getElementById('app'),
    plugins: [
        PrimerOctIconsPlugin,
    ]
})