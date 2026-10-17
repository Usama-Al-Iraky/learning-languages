import { colors } from "@/constants";
import useStorage from "@/hooks/useStorage";
import { Icon } from "@tabler/icons-react-native";
import { FC, useEffect, useState } from "react";
import { Pressable, PressableProps, Text, View } from "react-native";
type TButton = "primary" | "secondary" | "show-more" | "rounded";

interface IButton extends PressableProps {
  title?: string;
  type: TButton;
  Icon?: Icon;
  customBtnStyle?: string;
  customTextStyle?: string;
  customIconColor?: string;
}

const Button: FC<IButton> = ({
  title,
  type,
  Icon,
  customBtnStyle,
  customTextStyle,
  customIconColor,
  ...props
}) => {
  const { getItem } = useStorage();
  const [lang, setLang] = useState<string>("en");
  useEffect(() => {
    (async () => {
      const language = await getItem("lang");
      if (language) setLang(language);
    })();
  }, []);

  const style = (() => {
    switch (type) {
      case "primary":
        return {
          body: "bg-primary p-2 px-4 rounded-full h-10 relative",
          text: "text-white text-center",
          iconColor: colors.white,
        };
      case "secondary":
        return {
          body: "bg-primary/10 p-2 px-4 rounded-full h-10 relative",
          text: "text-primary text-center",
          iconColor: colors.primary,
        };
      case "show-more":
        return {
          body: "flex-row items-center gap-1",
          text: "text-t-light text-sm",
          iconColor: colors["t-light"],
        };
      case "rounded":
        return {
          body: "h-12 aspect-square rounded-full bg-white shadow items-center justify-center",
          text: "",
          iconColor: colors["t-light"],
        };
      default:
        return {
          body: "bg-primary",
          text: "text-white text-center",
          iconColor: colors.white,
        };
    }
  })();

  return (
    <Pressable
      className={`transition-all duration-200 active:scale-[0.96] ${style.body} ${customBtnStyle}`}
      {...props}
    >
      {type !== "rounded" && (
        <Text className={`${style.text} ${customTextStyle}`}> {title} </Text>
      )}
      {Icon &&
        (type === "show-more" || type === "rounded" ? (
          <Icon
            color={customIconColor ? customIconColor : style.iconColor}
            size={type === "rounded" ? 25 : 20}
            strokeWidth={1.5}
          />
        ) : (
          <View
            className={`absolute h-10 end-4 justify-center ${lang === "ar" ? "-scale-x-100" : ""}`}
          >
            <Icon
              color={customIconColor ? customIconColor : style.iconColor}
              strokeWidth={1.5}
            />
          </View>
        ))}
    </Pressable>
  );
};

export default Button;
