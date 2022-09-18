import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, TouchableOpacity, View, FlatList, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import logoImg from '../../assets/logo-nlw-esports.png';

import { GameParams } from '../../@types/navigation';
import { THEME } from '../../theme';
import { styles } from './styles';

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { DuoCard } from '../../components/DuoCard';
import { useEffect, useState } from 'react';
import { IGameAd } from '../../interfaces/IGameAd';

export function Game() {
  const [gameAds, setGameAds] = useState<IGameAd[]>([])
  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  useEffect(() => {
    fetch(`http://192.168.0.164:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => {
        setGameAds(data);
      })
  }, []);

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />

          <View style={styles.right} />
        </View>

        <Image source={{ uri: game.bannerUrl }} style={styles.cover} resizeMode="cover" />

        <Heading title={game.title} subtitle="Encontre seu duo" />

        <FlatList
          data={gameAds}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <DuoCard key={item.id} data={item} onConnect={() => {}}  />
          }
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            gameAds.length ? styles.contentList : styles.emptyListContent,
          ]}
          style={styles.containerList}
          horizontal
          ListEmptyComponent={() =>
            <Text style={styles.emptyListText}>
              Não há anúncios publicados para esse jogo!
            </Text>
          }
        >
        </FlatList>
      </SafeAreaView>
    </Background>
  );
}
