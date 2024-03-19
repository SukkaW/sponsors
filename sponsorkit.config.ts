import type { BadgePreset } from 'sponsorkit';
import { defineConfig, presets } from 'sponsorkit';

const past: BadgePreset = {
  avatar: {
    size: 16
  },
  boxWidth: 18,
  boxHeight: 18,
  container: {
    sidePadding: 24
  }
};

export default defineConfig({
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: past
    },
    {
      title: 'Backers',
      preset: presets.small
    },
    {
      title: 'Sponsors',
      monthlyDollars: 10,
      preset: {
        avatar: {
          size: 42
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30
        }
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
