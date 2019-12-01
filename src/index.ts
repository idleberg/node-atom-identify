'use strict';

function initIDs(): void {
  const editors = atom.workspace.getTextEditors();
  atom.workspace.observeTextEditors( editor => addEditorID(editor));
  editors.forEach( editor => addEditorID(editor));

  const panes = atom.workspace.getPanes();
  atom.workspace.observePanes( pane => addPaneID(pane));
  panes.forEach( pane => addPaneID(pane));
}

function addEditorID(editor): void {
  if (editor && editor.id) {
    if (atom.inDevMode()) console.log(`Add data-attribute for editor #${editor.id}`);

    const view: HTMLElement = atom.views.getView(editor);
    view.setAttribute('data-editor-id', editor.id);
  }
}

function addPaneID(pane): void {
  if (pane && pane.id) {
    if (atom.inDevMode()) console.log(`Add data-attribute for pane #${pane.id}`);

    const view: HTMLElement = atom.views.getView(pane);
    view.setAttribute('data-pane-id', pane.id);
  }
}

export default initIDs;