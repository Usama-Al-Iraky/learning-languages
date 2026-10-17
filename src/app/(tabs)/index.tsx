import CurrentLesson from "@/components/home/CurrentLesson";
import DailyVocabulary from "@/components/home/DailyVocabulary";
import LearningPlan from "@/components/home/LearningPlan";
import StreakCard from "@/components/home/StreakCard";
import Header from "@/components/shared/Header";

import { useTranslation } from "react-i18next";
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  const { t } = useTranslation();
  return (
    <View className="flex-1 bg-extra-light-blue">
      <Header />
      <ScrollView contentContainerClassName="p-4 gap-6">
        {/* Header and sub */}
        <View>
          <Text className="title">
            {t("continue_your_journey_in_learning")}
            <Text className="text-primary"> English </Text>
          </Text>
          <Text className="sub-title">
            {t("you_re_making_great_progress_toward_your_goal")}
            <Text> Travel </Text>
          </Text>
        </View>

        {/*  */}
        <LearningPlan />
        <CurrentLesson />
        <DailyVocabulary />
        <StreakCard />
      </ScrollView>
    </View>
  );
}
