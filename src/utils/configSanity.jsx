import { createClient } from 'next-sanity';

export const client = createClient({
    projectId: 'hj4awfcj',
    dataset: 'production',
    apiVersion: '2023-08-27',
    useCdn: false,
  });