// ==========================================================
// এখানে আপনার Supabase প্রজেক্টের তথ্য দিন
// Supabase Dashboard -> Project Settings -> API থেকে পাবেন
// ==========================================================

const SUPABASE_URL = "https://vahufwllifuzhfgjouks.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_T7UQLxiz6yff0z7VWgBbAw_ol8OE19y";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Storage bucket এর নাম (Supabase -> Storage এ এই নামে bucket বানাতে হবে)
const BUCKET_NAME = "Bijoydocuments";
