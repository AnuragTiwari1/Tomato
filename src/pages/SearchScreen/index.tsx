import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, TextInput, SafeAreaView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
import {PlacesSuggestion} from '../../interfaces/IPlacesSuggestions';
import {CitiesServices} from '../../services/cities';
import {LocationInput} from '../landing/components/LocationInput';
import {TIP_TEXT} from '../../lang/common';

export const SearchScreen = () => {
  const [suggestions, setSuggestions] = React.useState<PlacesSuggestion[]>([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);
  const navigation = useNavigation();
  const inputRef = React.useRef<TextInput>();

  const citiesServices = new CitiesServices();

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  React.useEffect(() => {
    if (searchQuery.length >= 3) {
      setLoading(true);
      citiesServices
        .getCitySuggestions(searchQuery)
        .then(({data}) => {
          setLoading(false);
          setSuggestions(data.location_suggestions);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [searchQuery]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.wrapper}>
        <SharedElement id={'locationInput'}>
          <LocationInput
            onFocus={() => {}}
            value={searchQuery}
            isLoading={isLoading}
            ref={(input) => {
              if (input) {
                inputRef.current = input;
                input.focus();
              }
            }}
            onChangeText={setSearchQuery}
          />
        </SharedElement>
        <Text style={styles.tips_text}>{TIP_TEXT}</Text>
        <FlatList
          data={suggestions}
          renderItem={({item}) => (
            <Text
              style={styles.suggestion_text}
              onPress={() => {
                navigation.navigate('Restaurants', {cityId: item.id});
              }}>
              {item.name}
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: '5%',
  },
  tips_text: {
    color: 'grey',
  },
  suggestion_text: {
    paddingVertical: '5%',
  },
});
