import { RootLayout } from '@payloadcms/next/layouts'
import config from '@/payload.config'
import { importMap } from './admin/importMap'
import { serverFunction } from './actions'
import React from 'react'
import '@payloadcms/next/css'

export { metadata } from '@payloadcms/next/layouts'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  )
}
