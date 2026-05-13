import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL="https://hpcfsmgycioxzyyiwwgx.supabase.co"
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwY2ZzbWd5Y2lveHp5eWl3d2d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2MTQ3MjYsImV4cCI6MjA5NDE5MDcyNn0.b1q-bZ71-QSlRUkhcuIxO9BfRz1T9C49xtHHciLU2eY"
export const supabase = createClient(supabaseUrl, supabaseKey)