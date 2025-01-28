"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, PiggyBank, Calendar } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { LanguageProvider, useLanguage } from "@/components/language";

const content = {
  mn: {
    title: "Апекс Капитал",
    hero: {
      title: "Аялалтай бонд хөтөлбөр",
      description:
        "Арилжааны банкны хадгаламжийн хүүгээс 50%-иар илүү өгөөжтэй, шинэлэг бондын бүтээгдэхүүн",
      cta: "Танилцах",
    },
    benefits: {
      title: "Та юу хожих вэ?",
      items: [
        {
          title: "Тогтмол өгөөж",
          description:
            "Сар, улирал бүрээр тогтмол өгөөж авч нэмэлт орлогыг бүрдүүлнэ.",
        },
        {
          title: "Аялах боломж",
          description:
            "10 сая төгрөг тутамд гадаад улсад аялах эрхийн бичгийн сугалааны 1 эрхтэй болно.",
        },
        {
          title: "Уян хатан нөхцөл",
          description:
            "Хүүгийн эргэн төлөлт болон бондын хугацааг өөрт тохируулан сонгоно.",
        },
      ],
      more: "Дэлгэрэнгүй",
    },
    attention: {
      title: "Та юуг анхаарах хэрэгтэй вэ?",
      items: [
        "Аялалтай бонд хөтөлбөр 2024 оны 7-р сарын 1-ний өдрөөс 2024 оны 9-р сарын 1-ний өдрийн хооронд үргэлжилнэ.",
        "6 хүн тус бүр iTrip-н 2.5 сая төгрөгийн үнэ бүхий пойнт оноо хожих боломжтой.",
        "Хөрөнгө оруулалтын гэрээ, нөхцөлтэй танилцаж, 1 жилээс багагүй хугацаанд бонд эзэмших гэрээ байгуулна.",
        "Аялах газрынхаа цаг агаарыг харж чемоданаа бэлдэнэ.",
      ],
    },
    faq: {
      title: "Түгээмэл асуултууд",
      items: [
        {
          question: "Хөрөнгө оруулалтын доод хэмжээ хэд вэ?",
          answer:
            "Хөрөнгө оруулалтын доод хэмжээ 1 сая төгрөг байна. Гэхдээ аялалын эрхийн бичгийн сугалаанд оролцохын тулд 10 сая төгрөгөөс дээш хөрөнгө оруулах шаардлагатай.",
        },
        {
          question: "Хүүгийн төлбөрийг хэрхэн хүлээн авах вэ?",
          answer:
            "Хүүгийн төлбөрийг сар бүр эсвэл улирал бүр таны сонгосон банкны дансанд шилжүүлэх болно. Та гэрээ байгуулах үедээ хүүгийн төлбөрийн давтамжийг сонгох боломжтой.",
        },
        {
          question: "Аялалын эрхийг хэрхэн ашиглах вэ?",
          answer:
            "Хэрэв та аялалын эрхийн бичгийн сугалаанд хожсон бол iTrip-тэй хамтран ажиллаж буй аялалын компаниудаас сонгон аялах боломжтой. Аялалын эрхийг мөнгөн дүнгээр солих боломжгүй.",
        },
      ],
    },
    cta: {
      title: "Бондод хөрөнгө оруулж, аялалаа төлөвлөөрэй",
      button: "Одоо эхлэх",
    },
    contact: {
      title: "Холбоо барих",
      name: "Нэр",
      email: "И-мэйл",
      phone: "Утасны дугаар",
      submit: "Илгээх",
    },
    footer: "© 2024 Апекс Капитал. Бүх эрх хуулиар хамгаалагдсан.",
  },
  en: {
    title: "Apex Capital",
    hero: {
      title: "Travel Bond Program",
      description:
        "An innovative bond product with 50% higher yield than commercial bank deposits",
      cta: "Learn More",
    },
    benefits: {
      title: "What will you gain?",
      items: [
        {
          title: "Consistent Returns",
          description:
            "Receive regular returns monthly or quarterly to build additional income.",
        },
        {
          title: "Travel Opportunity",
          description:
            "Get 1 entry to win an international travel voucher for every 10 million MNT invested.",
        },
        {
          title: "Flexible Terms",
          description:
            "Choose your preferred interest payment schedule and bond duration.",
        },
      ],
      more: "More Details",
    },
    attention: {
      title: "What should you pay attention to?",
      items: [
        "The Travel Bond Program runs from July 1, 2024 to September 1, 2024.",
        "6 people can win iTrip points worth 2.5 million MNT each.",
        "Review the investment agreement and terms, and sign a contract to hold the bond for at least 1 year.",
        "Check the weather of your travel destination and pack your suitcase accordingly.",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What is the minimum investment amount?",
          answer:
            "The minimum investment amount is 1 million MNT. However, to participate in the travel voucher lottery, you need to invest more than 10 million MNT.",
        },
        {
          question: "How will I receive interest payments?",
          answer:
            "Interest payments will be transferred to your chosen bank account monthly or quarterly. You can select the frequency of interest payments when signing the contract.",
        },
        {
          question: "How can I use the travel voucher?",
          answer:
            "If you win the travel voucher lottery, you can choose to travel with one of iTrip's partner travel companies. The travel voucher cannot be exchanged for cash.",
        },
      ],
    },
    cta: {
      title: "Invest in bonds and plan your travel",
      button: "Start Now",
    },
    contact: {
      emailUs: "Email",
      title: "Contact Us",
      name: "Name",
      email: "Email",
      phone: "Phone Number",
      submit: "Submit",
    },
    footer: "© 2024 Apex Capital. All rights reserved.",
  },
};

function Home() {
  const { language, setLanguage } = useLanguage();
  const t = content[language];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-6 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{t.title}</h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="default"
              onClick={() => setLanguage(language === "mn" ? "en" : "mn")}
            >
              {language === "mn" ? "English" : "Монгол"}
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.section
          key="hero"
          className="text-center py-20"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-primary">
            {t.hero.title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            {t.hero.description}
          </p>
          <Link
            target="blank"
            href="https://www.facebook.com/reel/486360847351908"
          >
            <Button size="lg" className="text-lg">
              {t.hero.cta}
            </Button>
          </Link>
        </motion.section>

        <motion.section
          key="benefits"
          className="py-16"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h3 className="text-3xl font-semibold mb-8 text-center text-primary">
            {t.benefits.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.benefits.items.map((item, index) => (
              <Card
                key={index}
                className="text-center border-primary/20 bg-yellow-400/10 hover:bg-yellow-400/20 transition-all duration-300 relative group cursor-pointer"
              >
                <CardHeader>
                  <CardTitle>
                    {[<PiggyBank />, <Plane />, <Calendar />][index]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="text-xl font-semibold mb-2 text-primary">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          key="attention"
          className="py-16"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h3 className="text-3xl font-semibold mb-8 text-center text-primary">
            {t.attention.title}
          </h3>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {t.attention.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          key="faq"
          className="py-16"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h3 className="text-3xl font-semibold mb-8 text-center text-primary">
            {t.faq.title}
          </h3>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-2xl mx-auto"
          >
            {t.faq.items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        <motion.section
          key="cta"
          className="text-center py-20"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h3 className="text-3xl font-semibold mb-6 text-primary">
            {t.cta.title}
          </h3>
          <Link target="blank" href="https://dbx.apex.mn/">
            <Button size="lg" className="text-lg">
              {t.cta.button}
            </Button>
          </Link>
        </motion.section>

        <motion.section
          key="contact"
          className="py-16"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h3 className="text-3xl font-semibold mb-8 text-center text-primary">
            {t.contact.title}
          </h3>
          <div className="text-center">
            <Button size="lg" className="text-lg" asChild>
              <a href="mailto:investment@apex.mn">Email</a>
            </Button>
          </div>
        </motion.section>
      </main>

      <footer className="bg-primary text-primary-foreground py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}

export default function LanguageWrapper() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}
