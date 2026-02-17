import type { PropsWithChildren } from 'react';

export default function Modal({
  open, title, onClose, children,
}: PropsWithChildren<{ open: boolean; title?: string; onClose: () => void }>) {
  if (!open) return null;
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {title && <h3>{title}</h3>}
        {children}
        <div style={{ textAlign: 'right', marginTop: 8 }}>
          <button className="button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
