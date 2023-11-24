import { Document } from "mongoose";

export interface iAuth {
  email: string;
  password: string;
  verify: boolean;
  token: string;
  secretKey: string;
  profile: {}[];
  bagHistory: {}[];
  feeHistory: {}[];
}

export interface iProfile {
  address: string;
  PhoneNumber: number;
  balance: number;
  avatar: string;
  avatarID: string;
  schoolName: string;
  gender: string;
  motivation: string;
}

interface iFee {
  ammountPaid: number;
  schoolName: string;
  studentID: string;
}

export interface iBag {
  bag: number;
  cash: number;
  studentID: string;
}

interface iSchool {
  schoolName: string;
  verified: boolean;
  token?: string;
  email: string;
  password: string;
  address?: string;
}

export interface iAuthData extends iAuth, Document {}
export interface iBagData extends iBag, Document {}
export interface iProfileData extends iProfile, Document {}
export interface iFeeData extends iFee, Document {}
export interface iSchoolData extends iSchool, Document {}
