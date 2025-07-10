import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export const SectionWrapper = ({ id, children, className }: { id: string, children: ReactNode, className?: string }) => (
    <section id={id} className={cn('min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-24', className)}>
      <div className="container mx-auto text-center">
        {children}
      </div>
    </section>
  );
