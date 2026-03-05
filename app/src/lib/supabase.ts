import { createClient, SupabaseClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Check if Supabase is configured
export const isSupabaseConfigured = () => {
  return Boolean(supabaseUrl && supabaseAnonKey)
}

// Only create the client if configured
export const supabase: SupabaseClient<Database> | null = isSupabaseConfigured()
  ? createClient<Database>(supabaseUrl, supabaseAnonKey)
  : null
