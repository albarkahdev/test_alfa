/**
 * Shimmer
 * @param {Number} width - width box (required)
 * @param {Number} height - height box (required)
 * @param {Number} widthShimmer - width shimmer default 0.7 (optional)
 * @param {Number} duration - animation duration default 1s (optional)
 * @param {Number} longShimmer - duration shimmer default 3s (optional)
 * @param {Array of Color} colorShimmer - three color shimmer (optional)
 * @param {Boolean} reverse - reverse animate default false (optional)
 * @param {Boolean} autoRun - auto run animation default false (required)
 * @param {Number} borderRadius - box border radius default 8 (optional)
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, Animated, StyleProp} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

import {rw, rh, rbr} from '../../utils/responsive';

const LinearGradientFlex = styled(LinearGradient)`
  flex: 1;
`;

const ContentShimmer = styled.View`
  flex: 1;
`;

const ChildrenShimmer = styled.View`
  width: 0px;
  height: 0px;
`;

type PropsCustomLinearGradient = {
  locationStart: number,
  colorShimmer: string,
  widthShimmer: number
};

class CustomLinearGradient extends Component<PropsCustomLinearGradient> {
  render() {
    const {locationStart, colorShimmer, widthShimmer} = this.props;
    return (
      <LinearGradientFlex
        colors={colorShimmer}
        start={{x: -1, y: 0.5}}
        end={{x: 2, y: 0.5}}
        locations={[
          locationStart + widthShimmer,
          locationStart + 0.5 + widthShimmer / 2,
          locationStart + 1
        ]}
      />
    );
  }
}

const AnimatedLinearGradient = Animated.createAnimatedComponent(
  CustomLinearGradient
);

type PropsShimmer = {
  width: number,
  height: number,
  reverse?: boolean,
  colorShimmer?: Array<string>,
  style?: StyleProp,
  widthShimmer?: number,
  children: React$Node,
  borderRadius?: number,
  autoRun: boolean,
  longShimmer?: number,
  duration?: number
};

type StateShimmer = {
  visible: boolean,
  beginShimmerPosition: Animated.Value
};

class Shimmer extends Component<PropsShimmer, StateShimmer> {
  constructor(props: PropsShimmer) {
    super(props);

    this.state = {
      visible: false,
      beginShimmerPosition: new Animated.Value(-1)
    };
  }
  componentDidMount() {
    const {autoRun = false, longShimmer} = this.props;
    if (autoRun) {
      this.loopAnimated();
    }
    setTimeout(() => {
      this.setState({visible: true});
    }, longShimmer);
  }
  loopAnimated() {
    const shimmerAnimated = this.getAnimated();
    const {visible} = this.state;
    shimmerAnimated.start(() => {
      if (!visible) {
        this.loopAnimated();
      }
    });
  }
  getAnimated = () => {
    this.state.beginShimmerPosition.setValue(-1);
    return Animated.timing(this.state.beginShimmerPosition, {
      toValue: 1,
      duration: this.props.duration
    });
  };
  render() {
    const {
      width = 200,
      height = 15,
      reverse = false,
      colorShimmer = ['#ebebeb', '#c5c5c5', '#ebebeb'],
      style,
      widthShimmer = 0.7,
      children,
      borderRadius = 8
    } = this.props;
    const {visible} = this.state;
    const widthResponsive = rw(width);
    const heightResponsive = rh(height);
    const widthShimmerResponsive = rw(widthShimmer);
    const borderRadiusResponsive = rbr(borderRadius);
    let beginPostioner = -0.7;
    let endPosition = 0.7;
    if (reverse) {
      beginPostioner = 0.7;
      endPosition = -0.7;
    }
    const newValue = this.state.beginShimmerPosition.interpolate({
      inputRange: [-1, 1],
      outputRange: [beginPostioner, endPosition]
    });
    return (
      <View
        style={
          !visible
            ? [
                {height: heightResponsive, width: widthResponsive},
                styles.container,
                {borderRadius: borderRadiusResponsive},
                style
              ]
            : []
        }>
        {!visible ? (
          <ContentShimmer>
            <AnimatedLinearGradient
              locationStart={newValue}
              colorShimmer={colorShimmer}
              widthShimmer={widthShimmerResponsive}
            />
            <ChildrenShimmer>{this.props.children}</ChildrenShimmer>
            {/* {((style && style.borderRadius) || hasBorder) &&
            Platform.OS === 'android' ? (
              <View
                style={{
                  position: 'absolute',
                  top: -40,
                  bottom: -40,
                  right: -40,
                  left: -40,
                  borderRadius: width / 2 + 40 / 2,
                  borderWidth: 40,
                  borderColor: backgroundColorBehindBorder
                }}
              />
            ) : null} */}
          </ContentShimmer>
        ) : (
          children
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden'
  }
});

export default Shimmer;
