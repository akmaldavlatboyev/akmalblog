"use server"

import { revalidatePath } from "next/cache"

// Environment variables orqali Telegram bot tokeni va chat ID ni olish
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

type FormData = {
  name: string
  email: string
  message: string
}

export async function sendTelegramMessage(formData: FormData) {
  try {
    // Token va chat ID mavjudligini tekshirish
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      throw new Error("Telegram bot tokeni yoki chat ID sozlanmagan")
    }

    // Xabar matnini tayyorlash
    const text = `
📨 Yangi xabar qabul qilindi!

👤 Yuboruvchi: ${formData.name}
📧 Email: ${formData.email}
💬 Xabar: 

${formData.message}
    `

    // Telegram API ga so'rov yuborish
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: "HTML",
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(`Telegram API xatosi: ${data.description || response.statusText}`)
    }

    revalidatePath("/contact")
    return { success: true, message: "Xabar muvaffaqiyatli yuborildi" }
  } catch (error) {
    console.error("Xabar yuborishda xatolik:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "Xabar yuborishda xatolik yuz berdi",
    }
  }
}