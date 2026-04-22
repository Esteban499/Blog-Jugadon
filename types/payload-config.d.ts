declare module '@payload-config' {
  import type { Config } from 'payload'
  const config: Promise<Config>
  export default config
}
