import { TouchableOpacity, Text, TextStyle, ViewStyle } from "react-native";
type SimpleButtonProps = {
    label: string;
    onPress: () => void;
    buttonStyle?: ViewStyle;
    labelStyle?: TextStyle;
};
export default function SimpleButton(props: SimpleButtonProps) {
    const buttonStyle = props?.buttonStyle
        ? { padding: 16, borderRadius: 8, backgroundColor: "tomato", ...props.buttonStyle }
        : { padding: 16, borderRadius: 8, backgroundColor: "tomato" };
    const labelStyle = props?.labelStyle
        ? { color: "white", fontSize: 16, ...props.labelStyle }
        : { color: "white", fontSize: 16 };
    labelStyle;
    return (
        <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
            <Text style={labelStyle}>{props.label}</Text>
        </TouchableOpacity>
    );
}
