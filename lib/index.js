'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function initIDs() {
    var editors = atom.workspace.getTextEditors();
    atom.workspace.observeTextEditors(function (editor) { return addEditorID(editor); });
    editors.map(function (editor) { return addEditorID(editor); });
    var panes = atom.workspace.getPanes();
    atom.workspace.observePanes(function (pane) { return addPaneID(pane); });
    panes.map(function (pane) { return addPaneID(pane); });
}
function addEditorID(editor) {
    var _a, _b;
    if ((_a = editor) === null || _a === void 0 ? void 0 : _a.id) {
        var view = atom.views.getView(editor);
        var buffer = editor.buffer;
        if (((_b = editor) === null || _b === void 0 ? void 0 : _b.id) && !view.getAttribute('data-editor-id')) {
            if (atom.inDevMode())
                console.log("Add data-attribute for editor #" + editor.id);
            view.setAttribute('data-editor-id', editor.id);
        }
        if (buffer.id && !view.getAttribute('data-buffer-id')) {
            if (atom.inDevMode())
                console.log("Add data-attribute for buffer #" + buffer.id);
            view.setAttribute('data-buffer-id', buffer.id);
        }
    }
}
function addPaneID(pane) {
    var _a;
    if ((_a = pane) === null || _a === void 0 ? void 0 : _a.id) {
        var view = atom.views.getView(pane);
        if (!view.getAttribute('data-pane-id')) {
            view.setAttribute('data-pane-id', pane.id);
        }
    }
}
exports.default = initIDs;
//# sourceMappingURL=index.js.map