interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ variant = 'primary', children, onClick, className = '', type = 'button' }: ButtonProps) {
  const baseStyles = 'rounded-[10px] px-6 py-3 transition-all';
  
  const variants = {
    primary: 'bg-[#6C63FF] text-white hover:bg-[#5850E5]',
    secondary: 'bg-white text-[#6C63FF] border-2 border-[#6C63FF] hover:bg-[#F6F6F6]'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
