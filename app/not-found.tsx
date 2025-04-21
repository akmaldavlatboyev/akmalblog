import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Sahifa topilmadi</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Siz qidirayotgan sahifa mavjud emas yoki o'chirilgan bo'lishi mumkin.
      </p>
      <Button asChild>
        <Link href="/">Bosh sahifaga qaytish</Link>
      </Button>
    </div>
  )
}
