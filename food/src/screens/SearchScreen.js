import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useTextInput } from '../hooks/useTextInput';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  // input props will be {value: '', onChangeText: function}
  const { inputProps } = useTextInput('');
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar inputProps={inputProps} onTermSubmit={() => searchApi(term)} />
      {errorMessage && <Text>{errorMessage}</Text>}
      <Text>We have found {results.length} results</Text>
      <ResultsList title='Cost Effective' />
      <ResultsList title='Bit Pricier' />
      <ResultsList title='Big Spender' />
    </View>
  );
};
export default SearchScreen;
