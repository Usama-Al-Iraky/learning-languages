import Fire from "@/assets/icons/fire-flame.svg";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import Button from "../shared/Button";

const StreakCard = () => {
  const { t } = useTranslation();

  const days = new Array(7).fill(1);
  return (
    <View className="p-4 rounded-3xl shadow bg-white gap-6">
      <View className="flex-row gap-4">
        <View className="flex-2">
          <View className="flex-row items-center">
            <Fire />
            <View>
              <Text className="text-t-dark text-xl font-medium">
                {true ? t("keep_it_up") : t("start_your_streak")}
              </Text>
              <Text className="text-t-light">
                {true
                  ? t("You_re_unstoppable") +
                    " " +
                    t("days_in_a_row", { count: 40 })
                  : t("study_today_to_begin")}
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-1 items-end">
          <Text className="text-4xl font-bold text-primary"> 12 </Text>
          <Text className="text-xs text-t-light"> {t("current_streak")} </Text>
        </View>
      </View>

      {/* Days */}
      <View className="flex-row gap-2">
        {days.map((day) => (
          <View
            key={day}
            className="flex-1 w-full aspect-square rounded-full items-center justify-center bg-gray-200"
          >
            <Text> Day {day} </Text>
          </View>
        ))}
      </View>

      <Button type="secondary" title={t("view_progress")} />
    </View>
  );
};

export default StreakCard;
