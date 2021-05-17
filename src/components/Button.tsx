import { Icon } from './Icon';

import '../styles/button.scss';
import { ButtonHTMLAttributes } from 'react';

export type ButtonIconName =
  | 'action'
  | 'comedy'
  | 'documentary'
  | 'drama'
  | 'horror'
  | 'family';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: ButtonIconName;
  selected: boolean;
}

export function Button({ iconName, title, selected, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      {...(selected && { className: 'selected' })}
      {...rest}
    >
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </button>
  );
}
