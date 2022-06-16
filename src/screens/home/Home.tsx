import { useNavigation, useTheme } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { RootStackProps } from '../../../App';
import Container from '../../containers/Container';
import styled from '../../utils/Styled';
import { spacing } from '../../utils/theme';
import Header from '../../components/Header';

export type HomeProps = StackNavigationProp<RootStackProps, 'Home'>;

const Home = () => {
  const theme = useTheme();
  const { navigate } = useNavigation<HomeProps>();

  return (
    <Container>
      <Screen>
        <Header
          name="Travl"
          icon={
            <IconButton
              icon="cog"
              color={theme.colors.text}
              size={21}
              onPress={() => navigate('Settings')}
            />
          }
        />
        <Main color={theme.colors.card}>
          <Subtitle>Countries:</Subtitle>
        </Main>
      </Screen>
    </Container>
  );
};

const Screen = styled(View, {
  flex: 1,
});

const Main = styled(View, ({ color }) => ({
  backgroundColor: color,
  paddingHorizontal: spacing.rl,
  paddingVertical: spacing.rl,
  marginTop: spacing.xl,
  marginHorizontal: spacing.md,
  borderRadius: spacing.sm,
}));

const Subtitle = styled(Text, {
  fontSize: 14,
  marginRight: spacing.sm,
});

export default Home;
