import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabaseUrl = 'https://uvtjtraxmiwjugjxbxrx.supabase.co';
  private supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2dGp0cmF4bWl3anVnanhieHJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5MDg5NTcsImV4cCI6MjAzMTQ4NDk1N30.7TzgtSNMz9aeXAsX1kYLHn8zrrMXJKV6Nhs6sZ-lA5s';
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
  }

  get client() {
    return this.supabase;
  }
}
