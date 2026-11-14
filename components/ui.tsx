import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

export function ActionLink({ href, children, primary = false }: {
  href: string;
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <a className={`action ${primary ? 'action-primary' : 'action-secondary'}`} href={href}>
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="tag">{children}</span>;
}
