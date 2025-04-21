export type Post = {
  id: string
  title: string
  date: string
  snippet: string
  content: string
  image: string
  author: string
  tags: string[]
}

export const blogPosts: Post[] = [
  {
    id: "web-dasturlash-asoslari",
    title: "Web dasturlash asoslari: HTML, CSS va JavaScript",
    date: "2023-12-15",
    snippet:
      "Web dasturlash dunyosiga ilk qadam. HTML, CSS va JavaScript haqida asosiy ma'lumotlar va ularning o'zaro bog'liqligi.",
    content: `
      <p>Web dasturlash dunyosiga xush kelibsiz! Bu maqolada biz web dasturlashning asosiy uch ustuni - HTML, CSS va JavaScript haqida gaplashamiz.</p>
      
      <h2>HTML - Hyper Text Markup Language</h2>
      <p>HTML web-sahifalarning asosiy tuzilishini belgilaydi. U matn, rasmlar, havolalar va boshqa elementlarni joylashtirishga imkon beradi.</p>
      <p>Misol uchun:</p>
      <pre><code>&lt;h1&gt;Salom, dunyo!&lt;/h1&gt;
&lt;p&gt;Bu mening birinchi web-sahifam.&lt;/p&gt;</code></pre>
      
      <h2>CSS - Cascading Style Sheets</h2>
      <p>CSS web-sahifalarning ko'rinishini belgilaydi. Ranglar, shriftlar, joylashuv va boshqa vizual elementlarni boshqaradi.</p>
      <p>Misol uchun:</p>
      <pre><code>h1 {
  color: blue;
  font-size: 24px;
}
p {
  color: gray;
  line-height: 1.6;
}</code></pre>
      
      <h2>JavaScript</h2>
      <p>JavaScript web-sahifalarga interaktivlik qo'shadi. Foydalanuvchi harakatlariga javob berish, ma'lumotlarni yuklash va dinamik kontent yaratish imkonini beradi.</p>
      <p>Misol uchun:</p>
      <pre><code>document.querySelector('h1').addEventListener('click', function() {
  alert('Salom, dunyo!');
});</code></pre>
      
      <h2>Xulosa</h2>
      <p>HTML, CSS va JavaScript birgalikda zamonaviy web-saytlar yaratish uchun kuchli asos bo'lib xizmat qiladi. Ularni o'rganish web dasturlash yo'lidagi muhim qadam hisoblanadi.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    author: "Akmal",
    tags: ["HTML", "CSS", "JavaScript", "Web Development"],
  },
  {
    id: "react-asoslari",
    title: "React.js asoslari: Zamonaviy UI yaratish",
    date: "2024-01-10",
    snippet:
      "React.js - zamonaviy web ilovalar yaratish uchun eng mashhur JavaScript kutubxonasi haqida asosiy ma'lumotlar.",
    content: `
      <p>React.js - bu Facebook tomonidan yaratilgan JavaScript kutubxonasi bo'lib, foydalanuvchi interfeyslarini yaratish uchun ishlatiladi.</p>
      
      <h2>React.js nima uchun kerak?</h2>
      <p>React.js quyidagi afzalliklarga ega:</p>
      <ul>
        <li>Virtual DOM orqali yuqori samaradorlik</li>
        <li>Komponentlarga asoslangan arxitektura</li>
        <li>Bir yo'nalishli ma'lumotlar oqimi</li>
        <li>Katta hamjamiyat va ko'plab kutubxonalar</li>
      </ul>
      
      <h2>Birinchi React komponenti</h2>
      <p>React komponenti yaratish juda oddiy:</p>
      <pre><code>import React from 'react';

function Salomlash() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Salom, dunyo!&lt;/h1&gt;
      &lt;p&gt;Bu mening birinchi React komponentim.&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default Salomlash;</code></pre>
      
      <h2>JSX</h2>
      <p>React JSX sintaksisidan foydalanadi, bu HTML va JavaScript-ni birlashtirishga imkon beradi:</p>
      <pre><code>function Salomlash(props) {
  return &lt;h1&gt;Salom, {props.ism}!&lt;/h1&gt;;
}</code></pre>
      
      <h2>Xulosa</h2>
      <p>React.js zamonaviy web ilovalar yaratish uchun ajoyib vosita. Uni o'rganish orqali siz yuqori samarali va kengaytiriladigan foydalanuvchi interfeyslarini yaratishingiz mumkin.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    author: "Akmal",
    tags: ["React", "JavaScript", "Frontend", "UI"],
  },
  {
    id: "next-js-bilan-tanishuv",
    title: "Next.js bilan tanishuv: React-ning kuchli frameworki",
    date: "2024-02-05",
    snippet:
      "Next.js - React asosidagi framework bo'lib, server-side rendering, static site generation va boshqa ko'plab imkoniyatlarni taqdim etadi.",
    content: `
      <p>Next.js - bu React asosidagi framework bo'lib, zamonaviy web ilovalar yaratish uchun ko'plab qo'shimcha imkoniyatlarni taqdim etadi.</p>
      
      <h2>Next.js afzalliklari</h2>
      <p>Next.js quyidagi afzalliklarga ega:</p>
      <ul>
        <li>Server-Side Rendering (SSR)</li>
        <li>Static Site Generation (SSG)</li>
        <li>Avtomatik kod bo'linishi</li>
        <li>File-based routing</li>
        <li>API routes</li>
        <li>Built-in CSS va Sass qo'llab-quvvatlash</li>
      </ul>
      
      <h2>Next.js loyihasini boshlash</h2>
      <p>Next.js loyihasini boshlash juda oson:</p>
      <pre><code>npx create-next-app@latest my-next-app
cd my-next-app
npm run dev</code></pre>
      
      <h2>Sahifalar yaratish</h2>
      <p>Next.js-da sahifalar yaratish uchun pages papkasida JavaScript fayllarini yaratish kifoya:</p>
      <pre><code>// pages/index.js
export default function Home() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Bosh sahifa&lt;/h1&gt;
      &lt;p&gt;Next.js ga xush kelibsiz!&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h2>Xulosa</h2>
      <p>Next.js React ilovalarini yaratish uchun ajoyib framework. U React-ning barcha afzalliklarini saqlagan holda, qo'shimcha imkoniyatlar va optimizatsiyalarni taqdim etadi.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    author: "Akmal",
    tags: ["Next.js", "React", "SSR", "Web Development"],
  },
  {
    id: "tailwind-css-bilan-ishlash",
    title: "Tailwind CSS bilan ishlash: Utility-first CSS framework",
    date: "2024-03-20",
    snippet: "Tailwind CSS - zamonaviy web dizayn uchun utility-first yondashuvga asoslangan CSS framework haqida.",
    content: `
      <p>Tailwind CSS - bu utility-first yondashuvga asoslangan CSS framework bo'lib, tez va samarali web dizayn yaratish imkonini beradi.</p>
      
      <h2>Tailwind CSS afzalliklari</h2>
      <p>Tailwind CSS quyidagi afzalliklarga ega:</p>
      <ul>
        <li>Utility-first yondashuv</li>
        <li>Moslashuvchanlik</li>
        <li>Responsive dizayn uchun qulay</li>
        <li>Dark mode qo'llab-quvvatlash</li>
        <li>Kichik bundle hajmi (PurgeCSS bilan)</li>
      </ul>
      
      <h2>Tailwind CSS-ni o'rnatish</h2>
      <p>Tailwind CSS-ni o'rnatish uchun:</p>
      <pre><code>npm install -D tailwindcss
npx tailwindcss init</code></pre>
      
      <h2>Tailwind CSS bilan ishlash</h2>
      <p>Tailwind CSS-da elementlarni stillash uchun class nomlaridan foydalaniladi:</p>
      <pre><code>&lt;div class="flex items-center justify-between p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"&gt;
  &lt;h2 class="text-xl font-bold"&gt;Salom, dunyo!&lt;/h2&gt;
  &lt;button class="px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-100"&gt;
    Bosing
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
      
      <h2>Xulosa</h2>
      <p>Tailwind CSS zamonaviy web dizayn uchun ajoyib vosita. U CSS yozish jarayonini tezlashtiradi va dizayn tizimini yaratishda yordam beradi.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    author: "Akmal",
    tags: ["CSS", "Tailwind CSS", "Web Design", "Frontend"],
  },
  {
    id: "typescript-asoslari",
    title: "TypeScript asoslari: Tiplar bilan JavaScript",
    date: "2024-04-15",
    snippet:
      "TypeScript - JavaScript-ning kengaytirilgan versiyasi bo'lib, statik tiplar va boshqa qo'shimcha imkoniyatlarni taqdim etadi.",
    content: `
      <p>TypeScript - bu Microsoft tomonidan yaratilgan ochiq kodli dasturlash tili bo'lib, JavaScript-ning kengaytirilgan versiyasi hisoblanadi.</p>
      
      <h2>TypeScript afzalliklari</h2>
      <p>TypeScript quyidagi afzalliklarga ega:</p>
      <ul>
        <li>Statik tiplar</li>
        <li>Interfeys va tiplar</li>
        <li>Enum va Tuple</li>
        <li>Generiklar</li>
        <li>IDE qo'llab-quvvatlash va avtomatik to'ldirish</li>
        <li>Xatolarni oldindan aniqlash</li>
      </ul>
      
      <h2>TypeScript-ni o'rnatish</h2>
      <p>TypeScript-ni o'rnatish uchun:</p>
      <pre><code>npm install -g typescript
tsc --init</code></pre>
      
      <h2>TypeScript bilan ishlash</h2>
      <p>TypeScript-da tiplarni qo'shish juda oson:</p>
      <pre><code>// Oddiy tiplar
let ism: string = "Akmal";
let yosh: number = 25;
let faol: boolean = true;

// Massivlar
let sonlar: number[] = [1, 2, 3, 4, 5];
let ismlar: Array&lt;string&gt; = ["Ali", "Vali", "Gani"];

// Interfeys
interface Foydalanuvchi {
  id: number;
  ism: string;
  email: string;
  faol?: boolean; // ixtiyoriy maydon
}

// Interfeys ishlatish
function foydalanuvchiMalumotlari(foydalanuvchi: Foydalanuvchi): string {
  return \`\${foydalanuvchi.ism} (\${foydalanuvchi.email})\`;
}</code></pre>
      
      <h2>Xulosa</h2>
      <p>TypeScript JavaScript loyihalarini yanada ishonchli va xavfsiz qiladi. U katta loyihalarda xatolarni kamaytiradi va kod sifatini oshiradi.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    author: "Akmal",
    tags: ["TypeScript", "JavaScript", "Programming", "Web Development"],
  },
  {
    id: "node-js-asoslari",
    title: "Node.js asoslari: Server tomonida JavaScript",
    date: "2024-05-10",
    snippet:
      "Node.js - server tomonida JavaScript-ni ishlatish imkonini beruvchi runtime muhit haqida asosiy ma'lumotlar.",
    content: `
      <p>Node.js - bu Chrome V8 JavaScript engine asosida qurilgan server tomonida ishlaydigan JavaScript runtime muhiti.</p>
      
      <h2>Node.js afzalliklari</h2>
      <p>Node.js quyidagi afzalliklarga ega:</p>
      <ul>
        <li>Asinxron va event-driven arxitektura</li>
        <li>Non-blocking I/O</li>
        <li>Yuqori samaradorlik</li>
        <li>Katta ekotizim (npm)</li>
        <li>Bir xil til (JavaScript) front-end va back-end uchun</li>
      </ul>
      
      <h2>Node.js-ni o'rnatish</h2>
      <p>Node.js-ni o'rnatish uchun rasmiy saytdan yuklab olish mumkin: <a href="https://nodejs.org/">nodejs.org</a></p>
      
      <h2>Birinchi Node.js dasturi</h2>
      <p>Node.js-da oddiy HTTP server yaratish:</p>
      <pre><code>const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Salom, Node.js!');
});

const port = 3000;
server.listen(port, () => {
  console.log(\`Server \${port} portda ishga tushdi\`);
});</code></pre>
      
      <h2>Express.js bilan ishlash</h2>
      <p>Express.js - Node.js uchun eng mashhur web framework:</p>
      <pre><code>const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Salom, Express!');
});

app.listen(port, () => {
  console.log(\`Server \${port} portda ishga tushdi\`);
});</code></pre>
      
      <h2>Xulosa</h2>
      <p>Node.js zamonaviy web ilovalar yaratish uchun kuchli vosita. U JavaScript-ni server tomonida ishlatish imkonini beradi va yuqori samaradorlikka ega.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    author: "Akmal",
    tags: ["Node.js", "JavaScript", "Backend", "Server"],
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return blogPosts.find((post) => post.id === slug)
}

export function getRelatedPosts(currentPostId: string, limit = 3): Post[] {
  return blogPosts.filter((post) => post.id !== currentPostId).slice(0, limit)
}
