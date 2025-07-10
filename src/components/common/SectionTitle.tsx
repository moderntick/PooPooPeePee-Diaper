import type { ReactNode } from 'react';

export const SectionTitle = ({ children }: { children: ReactNode }) => (
    <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-12">
      {children}
    </h2>
  );
