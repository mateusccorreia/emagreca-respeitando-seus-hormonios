import type { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className = '', children }: SectionProps) {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2, once: true });

  return (
    <section
      id={id}
      ref={ref}
      className={`transition duration-500 ease-out opacity-0 translate-y-2 will-change-transform ${isInView ? 'opacity-100 translate-y-0' : ''
        } ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
