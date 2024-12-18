import React from 'react';
import { Equal, Delete, Plus, Minus, X, Divide } from 'lucide-react';
import { Button } from '../ui/Button';

interface KeypadProps {
  onNumberClick: (num: string) => void;
  onOperationClick: (op: string) => void;
  onClear: () => void;
  onCalculate: () => void;
}

export function Keypad({ onNumberClick, onOperationClick, onClear, onCalculate }: KeypadProps) {
  return (
    <div className="bg-gray-50 p-6 grid grid-cols-4 gap-3">
      <Button variant="danger" className="col-span-3" onClick={onClear}>
        <Delete className="w-5 h-5" />
      </Button>
      <Button variant="operation" onClick={() => onOperationClick('/')}>
        <Divide className="w-5 h-5" />
      </Button>
      
      {[7, 8, 9].map((num) => (
        <Button key={num} variant="number" onClick={() => onNumberClick(num.toString())}>
          {num}
        </Button>
      ))}
      <Button variant="operation" onClick={() => onOperationClick('*')}>
        <X className="w-5 h-5" />
      </Button>
      
      {[4, 5, 6].map((num) => (
        <Button key={num} variant="number" onClick={() => onNumberClick(num.toString())}>
          {num}
        </Button>
      ))}
      <Button variant="operation" onClick={() => onOperationClick('-')}>
        <Minus className="w-5 h-5" />
      </Button>
      
      {[1, 2, 3].map((num) => (
        <Button key={num} variant="number" onClick={() => onNumberClick(num.toString())}>
          {num}
        </Button>
      ))}
      <Button variant="operation" onClick={() => onOperationClick('+')}>
        <Plus className="w-5 h-5" />
      </Button>
      
      <Button variant="number" className="col-span-2" onClick={() => onNumberClick('0')}>
        0
      </Button>
      <Button variant="number" onClick={() => onNumberClick('.')}>
        .
      </Button>
      <Button variant="primary" onClick={onCalculate}>
        <Equal className="w-5 h-5" />
      </Button>
    </div>
  );
}