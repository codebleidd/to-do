// styled.d.ts
import 'styled-components';

type PaletteName = 'blue' | 'grey';
type PaletteRange = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

type Palette = {
  [key in PaletteRange]?: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    shadow: {
      inset: string;
      0: string;
      1: string;
    };
    border: {
      radius: string;
    };
    color: {
      error: string;
      warning: string;
      palette: {
        [key in PaletteName]: Palette;
      };
    };
  }
}
