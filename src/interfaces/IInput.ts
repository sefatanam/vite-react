import { ChangeEventHandler, ReactNode } from 'react';

export interface IInput {
  label: string;
  value: string;
  onChange: ChangeEventHandler<any>;
  placeholder: string;
  children?: ReactNode;
}
