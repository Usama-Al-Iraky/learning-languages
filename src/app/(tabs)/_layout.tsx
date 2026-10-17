import { colors } from "@/constants";
import {
  IconChartLine,
  IconHome,
  IconMessage2,
} from "@tabler/icons-react-native";
import { Redirect, Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
export default function TabLayout() {
  const iconSize = 30;
  const logIn = false;

  if (logIn) {
    return <Redirect href="/auth" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors["light-gray"],
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIconStyle: {
            height: "100%",
          },
          tabBarIcon: ({ color }) => (
            <View className="h-full items-center justify-center">
              <IconHome size={iconSize} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="conversations"
        options={{
          title: "Conversations",
          tabBarIcon: () => (
            <View
              style={{ elevation: 8 }}
              className="size-20 rounded-full justify-center items-center -top-5 border-4 border-white bg-primary shadow "
            >
              <IconMessage2 color={colors.white} size={40} strokeWidth={1.5} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="evaluation"
        options={{
          title: "Evaluation",
          tabBarIconStyle: {
            height: "100%",
          },
          tabBarIcon: ({ color }) => (
            <View className="h-full items-center justify-center">
              <IconChartLine size={iconSize} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    width: "65%",
    start: "50%",
    transform: [{ translateX: "-50%" }],
    bottom: 20,
    height: 70,
    backgroundColor: colors.white,
    borderRadius: 35,
    elevation: 4,
    paddingBottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
