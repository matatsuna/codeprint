import CodeMirror from 'codemirror';
import 'codemirror/theme/xq-dark.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/PHP/PHP';
import 'codemirror/mode/swift/swift';
import 'codemirror/mode/ruby/ruby';
import 'codemirror/mode/python/python';
import 'codemirror/mode/perl/perl';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/yaml/yaml';
import 'codemirror/addon/mode/loadmode';
import 'codemirror/mode/meta';
import 'codemirror/mode/htmlmixed/htmlmixed';

document.addEventListener('DOMContentLoaded', () => {

    var value = "";
    let editor = CodeMirror(document.getElementById("code"), {
        value: value,
        lineNumbers: true,
        lineWrapping: true,
        mode: "javascript",
        autoCloseBrackets: true,
        matchBrackets: true,
        showCursorWhenSelecting: true,
        tabSize: 2
    });

    editor.focus();
    window.editor = editor;
    window.CodeMirror = CodeMirror;
    let modeselect = document.getElementById('mode-select');
    modeselect.addEventListener('change', (e) => {
        let m = modeselect.value;
        var info = CodeMirror.findModeByExtension(m);
        let mode, mime;
        if (info) {
            mode = info.mode;
            mime = info.mime;
        } else {
            mode = m;
            mime = m;
        }
        console.log({ m, mode, mime });
        editor.setOption("mode", mime);
        CodeMirror.autoLoadMode(editor, mode);
    });

    var elems = document.querySelectorAll('select');
    var options = document.querySelectorAll('option');
    var instances = M.FormSelect.init(elems, options);
});
