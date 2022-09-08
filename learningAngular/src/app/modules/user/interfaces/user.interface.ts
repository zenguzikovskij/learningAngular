export interface User {
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  gender: boolean,
  email: string,
  department: string,
  company: string,
  imageUrl?: string,
  address?: Array<{ 
                    'address-line': string,
                    city?: string,
                    zip?: string 
                  }>
  }