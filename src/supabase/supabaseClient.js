import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://batugplthlrnlthcjmqg.supabase.co";
export const supabase = createClient(
  SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);
