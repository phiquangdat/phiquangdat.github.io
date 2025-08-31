import { supabase } from "../supaClient";

export interface Post {
  title: string;
  description: string;
  date: string;
  readTime: string;
  icon?: string;
  link?: string;
  image_url?: string;
}

export async function getPosts(): Promise<{ data: Post[]; total: number }> {
  const { data, error, count } = await supabase
    .from("posts")
    .select("*", { count: "exact" })
    .order("date", { ascending: false });

  if (error) {
    console.error("Error fetching posts:", error);
    throw new Error(`Failed to fetch posts: ${error.message}`);
  }

  return { data: data as Post[], total: count || 0 };
}
