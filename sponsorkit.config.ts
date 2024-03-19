import { defineConfig, presets } from 'sponsorkit';
import { getCurrentUSD2CNH } from './latest-currency' with { type: 'macro' }; // macro import

const exechangeRate = getCurrentUSD2CNH() as any as number; // macro usage

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
      preset: presets.medium
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 300,
      preset: presets.large
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 500,
      preset: presets.xl
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
  ]
});
