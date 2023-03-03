import { createClient } from "@pankod/refine-supabase";

const SUPABASE_URL = "https://bvwewrnumqjsekfiuevf.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2d2V3cm51bXFqc2VrZml1ZXZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4MTMyNDUsImV4cCI6MTk5MzM4OTI0NX0.HYo1qP4t9gcf8z_JS2JgGru6gr_lsjx-XsjolPPoMo0"

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
