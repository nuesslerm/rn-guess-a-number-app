import { StyleSheet } from 'react-native';

// globally managed styleSheet
// can be imported as `import DefaultStyles from "../default-styles"`
// then e.g. <Text style={DefaultStyles.bodyText}>Hello World</Text>
export default StyleSheet.create({
  bodyText: {
    fontFamily: 'open-sans',
    color: 'red',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
});
