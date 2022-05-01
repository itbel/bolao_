import { ReactElement, forwardRef } from "react";
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
  StyleProp,
  TextStyle,
} from "react-native";

const styles = StyleSheet.create({
  input: {
    marginBottom: 48,
    color: "#fff",
    borderBottomColor: "#fff",
    fontFamily: "RobotoSlab-Regular",
    fontSize: 16,
    borderBottomWidth: 2,
  },
});
type RNTextInputPropsExtend = RNTextInputProps & {
  style?: StyleProp<TextStyle>;
};
const SimpleTextInput = forwardRef<RNTextInput, RNTextInputPropsExtend>(
  ({ style, ...props }, ref): ReactElement => {
    return (
      <RNTextInput
        ref={ref}
        placeholderTextColor={"#b5b5b5"}
        style={[styles.input, style]}
        {...props}
      />
    );
  }
);

SimpleTextInput.displayName = "SimpleTextInput";

export default SimpleTextInput;
