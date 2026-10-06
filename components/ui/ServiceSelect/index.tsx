'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown } from 'lucide-react';

export default function ServiceSelect({
  name,
  placeholder,
  options,
  tone = 'light',
}: {
  name: string;
  placeholder: string;
  options: string[];
  tone?: 'light' | 'onPurple';
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [box, setBox] = useState({ top: 0, left: 0, width: 0 });
  const root = useRef<HTMLDivElement>(null);

  const place = () => {
    const node = root.current;
    const field = node?.closest('[data-select-field]') ?? node;
    const rect = field?.getBoundingClientRect();
    if (!rect) return;
    const width = Math.max(rect.width, 220);
    const left = Math.min(rect.left, window.innerWidth - width - 12);
    setBox({ top: rect.bottom + 6, left: Math.max(8, left), width });
  };

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div ref={root} className="relative min-w-0">
      <input type="text" name={name} value={value} required readOnly tabIndex={-1} className="pointer-events-none absolute h-0 w-0 opacity-0" />
      <button
        type="button"
        onClick={() => {
          place();
          setOpen((current) => !current);
        }}
        className={`flex h-12 w-full items-center justify-between gap-2 text-left text-[14px] outline-none ${
          tone === 'light'
            ? 'rounded-[8px] border border-[#e4e7f2] bg-white px-3 text-[#6d7a9a] focus:border-[#5b4dff]'
            : 'min-w-0 bg-transparent text-[#24315c]'
        }`}
      >
        <span className={value ? 'text-[#24315c]' : 'text-[#8b93a7]'}>{value || placeholder}</span>
        <ChevronDown size={16} className={`shrink-0 text-[#8b93a7] transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && createPortal(
        <ul
          style={{ top: box.top, left: box.left, width: box.width }}
          className="fixed z-[300] max-h-56 overflow-auto rounded-[10px] border border-[#eceef5] bg-white py-1 shadow-[0_12px_30px_rgba(23,26,58,0.16)]"
        >
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                onClick={() => {
                  setValue(option);
                  setOpen(false);
                }}
                className={`block w-full whitespace-nowrap px-3 py-2.5 text-left text-[14px] ${value === option ? 'bg-[#ece8ff] font-semibold text-[#5b4dff]' : 'text-[#24315c] hover:bg-[#f6f7fb]'}`}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>,
        document.body
      )}
    </div>
  );
}
