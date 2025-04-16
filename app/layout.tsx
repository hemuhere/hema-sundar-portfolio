import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Hema Sundar Somireddy - Sr UI UX Designer & Frontend Developer',
  description:
    'As a UI, UX Designer, and Architect with 9+ years of experience in designing WEB and MOBILE applications.
I am an expert in Product Design, UX Subject Matter Expert, UI Wireframes (using Adobe XD, Figma), Adobe Photoshop, Prototypes (using Adobe XD, Figma), Responsive Design, Micro Front-end level design, e-commerce design, UXPin, Axure, Balsamiq, Sketch, InVision, Adobe Illustrator, Miro, Zeplin, UX Copywriter, UX Research, FSC, A/B Testing, Adobe After Effects, XAML-Based UI Design, Material UI component customizations, JavaScript, HTML5, CSS3, SCSS, Python, MySQL, Tailwind CSS, LESS, Svelte, Mobile Responsiveness, AEM websites, WordPress, Angular, React, Salesforce, Atlassian Jira, PHP, Quality Assurance in Design, Design Systems (created with Adobe XD, Figma), portfolio showcasing, ANTD, Bootstrap, Stencil JS, E-commerce, Excel, Visio, Microsoft Access, Microsoft Tools, PowerPoint, Smartsheet..
Also, I can handle business analysis, agile, scrum, JIRA board, confluence, architecture design, prototyping (using Adobe XD, Figma), and lead a team.',
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
