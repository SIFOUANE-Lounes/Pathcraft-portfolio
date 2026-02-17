interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-[--bg-tertiary] rounded-[16px] p-6 shadow-[0_4px_12px_var(--card-shadow)] ${className}`}>
      {children}
    </div>
  );
}