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

export async function getPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("date", { ascending: false });

  if (error) {
    console.error("Error fetching posts:", error);
    throw new Error(`Failed to fetch posts: ${error.message}`);
  }

  return data as Post[];
}
