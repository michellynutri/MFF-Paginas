// Lista das telas (componentes convertidos do Stitch). As pranchetas 01b, 14b, 14c, 28b, 29b e 30b são estados
// de outras telas (ver _quiz/previas.ts) e não têm componente próprio.
import type { ComponentType } from "react";
import type { TelaProps } from "./tipos";
import T01 from "../_telas/T01";
import T02 from "../_telas/T02";
import T03a from "../_telas/T03a";
import T03b from "../_telas/T03b";
import T03c from "../_telas/T03c";
import T03d from "../_telas/T03d";
import T03e from "../_telas/T03e";
import T03f from "../_telas/T03f";
import T04 from "../_telas/T04";
import T05 from "../_telas/T05";
import T06 from "../_telas/T06";
import T07a from "../_telas/T07a";
import T07b from "../_telas/T07b";
import T08 from "../_telas/T08";
import T09 from "../_telas/T09";
import T10 from "../_telas/T10";
import T11 from "../_telas/T11";
import T12 from "../_telas/T12";
import T13 from "../_telas/T13";
import T14 from "../_telas/T14";
import T15 from "../_telas/T15";
import T16 from "../_telas/T16";
import T17 from "../_telas/T17";
import T18 from "../_telas/T18";
import T19 from "../_telas/T19";
import T20 from "../_telas/T20";
import T21 from "../_telas/T21";
import T22a from "../_telas/T22a";
import T22b from "../_telas/T22b";
import T23 from "../_telas/T23";
import T24 from "../_telas/T24";
import T25 from "../_telas/T25";
import T26 from "../_telas/T26";
import T27 from "../_telas/T27";
import T28 from "../_telas/T28";
import T29a from "../_telas/T29a";
import T29c from "../_telas/T29c";
import T30a from "../_telas/T30a";
export const TELAS: Record<string, ComponentType<TelaProps>> = {
  "01": T01,
  "02": T02,
  "03a": T03a,
  "03b": T03b,
  "03c": T03c,
  "03d": T03d,
  "03e": T03e,
  "03f": T03f,
  "04": T04,
  "05": T05,
  "06": T06,
  "07a": T07a,
  "07b": T07b,
  "08": T08,
  "09": T09,
  "10": T10,
  "11": T11,
  "12": T12,
  "13": T13,
  "14": T14,
  "15": T15,
  "16": T16,
  "17": T17,
  "18": T18,
  "19": T19,
  "20": T20,
  "21": T21,
  "22a": T22a,
  "22b": T22b,
  "23": T23,
  "24": T24,
  "25": T25,
  "26": T26,
  "27": T27,
  "28": T28,
  "29a": T29a,
  "29c": T29c,
  "30a": T30a,
};
