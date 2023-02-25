import type { Post } from "src/types/post";
import { supabase } from "src/utils/supabase";

type GetPostsFn = () => Promise<Post[] | null>;
type GetPostFn = (id: string) => Promise<Post | null>;

export const getPosts: GetPostsFn = async () => {
  const { data } = await supabase
    .from("posts")
    .select()
    .order("created_at", { ascending: true });

  return data;
};

export const getPost: GetPostFn = async (id: string) => {
  const { data } = await supabase.from("posts").select().eq("id", id);
  return !!data ? data[0] : null;
};
