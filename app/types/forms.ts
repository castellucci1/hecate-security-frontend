export type PreRegistrationForm = {
  fullName: string;
  email: string;
  experience: 'working_in_security' | 'working_in_tech' | 'no_experience';
  source: 'tiktok' | 'instagram' | 'linkedin' | 'referral' | 'other';
  referralSource?: string;
  otherSource?: string;
};

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