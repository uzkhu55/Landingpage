import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Аялалтай бонд хөтөлбөр - Апекс Капитал",
  description:
    "Арилжааны банкны хадгаламжийн хүүгээс 50%-иар илүү өгөөжтэй, шинэлэг бондын бүтээгдэхүүн",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}
