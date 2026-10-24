// scripts/fix_rankings.js
import fs from 'fs';
import path from 'path';

// Read build_rich_airports.js
let content = fs.readFileSync(path.resolve('./scripts/build_rich_airports.js'), 'utf-8');

// Define the exact ranking order with scores
const rankScores = [
  { id: "muguang", stability: 99, speed: 98, value: 96, overall: 99, rating: 9.9 },
  { id: "feimaoyun", stability: 97, speed: 96, value: 99, overall: 98, rating: 9.8 },
  { id: "breezenet", stability: 96, speed: 96, value: 99, overall: 98, rating: 9.8 },
  { id: "lingdongcloud", stability: 97, speed: 95, value: 93, overall: 97, rating: 9.7 },
  { id: "feiv", stability: 95, speed: 93, value: 99, overall: 97, rating: 9.7 },
  { id: "laddercloud", stability: 96, speed: 97, value: 92, overall: 96, rating: 9.6 },
  { id: "yinxingren", stability: 98, speed: 95, value: 92, overall: 96, rating: 9.6 },
  { id: "wuyou", stability: 95, speed: 93, value: 94, overall: 95, rating: 9.5 },
  { id: "lingmao", stability: 96, speed: 94, value: 92, overall: 95, rating: 9.5 },
  { id: "flashleap", stability: 96, speed: 96, value: 92, overall: 94, rating: 9.4 },
  { id: "firefly", stability: 93, speed: 91, value: 97, overall: 94, rating: 9.4 },
  { id: "kuajiecloud", stability: 96, speed: 93, value: 92, overall: 93, rating: 9.3 },
  { id: "lightspeed", stability: 95, speed: 97, value: 92, overall: 93, rating: 9.3 },
  { id: "v2yun", stability: 93, speed: 92, value: 95, overall: 92, rating: 9.2 },
  { id: "u1s1", stability: 94, speed: 93, value: 93, overall: 92, rating: 9.2 },
  { id: "jiliancloud", stability: 95, speed: 94, value: 94, overall: 91, rating: 9.1 },
  { id: "quanqiuyun", stability: 93, speed: 92, value: 92, overall: 91, rating: 9.1 },
  { id: "guangnianti", stability: 95, speed: 92, value: 96, overall: 90, rating: 9.0 },
  { id: "sogoyun", stability: 95, speed: 95, value: 90, overall: 90, rating: 9.0 },
  { id: "yuzhoucloud", stability: 94, speed: 91, value: 93, overall: 89, rating: 8.9 },
  { id: "ermaoyun", stability: 93, speed: 91, value: 96, overall: 89, rating: 8.9 },
  { id: "yifanyun", stability: 95, speed: 92, value: 89, overall: 88, rating: 8.8 },
  { id: "edgenova", stability: 94, speed: 92, value: 93, overall: 88, rating: 8.8 },
  { id: "kexincloud", stability: 93, speed: 91, value: 94, overall: 87, rating: 8.7 },
  { id: "sujie", stability: 94, speed: 95, value: 89, overall: 87, rating: 8.7 },
  { id: "kuaili", stability: 92, speed: 89, value: 95, overall: 86, rating: 8.6 },
  { id: "wavenet", stability: 94, speed: 94, value: 88, overall: 86, rating: 8.6 }
];

// Update getAirportsSortedByOverall implementation in the template
const oldSort = `export function getAirportsSortedByOverall() {
  return [...airports].sort((a, b) => b.metrics.overallScore - a.metrics.overallScore);
}`;

const newSort = `// 辅助方法：按综合实力排序（严格遵守用户指定的官方权威顺序 1~27）
export function getAirportsSortedByOverall() {
  return [...airports];
}`;

content = content.replace(oldSort, newSort);

// Write back to build_rich_airports.js
fs.writeFileSync(path.resolve('./scripts/build_rich_airports.js'), content, 'utf-8');

// Now re-run build_rich_airports.js logic directly in this script and update airports.ts
import { airports } from '../src/data/airports.ts';

const updatedAirports = airports.map((a, idx) => {
  const scoreInfo = rankScores.find(s => s.id === a.id) || rankScores[idx];
  return {
    ...a,
    stabilityScore: scoreInfo.stability,
    speedScore: scoreInfo.speed,
    valueScore: scoreInfo.value,
    overallScore: scoreInfo.overall,
    metrics: {
      stabilityScore: Number((scoreInfo.stability / 10).toFixed(1)),
      peakPerformanceScore: Number((scoreInfo.speed / 10).toFixed(1)),
      valueScore: Number((scoreInfo.value / 10).toFixed(1)),
      supportScore: 9.0,
      overallScore: scoreInfo.rating
    }
  };
});

const airportsTsContent = `export interface Plan {
  name: string;
  price: number;
  period: 'month' | 'quarter' | 'half-year' | 'year' | 'one-time';
  trafficGB: number;
  multiplier?: number;
  effectiveTrafficGB?: number;
  features?: string[];
}

export interface Airport {
  id: string;
  name: string;
  slug: string;
  badge?: string;
  tagline: string;
  description: string;

  officialUrl?: string;
  affiliateUrl?: string;

  startingPrice?: number;
  currency?: string;

  lineType: 'IPLC专线' | 'IEPL专线' | 'BGP中继' | '普通公网中转' | '混合线路';
  entryBgp: string;
  establishedYear: number;

  plans: Plan[];

  protocols: string[];
  regions: string[];

  deviceLimit?: string;

  aiSupport?: string[];
  streamingSupport?: string[];

  advantages: string[];
  disadvantages: string[];

  suitableFor: string[];

  sources: string[];
  lastVerified?: string;
  testStatus: 'tested' | 'official-data' | 'unverified';

  metrics: {
    stabilityScore: number;
    peakPerformanceScore: number;
    valueScore: number;
    supportScore: number;
    overallScore: number;
  };

  speedScore?: number;
  stabilityScore?: number;
  valueScore?: number;
  overallScore?: number;

  networkArchitecture?: string;
  streamingAnalysis?: string;
  aiUnblockAnalysis?: string;
  faqs?: Array<{ q: string; a: string }>;
}

export const airports: Airport[] = ${JSON.stringify(updatedAirports, null, 2)};

// 辅助方法：获取按性价比计算每GB单价并排序
export function getAirportsSortedByValue() {
  return [...airports].sort((a, b) => {
    const aMinPlan = a.plans.find(p => p.period === 'month') || a.plans[0];
    const bMinPlan = b.plans.find(p => p.period === 'month') || b.plans[0];
    const aCostPerGb = aMinPlan ? aMinPlan.price / aMinPlan.trafficGB : 999;
    const bCostPerGb = bMinPlan ? bMinPlan.price / bMinPlan.trafficGB : 999;
    return aCostPerGb - bCostPerGb;
  });
}

// 辅助方法：按综合实力排序（严格遵守用户指定的官方权威顺序 1~27）
export function getAirportsSortedByOverall() {
  return [...airports];
}

// 辅助方法：按稳定性排序
export function getAirportsSortedByStability() {
  return [...airports].sort((a, b) => b.metrics.stabilityScore - a.metrics.stabilityScore);
}

// 辅助方法：按低预算入门排序
export function getAirportsSortedByBudget() {
  return [...airports].sort((a, b) => (a.startingPrice || 0) - (b.startingPrice || 0));
}
`;

fs.writeFileSync(path.resolve('./src/data/airports.ts'), airportsTsContent, 'utf-8');
console.log('Successfully updated src/data/airports.ts with user exact rank order 1 to 27!');
