import React from 'react';

export interface NavLink {
  label: string;
  path: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  stats: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface ImpactStat {
  label: string;
  value: string;
  icon: React.ReactNode;
}



export interface DonationFormData {
  amount: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  wants80g: boolean;
  pan?: string;
  address?: string;
  pin?: string;
  state?: string;
}



export type FetchStatus = 'idle' | 'loading' | 'success' | 'error';