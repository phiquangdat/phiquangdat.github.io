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

export async function getPosts(
  page: number = 1,
  perPage: number = 6
): Promise<{ data: Post[]; total: number }> {
  const from = (page - 1) * perPage;
  const to = from + perPage - 1;

  const { data, error, count } = await supabase
    .from("posts")
    .select("*", { count: "exact" })
    .order("date", { ascending: false })
    .range(from, to);

  if (error) {
    console.error("Error fetching posts:", error);
    throw new Error(`Failed to fetch posts: ${error.message}`);
  }

  return { data: data as Post[], total: count || 0 };
}
