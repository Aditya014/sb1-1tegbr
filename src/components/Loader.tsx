import React from 'react';
import { Loader2 } from 'lucide-react';

export const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-[var(--primary)] mx-auto mb-4" />
        <p className="text-[var(--primary)] text-lg">Initializing System...</p>
      </div>
    </div>
  );
};