import React from 'react';
import { Chip } from '@patternfly/react-core';

interface Shortcut {
  shortcut: string;
  description: string;
}

const shortcuts: Shortcut[] = [
  { shortcut: 'Mouse wheel', description: 'Zoom' },
  { shortcut: 'Click + Drag', description: 'Panning' },
  { shortcut: 'Shift + Drag', description: 'Select zoom area' },
  { shortcut: 'Right click', description: 'Contextual menu on nodes' },
  { shortcut: 'Single click', description: 'Details in side panel on nodes and edges' }
];

const makeShortcut = (shortcut: Shortcut): JSX.Element => {
  return (
    <div style={{ display: 'flex', marginBottom: '10px' }}>
      <div style={{ flex: '40%' }}>
        <Chip isReadOnly>{shortcut.shortcut}</Chip>
      </div>
      <div style={{ flex: '60%' }}>{shortcut.description}</div>
    </div>
  );
};

export const MeshShortcuts = (): JSX.Element => (
  <>
    {shortcuts.map(
      (s: Shortcut): JSX.Element => {
        return makeShortcut(s);
      }
    )}
  </>
);
