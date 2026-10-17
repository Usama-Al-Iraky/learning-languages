import { colors } from "@/constants";
import {
  IconCircleCaretRight,
  IconClockHour4,
  IconFileText,
} from "@tabler/icons-react-native";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import Button from "../shared/Button";

const CurrentLesson = () => {
  const { t } = useTranslation();

  const parts = [
    {
      id: "p1",
      value: "4 - 6",
      word: t("mins"),
      icon: IconClockHour4,
    },
    {
      id: "p1",
      value: "2 of 8",
      word: t("lessons"),
      icon: IconFileText,
    },
  ];
  return (
    <View className="p-4 rounded-3xl gap-6 bg-primary">
      <View className="flex-row gap-4">
        {/*  */}
        <View className="flex-2 gap-4 justify-between">
          {/*  */}
          <View className="px-2 py-1 self-start bg-white/10 border border-white/20 rounded-full shadow-inner ">
            <Text className="text-white text-sm">A1 · Beginner</Text>
          </View>

          {/*  */}
          <View className="gap-6">
            <Text className="text-white font-medium">
              <Text className="text-sm font-light line-clamp-1">
                {" "}
                {t("lesson")} ·{" "}
              </Text>
              Hotels & accommodation
            </Text>

            <Text className="text-white font-medium">
              <Text className="text-sm font-light">{t("learning_goal")}:</Text>
              Travel
            </Text>
          </View>

          <View className="flex-row gap-4">
            {parts.map((part) => (
              <View key={part.id} className="flex-row items-center gap-1">
                <part.icon size={12} color={colors.white} strokeWidth={1} />
                <Text className="text-xs font-light text-white">
                  {part.value} {part.word}
                </Text>
              </View>
            ))}
            <View></View>
          </View>
        </View>

        {/*  */}
        <View className="flex-1 items-center gap-2">
          <View className="w-full aspect-square bg-white/10 rounded-full"></View>
          <Text className="text-xs font-light text-white">
            {t("overall_progress")}
          </Text>
          <Text className="text-white font-medium text-2xl"> {"65%"} </Text>
        </View>
      </View>

      <Button
        type="primary"
        title={t("continue_lesson")}
        Icon={IconCircleCaretRight}
        customBtnStyle="bg-white"
        customTextStyle="!text-primary"
        customIconColor={colors.primary}
      />
    </View>
  );
};

export default CurrentLesson;
