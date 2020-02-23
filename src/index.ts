'use strict';

function initIDs(): void {
  const editors = atom.workspace.getTextEditors();
  atom.workspace.observeTextEditors(editor => addEditorID(editor));
  editors.map(editor => addEditorID(editor));

  const panes = atom.workspace.getPanes();
  atom.workspace.observePanes(pane => addPaneID(pane));
  panes.map(pane => addPaneID(pane));
}

function addEditorID(editor): void {
  if (editor?.id) {
    const view: HTMLElement = atom.views.getView(editor);
    const buffer = editor.buffer;

    if (editor?.id && !view.getAttribute('data-editor-id')) {
      if (atom.inDevMode()) console.log(`Add data-attribute for editor #${editor.id}`);
      view.setAttribute('data-editor-id', editor.id);
    }

    if (buffer.id && !view.getAttribute('data-buffer-id')) {
      if (atom.inDevMode()) console.log(`Add data-attribute for buffer #${buffer.id}`);
      view.setAttribute('data-buffer-id', buffer.id);
    }
  }
}

function addPaneID(pane): void {
  if (pane?.id) {
    const view: HTMLElement = atom.views.getView(pane);

    if (!view.getAttribute('data-pane-id')) {
      view.setAttribute('data-pane-id', pane.id);
    }
  }
}

export default initIDs;
