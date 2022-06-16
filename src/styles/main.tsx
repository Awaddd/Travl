import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styled from '../utils/Styled';
import { spacing } from '../utils/theme';

export const ScreenTitle = styled(Text, ({ color }) => ({
  flex: 1,
  color,
  textAlign: 'center',
  fontWeight: '500',
  fontSize: 18,
}));

export const Panel = styled(View, ({ color }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: spacing.md,
  padding: spacing.xs,
  backgroundColor: color,
  borderRadius: spacing.xs,
}));

export const Label = styled(Text, ({ color, rightAligned }) => ({
  padding: spacing.md,
  fontSize: 16,
  color,
  fontWeight: '500',
  marginLeft: rightAligned ? 'auto' : 0,
}));
