import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import config from '@/payload.config'
import { importMap } from './admin/importMap'
import React from 'react'
import '@payloadcms/next/css'

export { metadata } from '@payloadcms/next/layouts'

export default function Layout({ children }: { children: React.ReactNode }) {
  async function serverFunction(args: Parameters<typeof handleServerFunctions>[0]) {
    'use server'
    return handleServerFunctions({ ...args, config, importMap })
  }

  return (
    <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  )
}
