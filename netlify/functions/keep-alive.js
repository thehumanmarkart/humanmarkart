JavaScript
import { createClient } from '@supabase/supabase-js';

export default async (req) => {
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const { data, error } = await supabase
      .from('entries')
      .select('id')
      .limit(1);

    if (error) throw error;

    console.log('Supabase keep-alive successful:', data);
    return new Response('OK', { status: 200 });
  } catch (err) {
    console.error('Keep-alive failed:', err.message);
    return new Response('Error', { status: 500 });
  }
};

export const config = {
  schedule: '0 12 * * 1'
};
