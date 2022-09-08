import { UserAddress } from "./userAddress.interface";

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
  address?: Array< UserAddress >
  }