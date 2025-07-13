/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Ezoic types
declare global {
  interface Window {
    ezstandalone: {
      cmd: Array<() => void>;
      showAds: (id: number) => void;
    };
  }
}