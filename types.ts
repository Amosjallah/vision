import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface EventItem {
  id: number;
  title: string;
  date: string;
  description: string;
  category: 'Academic' | 'Sports' | 'Social' | 'PTA';
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
}