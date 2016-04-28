import { ComponentClass, ReactNode } from 'react';

interface HighlightedProps {
  children?: ReactNode;
  highlightedText: string;
  matchClass?: string;
}

export default function Highlighted<T>(InputTemplate: ComponentClass<T>): ComponentClass<T & HighlightedProps>
