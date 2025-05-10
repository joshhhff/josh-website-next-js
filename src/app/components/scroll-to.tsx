'use client';
import { useEffect } from 'react';

export default function ScrollTo({ id }: { id: string }) {
  useEffect(() => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [id]);

  return null;
}