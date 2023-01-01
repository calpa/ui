import React, { useState } from "react";
import { useImmer } from "use-immer";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Defaults, Regions } from "svg-japan/src/_defaults";
import { drawData } from "svg-japan/src/_prefectures";
import JapanMap from ".";
import { useCallback } from "react";

export default {
  title: "Components/JapanMap",
  component: JapanMap,
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof JapanMap>;

const Template = (args) => <JapanMap {...args} />;

export const Default: ComponentStory<typeof JapanMap> = Template.bind({});

const selectedColor = "red";

export const InteractiveExample: ComponentStory<typeof JapanMap> = (args) => {
  const [prefColors, setPrefColors] = useImmer(
    args.selectedPrefectures.reduce((acc, curr) => {
      acc[curr] = selectedColor;
      return acc;
    }, {})
  );

  const onClick = useCallback((event) => {
    const prefectureJapaneseName: string =
      event.target.getAttribute("data-name");
    const regionId: number = Number(event.target.getAttribute("data-region"));
    const id: number = Number(
      event.target.getAttribute("id").split("pref-")[1]
    );

    const regionName: string = Regions.find(
      (region) => region.id === regionId
    )!.name;

    const prefectureEnglishName = Object.keys(drawData).filter(
      (prefecture) => drawData[prefecture].id === id
    )[0];

    console.log(
      `${regionName} ${prefectureJapaneseName} ${prefectureEnglishName} ${id}`
    );

    setPrefColors((draft) => {
      if (draft[prefectureEnglishName] === selectedColor) {
        draft[prefectureEnglishName] = Defaults.uniformColor;
      } else {
        draft[prefectureEnglishName] = selectedColor;
      }
    });
  }, []);

  const selectedPrefectures = Object.keys(prefColors).filter(
    (prefecture) => prefColors[prefecture] === selectedColor
  );

  return (
    <div>
      <h2>Visited Prefectures ({selectedPrefectures.length} / 47)</h2>
      <p>{selectedPrefectures.join(", ")}</p>
      <JapanMap {...args} onClick={onClick} prefColors={prefColors} />
    </div>
  );
};

InteractiveExample.args = {
  selectedPrefectures: ["Tokyo", "Hokkaido", "Kyoto"],
  type: "deform",
  regionality: false,
  uniformly: true,
  stroked: false,
};
