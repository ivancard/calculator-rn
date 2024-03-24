
import { Pressable, Text } from "react-native"
import { colors, styles } from "../../Config/Theme/app-theme"

interface Props {
    label: string,
    color?: string,
    doubleSize?: boolean,
    darkText?: boolean,
    onPress: () => void
}

export const CalculatorButton = ({
    label,
    color = colors.darkGray,
    doubleSize = false,
    darkText = false,
    onPress }: Props) => {
    return (
        <Pressable
            onPress={() => onPress()}
            style={({ pressed }) => ({
                ...styles.button,
                backgroundColor: color,
                width: (doubleSize) ? 180 : 80,
                opacity: pressed ? 0.8 : 1

            })}>
            <Text style={{
                ...styles.buttonText,
                color: (darkText) ? 'black' : 'white'
            }}>{label}</Text>
        </Pressable>
    )
}
