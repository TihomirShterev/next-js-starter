import React from "react";
import Link from "next/link";
import {
  registerUniformComponent,
  ComponentProps,
} from "@uniformdev/canvas-react";
import { ToggleEmbeddedContextDevTools } from "@uniformdev/context-devtools";
import getConfig from "next/config";

type Props = ComponentProps<{
  testtitle: string;
  testtext: any;
}>;

const TestComponentTihomir = ({ testtitle, testtext }: Props) => {
  console.log("testtitle", testtitle);
  console.log("testtext", testtext);
  return (
    <div className="w-full flex flex-col md:flex-row py-4">
      <div className="flex-1 mb-6"></div>
      <p className="text-gray-900 text-right flex-1 leading-8">{testtitle}</p>
    </div>
  );
};

registerUniformComponent({
  type: "testComponentTihomir",
  component: TestComponentTihomir,
});

export default TestComponentTihomir;
