/*
 * fileName: Icons.tsx
 * description: this file contains the icons used in the project
 */

import * as React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {IconProps as VectorIconProps} from 'react-native-vector-icons/Icon';
import IconProps, {IconSizes} from './iconProps';

export type INamedIcons = Omit<VectorIconProps, 'name'>;

export const iconSizes: Record<IconSizes, number> = {
  small: 12,
  base: 18,
  large: 50,
};

const WithIconDefaults = (Icon: React.FC<INamedIcons>) => {
  return (props: IconProps & Omit<INamedIcons, 'size' | 'color'>) => (
    <Icon
      {...props}
      size={iconSizes[props.size || 'base']}
      color={props.color || 'grey'} //TODO: make standards for colors for eg: 'primary', 'secondary' & 'muted' etc;
    />
  );
};

export const LocationIcon = WithIconDefaults((props: INamedIcons) => (
  <FontAwesome name="map-marker" {...props} />
));

export const MenuIcon = WithIconDefaults((props: INamedIcons) => {
  return <Entypo name="dots-three-vertical" {...props} />;
});
