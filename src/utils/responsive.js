// @flow

// packages
import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';

const Constants = {
  PLATFORM: {
    IOS: 'ios',
    ANDROID: 'android'
  }
};

const HEIGHT: number = 640;
const WIDTH: number = 360;

const isIOS = () => Platform.OS === Constants.PLATFORM.IOS;

const isIphoneX = () => {
  let ratio = height / width;
  if (width > height) {
    ratio = width / height;
  }
  return isIOS() && ratio >= 2.0;
};

// Retrieve initial screen's width
let screenWidth = Dimensions.get('window').width;

// Retrieve initial screen's height
let screenHeight = Dimensions.get('window').height;

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {string} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
const widthPercentageToDP = (widthPercent: ?string) => {
  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {string} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
const heightPercentageToDP = (heightPercent: ?string) => {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

/**
 * Event listener function that detects orientation change (every time it occurs) and triggers
 * screen rerendering. It does that, by changing the state of the screen where the function is
 * called. State changing occurs for a new state variable with the name 'orientation' that will
 * always hold the current value of the orientation after the 1st orientation change.
 * Invoke it inside the screen's constructor or in componentDidMount lifecycle method.
 * @param {object} that Screen's class component this variable. The function needs it to
 *                      invoke setState method and trigger screen rerender (this.setState()).
 */
const listenOrientationChange = (that: any) => {
  Dimensions.addEventListener('change', newDimensions => {
    // Retrieve and save new dimensions
    screenWidth = newDimensions.window.width;
    screenHeight = newDimensions.window.height;

    // Trigger screen's rerender with a state update of the orientation variable
    that.setState({
      orientation: screenWidth < screenHeight ? 'portrait' : 'landscape'
    });
  });
};

/**
 * Wrapper function that removes orientation change listener and should be invoked in
 * componentWillUnmount lifecycle method of every class component (UI screen) that
 * listenOrientationChange function has been invoked. This should be done in order to
 * avoid adding new listeners every time the same component is re-mounted.
 */
const removeOrientationListener = () => {
  Dimensions.removeEventListener('change', () => {});
};

const getHorizontalPercentage = (horizontalDp: number): string =>
  `${(horizontalDp * 100) / WIDTH}%`;
const getVerticalPercentage = (verticalDp: number): string =>
  `${(verticalDp * 100) / HEIGHT}%`;

const {height, width} = Dimensions.get('window');
const standardLength = width > height ? width : height;

const deviceHeight = isIphoneX()
  ? standardLength - 78 // iPhone X style SafeAreaView size in portrait
  : Platform.OS === 'android'
  ? standardLength - StatusBar.currentHeight
  : standardLength;

const responsiveFontPercentage = (percent: number) => {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
};

// guideline height for standard 5" device screen is 680
// our guideline height is from HEIGHT
const responsiveFontValue = (
  fontSize: number,
  standardScreenHeight: number = HEIGHT
) => {
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
};

const responsiveWidth = (dp: number) =>
  widthPercentageToDP(getHorizontalPercentage(dp));
const responsiveHeight = (dp: number) =>
  heightPercentageToDP(getVerticalPercentage(dp));
const responsiveBorderRadius = (dp: number) =>
  (responsiveWidth(dp) + responsiveHeight(dp)) / 2;

export {
  widthPercentageToDP,
  heightPercentageToDP,
  listenOrientationChange,
  removeOrientationListener,
  getHorizontalPercentage,
  getVerticalPercentage,
  responsiveFontPercentage as rfp,
  responsiveFontValue as rf,
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveBorderRadius as rbr
};
