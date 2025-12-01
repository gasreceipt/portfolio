import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

import { Project } from './types';
import { projects as mockProjects } from './data';

export async function getProjects(): Promise<Project[]> {
    if (!supabase) {
        console.warn('Supabase credentials missing, falling back to mock data');
        return mockProjects;
    }

    try {
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('date', { ascending: false });

        if (error) {
            console.error('Error fetching projects:', error);
            return mockProjects;
        }

        return data || [];
    } catch (error) {
        console.error('Unexpected error:', error);
        return mockProjects;
    }
}
