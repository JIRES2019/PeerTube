import { VideoPrivacy } from './video-privacy.enum'
import { VideoScheduleUpdate } from './video-schedule-update.model'

export interface VideoCreate {
  category?: number
  types?: number
  licence?: number
  language?: string
  description?: string
  support?: string
  channelId: number
  nsfw?: boolean
  waitTranscoding?: boolean
  name: string
  articleid: number
  tags?: string[]
  autors?: string[]
  commentsEnabled?: boolean
  privacy: VideoPrivacy
  scheduleUpdate?: VideoScheduleUpdate
}
