import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/blog-data"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <>
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Salom! Mening ismim Akmal.Bu mening shaxsiy blogim bu yerda IT olamidagi texnologiyalar haqida maqolalar joylanib boriladi</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Web dasturlash, zamonaviy texnologiyalar va shaxsiy tajribalarim haqida maqolalar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">So'nggi maqolalar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-6">
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold mb-2">
                    <Link href={`/post/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground">{post.snippet}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/post/${post.id}`} className="text-primary hover:underline">
                    Ko'proq o'qish
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <ScrollToTop />
    </>
  )
}
