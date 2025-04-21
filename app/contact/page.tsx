"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import ScrollToTop from "@/components/scroll-to-top"
import { sendTelegramMessage } from "@/app/actions/telegram"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string | null
  }>({ type: null, message: null })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Agar oldin xatolik bo'lgan bo'lsa, yangi kiritish boshlanganida uni tozalash
    if (formStatus.type === "error") {
      setFormStatus({ type: null, message: null })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: null, message: null })

    try {
      // Telegram botga xabar yuborish
      const result = await sendTelegramMessage(formData)

      if (result.success) {
        // Muvaffaqiyatli yuborilgan
        setFormStatus({
          type: "success",
          message: "Xabaringiz muvaffaqiyatli yuborildi. Tez orada javob beramiz!",
        })

        toast({
          title: "Xabar yuborildi",
          description: "Sizning xabaringiz muvaffaqiyatli yuborildi. Tez orada javob beramiz!",
        })

        // Formani tozalash
        setFormData({ name: "", email: "", message: "" })
      } else {
        // Xatolik yuz berdi
        setFormStatus({
          type: "error",
          message: result.message || "Xabar yuborishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.",
        })

        toast({
          title: "Xatolik",
          description: result.message || "Xabar yuborishda xatolik yuz berdi.",
          variant: "destructive",
        })
      }
    } catch (error) {
      // Kutilmagan xatolik
      setFormStatus({
        type: "error",
        message: "Kutilmagan xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.",
      })

      toast({
        title: "Xatolik",
        description: "Kutilmagan xatolik yuz berdi.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">Bog'lanish</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Xabar yuborish</h2>

            {formStatus.type && (
              <Alert
                className={`mb-6 ${formStatus.type === "success" ? "bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-300" : "bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-300"}`}
              >
                {formStatus.type === "success" ? (
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                ) : (
                  <AlertCircle className="h-4 w-4 mr-2" />
                )}
                <AlertTitle>{formStatus.type === "success" ? "Muvaffaqiyatli" : "Xatolik"}</AlertTitle>
                <AlertDescription>{formStatus.message}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Ismingiz
                </label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Xabar
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Yuborilmoqda..." : "Yuborish"}
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Bog'lanish ma'lumotlari</h2>
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardContent className="flex items-start p-6">
                  <Mail className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:davlatboyevakmal@gmail.com" className="hover:text-primary transition-colors">
                        davlatboyevakmal@gmail.com
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start p-6">
                  <Phone className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <h3 className="font-medium mb-1">Telefon</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+998952430833" className="hover:text-primary transition-colors">
                        +998 95 243 08 33
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start p-6">
                  <MapPin className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <h3 className="font-medium mb-1">Manzil</h3>
                    <p className="text-muted-foreground">Toshkent shahri, O'zbekiston</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  )
}