'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function initIDs() {
    var editors = atom.workspace.getTextEditors();
    atom.workspace.observeTextEditors(function (editor) { return addEditorID(editor); });
    editors.forEach(function (editor) { return addEditorID(editor); });
    var panes = atom.workspace.getPanes();
    atom.workspace.observePanes(function (pane) { return addPaneID(pane); });
    panes.forEach(function (pane) { return addPaneID(pane); });
}
function addEditorID(editor) {
    if (editor && editor.id) {
        var view = atom.views.getView(editor);
        if (!view.getAttribute('data-editor-id')) {
            if (atom.inDevMode())
                console.log("Add data-attribute for editor #" + editor.id);
            view.setAttribute('data-editor-id', editor.id);
        }
    }
}
function addPaneID(pane) {
    if (pane && pane.id) {
        var view = atom.views.getView(pane);
        if (!view.getAttribute('data-pane-id')) {
            if (atom.inDevMode())
                console.log("Add data-attribute for pane #" + pane.id);
            view.setAttribute('data-pane-id', pane.id);
        }
    }
}
exports.default = initIDs;
//# sourceMappingURL=index.js.map