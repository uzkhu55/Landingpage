"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Stock {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  icon?: string;
}

const mockStocks: Stock[] = [
  {
    id: "1",
    name: "Nvidia",
    symbol: "NVDA",
    price: 118.42,
    change: -24.2,
    changePercent: -16.97,
    icon: "🟢",
  },
  {
    id: "2",
    name: "Microsoft",
    symbol: "MSFT",
    price: 434.56,
    change: -9.5,
    changePercent: -2.14,
    icon: "⚪",
  },
  {
    id: "3",
    name: "MNT/USD",
    symbol: "MNT",
    price: 3440.29,
    change: 0.0,
    changePercent: 0.0,
    icon: "🔵",
  },
  {
    id: "4",
    name: "Rio Tinto",
    symbol: "RIO",
    price: 61.96,
    change: -0.14,
    changePercent: -0.22,
    icon: "🔴",
  },
  {
    id: "5",
    name: "Meta",
    symbol: "META",
    price: 659.89,
    change: 12.39,
    changePercent: 1.91,
    icon: "⚪",
  },
  {
    id: "6",
    name: "Netflix",
    symbol: "NFLX",
    price: 971.89,
    change: -5.7,
    changePercent: -0.58,
    icon: "🔴",
  },
  {
    id: "7",
    name: "Bitcoin",
    symbol: "BTC",
    price: 102068,
    change: 978.0,
    changePercent: 0.96,
    icon: "🟡",
  },
  {
    id: "8",
    name: "Mongolian Mining Corp",
    symbol: "MMC",
    price: 0.9242,
    change: -0.0778,
    changePercent: -7.78,
    icon: "⚪",
  },
  {
    id: "9",
    name: "Mongolia Energy Corp LTD",
    symbol: "MEC",
    price: 0.0708,
    change: -0.0047,
    changePercent: -6.24,
    icon: "⚪",
  },
  {
    id: "10",
    name: "SouthGobi",
    symbol: "SGQ",
    price: 0.3,
    change: 0.017,
    changePercent: 6.01,
    icon: "⚫",
  },
];

function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: Math.abs(num) < 1 ? 4 : 2,
    maximumFractionDigits: Math.abs(num) < 1 ? 4 : 2,
  }).format(num);
}

function StockItem({ stock }: { stock: Stock }) {
  const isPositive = stock.change > 0;
  const isNeutral = stock.change === 0;

  return (
    <div className="flex items-center space-x-2 px-4 py-2 bg-card rounded-lg border border-border/50 hover:bg-accent/50 transition-colors">
      <span className="text-lg">{stock.icon}</span>
      <div className="flex flex-col min-w-[120px]">
        <span className="font-medium">{stock.symbol}</span>
        <span className="text-sm text-muted-foreground">{stock.name}</span>
      </div>
      <div className="flex flex-col items-end min-w-[100px]">
        <span className="font-medium">{formatNumber(stock.price)}</span>
        <span
          className={cn(
            "text-sm",
            isPositive && "text-green-500",
            isNeutral && "text-muted-foreground",
            !isPositive && !isNeutral && "text-red-500"
          )}
        >
          {isPositive && "+"}
          {formatNumber(stock.change)} ({isPositive && "+"}
          {formatNumber(stock.changePercent)}%)
        </span>
      </div>
    </div>
  );
}

export function StockTicker() {
  const [stocks, setStocks] = useState<Stock[]>(mockStocks);
  const containerRef = useRef<HTMLDivElement>(null);
  const [duplicateCount, setDuplicateCount] = useState(3);

  useEffect(() => {
    const updateDuplicateCount = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const itemWidth = 300; // Approximate width of each stock item
      const visibleItems = Math.ceil(containerWidth / itemWidth);
      setDuplicateCount(Math.max(3, visibleItems));
    };

    updateDuplicateCount();
    window.addEventListener("resize", updateDuplicateCount);
    return () => window.removeEventListener("resize", updateDuplicateCount);
  }, []);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prevStocks) =>
        prevStocks.map((stock) => ({
          ...stock,
          price: stock.price * (1 + (Math.random() - 0.5) * 0.002),
          change: stock.price * ((Math.random() - 0.5) * 0.002),
          changePercent: (Math.random() - 0.5) * 0.4,
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const duplicatedStocks = Array(duplicateCount).fill(stocks).flat();

  return (
    <div
      className="w-full overflow-hidden bg-background/80 backdrop-blur-sm border-y"
      ref={containerRef}
    >
      <motion.div
        className="flex items-center py-4"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
      >
        {duplicatedStocks.map((stock, index) => (
          <StockItem key={`${stock.id}-${index}`} stock={stock} />
        ))}
      </motion.div>
    </div>
  );
}
