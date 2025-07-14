import type { ReactNode } from 'react';

export const SectionTitle = ({ children }: { children: ReactNode }) => (
    <h2 className="font-headline text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-12">
      {children}
    </h2>
  );
