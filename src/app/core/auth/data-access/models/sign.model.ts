export interface RegisterPayload {
  name: string
  username: string
  email: string
  inviteCode: string
  password: string
  confirmPassword: string
}

export interface LoginPayload {
  username: string
  password: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  password: string
  role: string // предполагается, что роль может быть одним из определенного списка значений, таких как "MANAGER", "ADMIN" и т. д.
  enabled: boolean
  authorities: {authority: string}[]
  accountNonExpired: boolean
  accountNonLocked: boolean
  credentialsNonExpired: boolean
}

export interface UserWithToken {
  user: User
  token: string
}
