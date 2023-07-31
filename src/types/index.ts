export interface User {
  id: number
  name: string
  age: number
  department: string
  address: string
}
export interface ApiResponse {
  data: User[]
}
