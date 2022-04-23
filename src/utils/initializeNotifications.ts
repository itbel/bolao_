import * as Notifications from "expo-notifications";
import { isDevice } from "expo-device";
import { Platform } from "react-native";
const initNotifications = async (): Promise<void> => {
    if (isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== "granted") return;
        const token = await Notifications.getExpoPushTokenAsync();
        console.log(token);
        if (Platform.OS === "android") {
            Notifications.setNotificationChannelAsync("default", {
                name: "default",
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: "#FF231F7C",
            });
        }
    }
};

export default initNotifications;
