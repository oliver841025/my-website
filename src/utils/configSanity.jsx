import { createClient } from 'next-sanity';
import { getCurrentDate } from './getDate';

export const client = createClient({
  projectId: 'hj4awfcj',
  dataset: 'production',
  apiVersion: getCurrentDate(),
  useCdn: false,
});
