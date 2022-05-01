import * as Font from "expo-font";
export default async function loadFonts() {
  try {
    await Font.loadAsync({
      "RobotoSlab-Regular": require(".././assets/fonts/RobotoSlab-Regular.ttf"),
      "RobotoSlab-Thin": require(".././assets/fonts/RobotoSlab-Thin.ttf"),
      "RobotoSlab-Bold": require(".././assets/fonts/RobotoSlab-Bold.ttf"),
    });
  } catch (error) {
    console.log({ "font-loading-error": error });
  }
}
