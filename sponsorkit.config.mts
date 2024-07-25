import { defineConfig, tierPresets } from 'sponsorkit';
import { createSyncFn, TsRunner } from 'synckit';
import path from 'path';

const getCurrentUSD2CNH = createSyncFn(path.resolve('./latest-currency.ts'), {
  tsRunner: TsRunner.SWC
});
const exechangeRate = getCurrentUSD2CNH() as number;

console.log({ exechangeRate });

export default defineConfig({
  afdian: {
    exechangeRate
  },
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: {
        avatar: {
          size: 14
        },
        boxWidth: 16,
        boxHeight: 16,
        container: {
          sidePadding: 24
        }
      }
    },
    {
      title: 'Backers',
      preset: {
        avatar: {
          size: 36
        },
        boxWidth: 42,
        boxHeight: 42,
        container: {
          sidePadding: 24
        }
      }
    },
    {
      title: 'Sponsors',
      monthlyDollars: 10,
      preset: {
        avatar: {
          size: 42
        },
        boxWidth: 64,
        boxHeight: 64,
        container: {
          sidePadding: 36
        },
        name: {
          maxLength: 10
        }
      },
      composeAfter(composer) {
        composer.addSpan(10);
      }
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 100,
      preset: tierPresets.medium
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 300,
      preset: tierPresets.large
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 500,
      preset: tierPresets.xl
    }
    // {
    //   title: 'Special Sponsor',
    //   monthlyDollars: Infinity,
    //   composeAfter(compose, _, config) {
    //     if (config.filter?.({ monthlyDollars: Infinity } as any, []) !== false) {
    //       compose
    //         .addSpan(20)
    //         .addText('Special Sponsor', 'sponsorkit-tier-title')
    //         .addSpan(10)
    //         .addSpan(130);
    //     }
    //   }
    // }
  ],
  formats: ['svg', 'png'],
  outputDir: './public',
  renders: [
    {
      width: 800
    },
    {
      width: 1800,
      name: 'sponsors.wide'
    },

    {
      width: 800,
      name: 'sponsors.part1',
      filter({ monthlyDollars }) {
        return monthlyDollars >= 9.9;
      }
    },
    {
      width: 800,
      name: 'sponsors.part2',
      filter({ monthlyDollars }) {
        return monthlyDollars < 9.9;
      }
    }
  ]
});
