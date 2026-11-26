import { Composition, registerRoot } from "remotion";
import { createElement } from "react";
import { ALT, AppMia, DURACAO, FPS, LARG } from "./AppMia";

const Root = () =>
  createElement(Composition, { id: "AppMia", component: AppMia, durationInFrames: DURACAO, fps: FPS, width: LARG, height: ALT });

registerRoot(Root);
