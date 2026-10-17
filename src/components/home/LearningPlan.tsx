import { IconChevronRight } from "@tabler/icons-react-native";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import Button from "../shared/Button";

const LearningPlan = () => {
  const { t } = useTranslation();
  const data = ["Goal", "Language", "Companion"];
  return (
    <View className="p-4 gap-4 bg-white rounded-3xl shadow ">
      <View className="flex-row items-center justify-between">
        <Text className="text-t-dark"> {t("learning_plan")} </Text>
        <Button type="show-more" title={t("explore")} Icon={IconChevronRight} />
      </View>

      <View className="flex-row gap-4">
        {data.map((item, i) => (
          <View
            key={i}
            className="flex-1 w-full aspect-square bg-extra-light-blue rounded-3xl items-center justify-center"
          >
            <Text>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default LearningPlan;
