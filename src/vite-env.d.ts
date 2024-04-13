/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_APP_EMAILJS_SVC_ID: string
  readonly VITE_APP_EMAILJS_USER_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
