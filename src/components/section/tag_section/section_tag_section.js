// @flow

import React from 'react';
import {withTheme, Theme} from 'react-native-paper';

import {
  TagSectionContainer,
  TagAttribute
} from './components/section_tag_section_component';

/**
 * Tag Section
 * @param {Array of TagItemType} tags - tags attribute card (required)
 */

type TagItemType = {
  name: string
};

type TagComponent = {
  theme: Theme,
  tags?: Array<TagItemType>
};

const TagSectionComponent = (props: TagComponent) => {
  const {
    theme: {fonts},
    tags
  } = props;
  if (!Array.isArray(tags)) {
    return null;
  }
  return (
    <TagSectionContainer>
      {tags.map((item, i) => (
        <TagAttribute key={i} fonts={fonts} name={item.name} />
      ))}
    </TagSectionContainer>
  );
};

const TagSection = withTheme(TagSectionComponent);
export {TagSection};
