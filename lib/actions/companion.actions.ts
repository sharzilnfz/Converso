'use server';

import { auth } from '@clerk/nextjs/server';
import { createSupabaseClient } from '../supabase';

export const createCompanion = async (formData: CreateCompanion) => {
  const { userId: author } = await auth();
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from('companions')
    .insert({
      ...formData,
      author,
    })
    .select();

  if (error || !data || data.length === 0) {
    throw new Error(
      `Error creating companion: ${error?.message}` ||
        'failed to create companion'
    );
  }

  return data[0];
};
