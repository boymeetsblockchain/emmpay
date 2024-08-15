import { Slot } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function RootLayout() {
  return <GestureHandlerRootView>
    <BottomSheetModalProvider>
      <Slot/>
    </BottomSheetModalProvider>
  </GestureHandlerRootView>
}
