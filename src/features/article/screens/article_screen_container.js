// @flow

import {connect} from 'react-redux';

import ArticleScreen from './article_screen';
import {reqArticle} from '../article_action';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  getArticle: (setLoading: Function, setError: Function, setData: Function) =>
    dispatch(reqArticle(setLoading, setError, setData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleScreen);
