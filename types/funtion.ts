import "../components/desboard/export";
import { Pixel } from "../components/desboard/export";

export const Function = (selected: string) => {
  const blendArray: Array<HTMLElement> = [];
  for (let i = 0; i < 64; i++) {
    const Pixel = document.createElement("grid-pixel");
    Pixel.setAttribute("id", `${i}`);

    if (parseInt(selected) === i) {
        Pixel.setAttribute("color", "003042");
    }

    // if (
    //   parseInt(selected) === i + 10 ||
    //   parseInt(selected) === i + 1 ||
    //   parseInt(selected) === i - 1
    // ) {
    //     Pixel.setAttribute("color", "003042c7");
    // }

    // if (
    //   parseInt(selected) === i + 20 ||
    //   parseInt(selected) === i - 2 ||
    //   parseInt(selected) === i + 2 ||
    //   parseInt(selected) === i + 11 ||
    //   parseInt(selected) === i + 9 
    // ) {
    //     Pixel.setAttribute("color", "0030429f");
    // }

    // if (
    //   parseInt(selected) === i + 30 ||
    //   parseInt(selected) === i - 3 ||
    //   parseInt(selected) === i + 3 ||
    //   parseInt(selected) === i + 8 ||
    //   parseInt(selected) === i + 12 ||
    //   parseInt(selected) === i + 21 ||
    //   parseInt(selected) === i + 19 
    // ) {
    //     Pixel.setAttribute("color", "00304265");
    // }

    blendArray.push(Pixel);
  }
  return blendArray;
};
