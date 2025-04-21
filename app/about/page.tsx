import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import ScrollToTop from "@/components/scroll-to-top"

export default function AboutPage() {
  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "TypeScript", level: 65 },
  ]

  const goals = [
    "Yangi texnologiyalarni o'rganish va amaliyotda qo'llash",
    "Open-source loyihalarga hissa qo'shish",
    "Shaxsiy portfolio loyihalarni yaratish",
    "Dasturlash bo'yicha maqolalar yozish va tajriba ulashish",
  ]

  return (
    <>
      <div className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">Men haqimda</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[300px] md:h-[400px] w-full">
            <Image src="/placeholder.svg?height=400&width=400" alt="Akmal" fill className="object-cover rounded-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Salom, men Akmalman!</h2>
            <p className="text-muted-foreground mb-4">
              Men web dasturlash sohasida ishlayman va yangi texnologiyalarni o'rganishni yaxshi ko'raman. Mening asosiy
              yo'nalishim frontend dasturlash, ammo backend texnologiyalari bilan ham ishlayman.
            </p>
            <p className="text-muted-foreground mb-4">
              Men o'z bilimlarimni blog orqali ulashishni va boshqalarga yordam berishni maqsad qilganman. Bu blogda men
              o'z tajribalarim, o'rganganlarim va foydali maslahatlarimni ulashaman.
            </p>
            <p className="text-muted-foreground">
              Dasturlashdan tashqari, men kitob o'qishni, sayohat qilishni va yangi narsalarni o'rganishni yaxshi
              ko'raman.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Ko'nikmalar</h2>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div className="h-2 bg-primary rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-8">Maqsadlar</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {goals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground mr-3">
                      {index + 1}
                    </span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <ScrollToTop />
    </>
  )
}
