declare module 'pannellum-react/es/elements/Pannellum' {
    export function viewer(element: HTMLElement, config: {
      type: string;
      panorama: string;
      autoLoad?: boolean;
      autoRotate?: number;
      compass?: boolean;
      showZoomCtrl?: boolean;
      showFullscreenCtrl?: boolean;
      minHfov?: number;
      maxHfov?: number;
    }): void;
  }