import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-data"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import ScrollToTop from "@/components/scroll-to-top"

export default function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.id)

  return (
    <>
      <article className="container py-12">
        <Link href="/" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Ortga qaytish
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-muted-foreground mb-8">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>

        <div className="relative h-[300px] md:h-[400px] w-full mb-8">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-lg" />
        </div>

        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="flex flex-wrap gap-2 mt-8">
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </article>

      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-8">Shunga o'xshash maqolalar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((relatedPost) => (
            <Card key={relatedPost.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-sm text-muted-foreground mb-2">{relatedPost.date}</div>
                <h3 className="text-xl font-bold mb-2">
                  <Link href={`/post/${relatedPost.id}`} className="hover:text-primary transition-colors">
                    {relatedPost.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground line-clamp-2">{relatedPost.snippet}</p>
                <Link href={`/post/${relatedPost.id}`} className="text-primary hover:underline mt-4 inline-block">
                  Ko'proq o'qish
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <ScrollToTop />
    </>
  )
}
