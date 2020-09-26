import React from "react";
import { View } from "react-native";

type Props = {};

export default function BaseComponent(props: Props) {
  const {} = props;

  return (
    <View style={{ backgroundColor: "purple", height: 500, width: 500 }} />
  );
}
