// @flow

import React, {useState, useContext, useEffect} from 'react';
import {withTheme, ActivityIndicator} from 'react-native-paper';
import {FlatList} from 'react-native';
import {ThemeContext} from 'styled-components';

import {Container} from './article_screen_styles';
import {COLORS} from '../../../utils/colors';
import {
  CategoryButton,
  CategoryItem,
  CategoryText
} from '../components/article_component_category';
import ArticleItem from '../components/article_component_item';

const categories = [
  {name: 'All News'},
  {name: 'Entertainment'},
  {name: 'Otomotif'},
  {name: 'Bisnis'}
];

const Article = props => {
  const {
    theme: {fonts},
    getArticle
  } = props;
  const [selectedCategory, setCategory] = useState('All News');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const theme = useContext(ThemeContext);
  let intervalRefresh = null;

  useEffect(() => {
    getArticle(setLoading, setError, setData);
    intervalRefresh = setInterval(() => {
      getArticle(setLoading, setError, setData);
    }, 300000);
    return () => clearInterval(intervalRefresh);
  }, []);

  if (loading) {
    return <ActivityIndicator color={theme?.secondary} />;
  }
  if (error) {
    return (
      <CategoryText
        IsSelected
        color={COLORS.DARK_GRAY}
        fontFamily={fonts.regular.fontFamily}>
        Request gagal
      </CategoryText>
    );
  }

  const filteringData = () => {
    if (selectedCategory === 'All News') {
      return data;
    }
    return data.filter(item => {
      const name = selectedCategory.toUpperCase();
      const data_name = item.category.toUpperCase();
      const findText = data_name.match(name);
      if (findText !== null) {
        return true;
      }
    });
  };

  const handleCategory = name => {
    setCategory(name);
  };

  const filteredData = filteringData();

  return (
    <Container>
      <FlatList
        data={categories}
        renderItem={({item, index}) => {
          const isFirstItem = index === 0;
          const IsSelected = selectedCategory === item.name;
          const handleClik = () => handleCategory(item.name);
          return (
            <CategoryButton onPress={handleClik}>
              <CategoryItem isFirstItem={isFirstItem}>
                <CategoryText
                  IsSelected={IsSelected}
                  color={IsSelected ? theme.secondary : COLORS.DARK_GRAY}
                  fontFamily={
                    IsSelected
                      ? fonts.thin.fontFamily
                      : fonts.regular.fontFamily
                  }>
                  {item.name}
                </CategoryText>
              </CategoryItem>
            </CategoryButton>
          );
        }}
        keyExtractor={(_, i) => i.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      {filteredData.map((item, i) => {
        return <ArticleItem key={i} item={item} />;
      })}
    </Container>
  );
};

export default withTheme(Article);
