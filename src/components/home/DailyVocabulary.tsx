import { colors } from "@/constants";
import { IconArrowUpRight, IconVolume } from "@tabler/icons-react-native";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import Button from "../shared/Button";

const DailyVocabulary = () => {
  const { t } = useTranslation();
  return (
    <View className="p-4 rounded-3xl bg-white shadow gap-4">
      <View className="flex-row justify-between">
        <Text> {t("vocabulary_of_the_day")} </Text>
        <Button type="rounded" Icon={IconArrowUpRight} />
      </View>

      <View className="flex-row items-center gap-6">
        <Text className="text-4xl font-medium text-primary">Resilient</Text>
        <Button
          type="rounded"
          Icon={IconVolume}
          customIconColor={colors.primary}
        />
      </View>

      <Text className="text-t-light"> /rɪˈzɪl.i.ənt/</Text>
    </View>
  );
};

export default DailyVocabulary;
