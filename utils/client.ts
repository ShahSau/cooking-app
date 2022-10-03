import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '112z2euf',
  dataset: 'production',
  apiVersion: '2022-08-02',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
