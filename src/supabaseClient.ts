import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

if (!supabaseAnonKey || !supabaseUrl) throw new Error("Missing supabase credentials.");

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
