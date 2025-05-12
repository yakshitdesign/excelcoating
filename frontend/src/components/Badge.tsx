import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'yellow' | 'blue' | 'green' | 'orange';
  className?: string;
}

const variantStyles = {
  yellow: 'bg-[#FFF3DD] text-[#7F5F15]',
  blue: 'bg-blue-100 text-blue-700',
  green: 'bg-green-100 text-green-700',
  orange: 'bg-orange-100 text-orange-700',
};

export default function Badge({ children, variant = 'yellow', className = '' }: BadgeProps) {
  return (
    <div className="flex items-center gap-2">
      <div className={`${variantStyles[variant]} flex items-center gap-1 text-[14px] px-3 py-2 rounded-full ${className}`}>
        {children}
      </div>
    </div>
  );
}
