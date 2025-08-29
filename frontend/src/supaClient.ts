import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Missing Supabase environment variables. Ensure REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY are set in .env file."
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);
