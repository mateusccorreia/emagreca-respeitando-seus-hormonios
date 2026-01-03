import type { ElementType, ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type RevealProps<T extends ElementType = 'div'> = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: T;
};

export function Reveal<T extends ElementType = 'div'>({
  children,
  className = '',
  delay = 0,
  as,
}: RevealProps<T>) {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2, once: true });
  const Tag = (as || 'div') as ElementType;
  const sharedRef = ref as unknown as React.Ref<Element>;

  return (
    <Tag
      ref={sharedRef}
      className={`transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] opacity-0 translate-y-12 motion-reduce:transition-none motion-reduce:hover:transform-none ${isInView ? 'opacity-100 translate-y-0' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
