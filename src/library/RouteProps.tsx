import React from "react";
import { IStackScrennProps } from "./StackScreenProps";

export interface IRouteprops {
    component: React.FunctionComponent<IStackScrennProps>;
    name: string
}