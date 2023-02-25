import { createClient } from "@supabase/supabase-js";
import type { Database } from "src/types/schema";

export const supabase = createClient<Database>(
  import.meta.env.SUPABASE_URL as string,
  import.meta.env.SUPABASE_API_KEY as string
);
