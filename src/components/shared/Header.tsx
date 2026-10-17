import { colors } from "@/constants";
import { IconBell, IconSettings } from "@tabler/icons-react-native";
import { useTranslation } from "react-i18next";

import { Pressable, Text, View } from "react-native";

const Header = () => {
  const { t } = useTranslation();
  const iconStyle = {
    color: colors.primary,
    size: 22,
    strokeWidth: 1.5,
  };
  return (
    <View className="flex-row items-center justify-between px-4 py-2 bg-white rounded-b-3xl shadow">
      <View className="flex-row items-center gap-2">
        {/* Image */}
        <View className="w-12 aspect-square rounded-full bg-gray-200 border-2 border-extra-light-gray"></View>

        {/* user info */}
        <View>
          <Text className="text-xs font-medium text-t-light">
            {t("welcome")}
          </Text>
          <Text className="font-medium text-primary"> Ahmed </Text>
        </View>
      </View>

      {/* Navigations */}
      <View className="flex-row gap-4">
        <Pressable>
          <IconSettings {...iconStyle} />
        </Pressable>
        <Pressable>
          <IconBell {...iconStyle} />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
