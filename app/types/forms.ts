export type ExperienceLevel = 'working_in_security' | 'working_in_tech' | 'no_experience';
export type ReferralSource = 'tiktok' | 'instagram' | 'linkedin' | 'referral' | 'other';

export interface PreRegistrationForm {
  fullName: string;
  email: string;
  experience: ExperienceLevel;
  source: ReferralSource;
  otherSource?: string;
  referrerName?: string;
}

export type FinalRegistrationForm = {
  fullName: string;
  idNumber: string;
  email: string;
  country: string;
  city: string;
  age: number;
  experience: 'working_in_security' | 'working_in_tech' | 'no_experience';
  motivation: string;
  source: 'tiktok' | 'instagram' | 'linkedin' | 'referral' | 'other';
  referralName?: string;
  otherSource?: string;
  acceptedTerms: boolean;
}; 