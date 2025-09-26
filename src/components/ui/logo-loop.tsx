import { cn } from '@/lib/utils';

type LogoLoopProps = {
  children: React.ReactNode;
  className?: string;
};

export default function LogoLoop({ children, className }: LogoLoopProps) {
  return (
    <div className={cn('logo-loop-container', className)}>
      <div className="logo-loop-content">{children}</div>
      <div className="logo-loop-content" aria-hidden="true">
        {children}
      </div>
    </div>
  );
}
