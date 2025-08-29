import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div 
      className={`bg-white rounded-lg border shadow-sm overflow-hidden ${className} ${onClick ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

type CardHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

Card.Header = function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`p-4 border-b ${className}`}>
      {children}
    </div>
  );
};

type CardContentProps = {
  children: React.ReactNode;
  className?: string;
};

Card.Content = function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

type CardFooterProps = {
  children: React.ReactNode;
  className?: string;
};

Card.Footer = function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`p-4 border-t bg-gray-50 ${className}`}>
      {children}
    </div>
  );
};

export default Card;