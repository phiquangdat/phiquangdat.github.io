export interface Post {
  id?: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  icon?: string;
  link?: string;
  image_url?: string;
  created_at?: string;
}

const API_BASE_URL = import.meta.env.VITE_API_URL + "api";

export async function getPosts(): Promise<{ data: Post[]; total: number }> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error(
      `Failed to fetch posts: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export async function getPost(id: number): Promise<Post> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error(
      `Failed to fetch post: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export async function createPost(
  post: Omit<Post, "id" | "created_at">
): Promise<{ id: number; message: string }> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error(
      `Failed to create post: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export async function updatePost(
  id: number,
  post: Partial<Post>
): Promise<{ message: string }> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating post:", error);
    throw new Error(
      `Failed to update post: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export async function deletePost(id: number): Promise<{ message: string }> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting post:", error);
    throw new Error(
      `Failed to delete post: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}
