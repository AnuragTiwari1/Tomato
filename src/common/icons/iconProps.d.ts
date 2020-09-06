/*
 * fileName: iconProps.ts
 * description: this file contains the type definitions used in icons
 */

export type IconSizes = 'small' | 'base' | 'large';
export default interface IconProps {
  size?: IconSizes;
  color?: 'string';
}
