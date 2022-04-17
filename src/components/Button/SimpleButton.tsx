import {
    TouchableOpacity,
    Text,
    TextStyle,
    ViewStyle,
    ActivityIndicator,
} from "react-native";
type SimpleButtonProps = {
    label: string;
    onPress: () => void;
    buttonStyle?: ViewStyle;
    labelStyle?: TextStyle;
    isLoading?: boolean;
};
export default function SimpleButton(props: SimpleButtonProps) {
    const buttonStyle = props?.buttonStyle
        ? { ...props.buttonStyle }
        : { padding: 16, borderRadius: 8, backgroundColor: "tomato" };
    const labelStyle = props?.labelStyle
        ? { ...props.labelStyle }
        : { color: "white", fontSize: 16 };
    labelStyle;
    return (
        <TouchableOpacity
            disabled={props.isLoading}
            style={buttonStyle}
            onPress={props.onPress}
        >
            {props.isLoading ? (
                <ActivityIndicator
                    size="large"
                    color={labelStyle.color ?? "#000"}
                ></ActivityIndicator>
            ) : (
                <Text style={labelStyle}>{props.label}</Text>
            )}
        </TouchableOpacity>
    );
}
