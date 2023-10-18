import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";

function SliderWithThumb({ value }: { value: number }) {
  if (!value) return;
  const [sliderValue, setSliderValue] = useState(value);
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Slider
      id="slider"
      defaultValue={value}
      min={0}
      max={100}
      isDisabled={true}
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark value={50} mt={[1, 2, 3]} ml="-2" fontSize="sm">
        {value}
      </SliderMark>

      <SliderTrack>
        <SliderFilledTrack bg={"textBody"} />
      </SliderTrack>
      <Tooltip
        hasArrow
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={`${sliderValue}%`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
}
export default SliderWithThumb;
