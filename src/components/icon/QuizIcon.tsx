import React, { SVGProps } from "react";
import { ReactComponent as QuizSvg } from "@assets/quiz_icon.svg";

interface QuizIconProps extends SVGProps<SVGSVGElement> {
  width: number;
  height: number;
}

function QuizIcon({ width, height }: QuizIconProps) {
  return <QuizSvg width={width} height={height} />;
}

export default QuizIcon;
