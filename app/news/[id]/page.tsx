import { getArticleData } from "@/lib/posts";
import PostPage from "@/templates/Post";

export default async function Article({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const articleData = await getArticleData(id);

  return <PostPage article={articleData} />;
}
