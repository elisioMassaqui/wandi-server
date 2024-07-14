import * as monaco from 'monaco-editor';

const container = document.getElementById('editor');
const editor = monaco.editor.create(container, {
    value: `#include <stdio.h>

    int main() {
      printf("Olá, Wandi!\\n");
      return 0;
    }`,
    language: 'c',
    theme: 'vs-dark',
    automaticLayout: true
});
