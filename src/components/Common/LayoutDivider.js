import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';

const LayoutDivider = (props) => {
    const defaultHeight = 10;
    const { colors } = useTheme();

    return (
        <View style={{ flex: 1, height: defaultHeight, backgroundColor: colors.backgroundSecondary, ...props.style }} />
    )
}

export default LayoutDivider;