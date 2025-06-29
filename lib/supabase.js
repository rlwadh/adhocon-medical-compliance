import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

// Helper functions für ADHOCON.AI
export const auth = supabase.auth

// User Profile Management
export const createUserProfile = async (userData) => {
  const { data, error } = await supabase
    .from('profiles')
    .insert([userData])
    .select()
  return { data, error }
}

export const getUserProfile = async (userId) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()
  return { data, error }
}

// Project Management
export const createProject = async (projectData) => {
  const { data, error } = await supabase
    .from('projects')
    .insert([projectData])
    .select()
  return { data, error }
}

export const getUserProjects = async (userId) => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  return { data, error }
}

// Daily Tasks
export const createDailyTask = async (taskData) => {
  const { data, error } = await supabase
    .from('daily_tasks')
    .insert([taskData])
    .select()
  return { data, error }
}

export const getTodaysTasks = async (userId) => {
  const today = new Date().toISOString().split('T')[0]
  const { data, error } = await supabase
    .from('daily_tasks')
    .select('*')
    .eq('user_id', userId)
    .eq('scheduled_date', today)
    .order('priority', { ascending: false })
  return { data, error }
}
