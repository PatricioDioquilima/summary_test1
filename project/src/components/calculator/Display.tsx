import React from 'react';

interface DisplayProps {
  value: string;
  operation: string | null;
  previousValue: number | null;
}

export function Display({ value, operation, previousValue }: DisplayProps) {
  return (
    <div className="p-6 bg-gray-900">
      <div className="text-right">
        <div className="text-gray-400 text-sm h-6">
          {previousValue !== null ? `${previousValue} ${operation}` : ''}
        </div>
        <div className="text-white text-4xl font-light tracking-wider">
          {value}
        </div>
      </div>
    </div>
  );
}