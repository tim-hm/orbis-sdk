// Ref: https://orbis.club/documentation/api-documentation

export declare class Orbis {
  constructor(options?: ConstructorOptions)

  // Utils
  connect(provider: Provider, lit: boolean): Promise<ConnectResult>
  connect_v2(options?: ConnectOptions): Promise<ConnectResult>
  connectLit(provider: Provider): Promise<ConnectResult>
  isConnected(): Promise<ConnectResult>
  logout(): Promise<LogoutResult>

  // Write
  createPost(
    content: CreatePostContent,
    encryptionRules?: CreatePostEncryptionRules,
  ): Promise<void>

  updateProfile(content: UpdateProfileContent): Promise<UpdateProfileResult>

  // Read
}

export type UpdateProfileContent = {
  pfp?: string
  cover?: string
  username?: string
  description?: string
  pfpIsNft?: {
    chain: string
    contract: string
    tokenId: string
    timestamp: string
  }
  data?: Record<string, unknown>
}

export type UpdateProfileResult = UpdateProfileSuccess | UpdateProfileError

export type UpdateProfileSuccess = {
  status: 200
  doc: string
  result: string
  error: never
}

export type UpdateProfileError = {
  status: 300
  error: Error
  result: string
}

export type ConnectResult = ConnectSuccess | ConnectError

export type ConnectSuccess = {
  status: 200
  error: never
  did: string
  result: string
  details: {
    did: string
    username: string
    description: string
    hasLit: boolean
    profile: Profile
  }
}

export type ConnectError = {
  status: 300
  error: Error
  result: string
}

export type LogoutResult = LogoutSuccess | LogoutError

export type LogoutSuccess = {
  status: 200
  result: string
  error: never
}

export type LogoutError = {
  status: 300
  error: unknown
  result: string
}

export type Profile = {
  pfp: string
  username: string
  description: string
}

export type Provider = unknown

export type ConnectOptions = {
  provider: Provider
  chain?: "ethereum" | "solana"
  lit?: boolean
  oauth?: unknown
}

export type ConstructorOptions = {
  ceramic: unknown
  node: unknown
  PINATA_GATEWAY: unknown
  PINATA_API_KEY: unknown
  PINATA_SECRET_API_KEY: unknown
}

export type CreatePostContent = {
  body: string
  title?: string
  context?: string
}
export type CreatePostEncryptionRules = {
  type: string
  chain: string
}
