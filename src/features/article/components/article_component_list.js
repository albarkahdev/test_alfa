// @flow

import React from 'react';
import {ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import articles from '../../../dummy/article.json';
import {ROUTE_NAME} from '../../../routes/route';
import HeaderList from '../../../components/header_list/component_header_list';
import ArticleItem from './article_component_item';

const imgArticle =
  'https://image.freepik.com/free-vector/blogger-creative-writing_41910-289.jpg';
const tagsSample = [{name: 'tag-one'}, {name: 'tag-two'}, {name: '+4 more'}];

export default () => {
  const navigation = useNavigation();
  const jumpTab = () => navigation.jumpTo(ROUTE_NAME.ARTICLE);
  const item = {
    category: 'Category',
    title: 'Type the Title Here',
    description: 'Type the description here. Height adjustable',
    cover: imgArticle,
    tags: tagsSample
  };

  return (
    <View>
      <HeaderList title="Hot News" onShowAll={jumpTab} />
      <ScrollView>
        {articles.list.map((article, i) => {
          return <ArticleItem key={i} item={item} />;
        })}
      </ScrollView>
    </View>
  );
};
