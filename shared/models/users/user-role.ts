import { UserRight } from './user-right.enum'

// Keep the order
export enum UserRole {
  ADMINISTRATOR = 0,
  MODERATOR = 1,
  USER = 2,
  VALIDATOR = 3
}

// TODO: use UserRole for key once https://github.com/Microsoft/TypeScript/issues/13042 is fixed
export const USER_ROLE_LABELS: { [ id: number ]: string } = {
  [UserRole.VALIDATOR]: 'Validator',
  [UserRole.USER]: 'User',
  [UserRole.MODERATOR]: 'Moderator',
  [UserRole.ADMINISTRATOR]: 'Administrator'
}

// TODO: use UserRole for key once https://github.com/Microsoft/TypeScript/issues/13042 is fixed
const userRoleRights: { [ id: number ]: UserRight[] } = {
  [UserRole.ADMINISTRATOR]: [
    UserRight.ALL
  ],

  [UserRole.MODERATOR]: [
    UserRight.MANAGE_VIDEO_BLACKLIST,
    UserRight.MANAGE_VIDEO_ABUSES,
    UserRight.REMOVE_ANY_VIDEO,
    UserRight.REMOVE_ANY_VIDEO_CHANNEL,
    UserRight.REMOVE_ANY_VIDEO_COMMENT,
    UserRight.UPDATE_ANY_VIDEO,
    UserRight.SEE_ALL_VIDEOS,
    UserRight.MANAGE_ACCOUNTS_BLOCKLIST,
    UserRight.MANAGE_SERVERS_BLOCKLIST,
    UserRight.CHANGE_VIDEO_OWNERSHIP,
    UserRight.CHANGE_VIDEO_CHANNEL
  ],

  [UserRole.USER]: [],
  [UserRole.VALIDATOR]: [
    UserRight.SEE_ALL_VIDEOS,
    UserRight.REMOVE_ANY_VIDEO,
    UserRight.UPDATE_ANY_VIDEO
  ]
}

export function hasUserRight (userRole: UserRole, userRight: UserRight) {
  const userRights = userRoleRights[userRole]

  return userRights.indexOf(UserRight.ALL) !== -1 || userRights.indexOf(userRight) !== -1
}
