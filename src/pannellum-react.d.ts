declare module 'pannellum-react' {
    import { ComponentType } from 'react';
  
    export interface PannellumProps {
      width: string;
      height: string;
      image: string;
      pitch?: number;
      yaw?: number;
      hfov?: number;
      autoLoad?: boolean;
      onLoad?: () => void;
      autoRotate?: number;
      compass?: boolean;
      showZoomCtrl?: boolean;
      showFullscreenCtrl?: boolean;
      minHfov?: number;
      maxHfov?: number;
    }
  
    export const Pannellum: ComponentType<PannellumProps>;
  }