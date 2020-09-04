/*
 * fileName: Icons.tsx
 * description: this file contains the icons used in the project
 */

import * as React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IconProps, {IconSizes} from './iconProps';

export const iconSizes: Record<IconSizes, number> = {
  small: 12,
  base: 18,
  large: 50,
};

export const LocationIcon = (props: IconProps) => (
  <FontAwesome
    name="map-marker"
    size={iconSizes[props.size || 'base']}
    color={props.color || 'grey'}
  />
);
