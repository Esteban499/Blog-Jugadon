import type { JSXConvertersFunction } from '@payloadcms/richtext-lexical/react'
import type {
  DefaultNodeTypes,
  SerializedBlockNode,
} from '@payloadcms/richtext-lexical'
import type { SerializedEditorState } from 'lexical'
import type { MediaItem, Game } from '@/types'
import { CalloutBlock } from './CalloutBlock'
import { ImageBlock } from './ImageBlock'
import { VideoEmbedBlock } from './VideoEmbedBlock'
import { GameCardBlock } from './GameCardBlock'
import { CTABlock } from './CTABlock'
import { FAQBlock } from './FAQBlock'
import { HighlightBlock } from './HighlightBlock'
import { ColumnsBlock } from './ColumnsBlock'
import { HtmlEmbedBlock } from './HtmlEmbedBlock'

type CalloutFields = {
  blockType: 'callout'
  blockName?: string | null
  variant: 'info' | 'tip' | 'warning' | 'success'
  title?: string | null
  content: string
}

type ImageBlockFields = {
  blockType: 'imageBlock'
  blockName?: string | null
  image: MediaItem
  caption?: string | null
  alignment?: 'left' | 'center' | 'full' | null
}

type VideoEmbedFields = {
  blockType: 'videoEmbed'
  blockName?: string | null
  url: string
  title?: string | null
}

type GameCardFields = {
  blockType: 'gameCardBlock'
  blockName?: string | null
  game: string | Game
}

type CTAFields = {
  blockType: 'cta'
  blockName?: string | null
  text: string
  url: string
  variant?: 'primary' | 'secondary' | 'ghost' | null
  newTab?: boolean | null
}

type FAQFields = {
  blockType: 'faq'
  blockName?: string | null
  title?: string | null
  items: { id?: string | null; question: string; answer: string }[]
}

type HighlightFields = {
  blockType: 'highlight'
  blockName?: string | null
  title?: string | null
  content: SerializedEditorState
  variant?: 'default' | 'primary' | 'accent' | null
  icon?: string | null
}

type ColumnsFields = {
  blockType: 'columns'
  blockName?: string | null
  count: '2' | '3' | '4'
  columns: { id?: string | null; content: SerializedEditorState }[]
}

type HtmlEmbedFields = {
  blockType: 'htmlEmbed'
  blockName?: string | null
  html: string
  css?: string | null
}

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<CalloutFields>
  | SerializedBlockNode<ImageBlockFields>
  | SerializedBlockNode<VideoEmbedFields>
  | SerializedBlockNode<GameCardFields>
  | SerializedBlockNode<CTAFields>
  | SerializedBlockNode<FAQFields>
  | SerializedBlockNode<HighlightFields>
  | SerializedBlockNode<ColumnsFields>
  | SerializedBlockNode<HtmlEmbedFields>

export const blockConverters: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  blocks: {
    callout: ({ node }) => <CalloutBlock {...node.fields} />,
    imageBlock: ({ node }) => <ImageBlock {...node.fields} />,
    videoEmbed: ({ node }) => <VideoEmbedBlock {...node.fields} />,
    gameCardBlock: ({ node }) => <GameCardBlock {...node.fields} />,
    cta: ({ node }) => <CTABlock {...node.fields} />,
    faq: ({ node }) => <FAQBlock {...node.fields} />,
    highlight: ({ node }) => <HighlightBlock {...node.fields} />,
    columns: ({ node }) => <ColumnsBlock {...node.fields} />,
    htmlEmbed: ({ node }) => <HtmlEmbedBlock {...node.fields} />,
  },
})
