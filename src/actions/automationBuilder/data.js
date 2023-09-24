// Structure Overview

// Top-Level (Countries)
// Example: CN, ID

// Second-Level (Type of Messages)
// Example: otp, mab-otp, moka-transaction

// Third-Level (unknown or Specifics like axis, byru, etc.) - operator
// Example: unknown, axis, byru

// Fourth-Level (SMS Providers)
// Example: alibaba, nexmo, adai

// Leaf-Level (Details for Each Provider)
// Example: "weight": 100, "per_sms_cost": 338, "override": false

// 1. Country Drop-Down: Select the country to filter down the list.
// 2. Message Type Drop-Down: Further narrow down by type of message.
// 3. Main Table: Here's where it gets interesting. The main table could have rows for axis, byru, etc. You see these when you've made the above selections.
// 4. Expandable Rows: Within each row (say, axis), you can click to expand and see another table inside (or some sort of expandable content) showing the SMS Providers and their respective details.

// Columns:
// Third-Level Names (axis, byru, etc.) as the primary column.
// SMS Providers as secondary columns when you expand a row.
// Leaf-Level Details (like weight, per_sms_cost, override) as rows under each expanded section.

// Alternate Approach: Card + Modal UI Design

// Country Drop-Down: Starts the same; pick a country.
// Message Type Drop-Down: Yep, still need to choose the message type.
// Card Layout: Instead of a table, have card-style blocks for each third-level name like axis, byru, and so on. Each card contains the most critical information, maybe something like an average SMS cost, or the average weight, or some other metric that gives a quick gist of what's going on.
// Click to Open Modal: When someone clicks on a card, it opens a modal with the full details.

// Inside the Modal:
// SMS Providers as Tabs: When the modal opens, you have tabs for each SMS Provider like adai, alibaba, nexmo wavecell, etc.
// Details in Tab: Each tab contains a small table or list that shows weight, sms_per_cost, override.

export const Pricingdata = {
  CN: {
    otp: {
      unknown: {
        alibaba: {
          weight: 100,
          per_sms_cost: 365,
          override: false,
        },
      },
    },
  },
  ID: {
    "findaya-otp": {
      axis: {
        nexmo: {
          weight: 100,
          per_sms_cost: 340,
          override: false,
        },
      },
      byru: {
        nexmo: {
          weight: 100,
          per_sms_cost: 340,
          override: false,
        },
      },
      ceria: {
        nexmo: {
          weight: 100,
          per_sms_cost: 340,
          override: false,
        },
      },
      flexitelkomsel: {
        nexmo: {
          weight: 100,
          per_sms_cost: 340,
          override: false,
        },
      },
      indosat: {
        nexmo: {
          weight: 100,
          per_sms_cost: 340,
          override: false,
        },
      },
      smartfren: {
        nexmo: {
          weight: 100,
          per_sms_cost: 340,
          override: false,
        },
      },
      telkomsel: {
        nexmo: {
          weight: 100,
          per_sms_cost: 340,
          override: false,
        },
      },
      three: {
        nexmo: {
          weight: 100,
          per_sms_cost: 340,
          override: false,
        },
      },
      unknown: {
        nexmo: {
          weight: 100,
          per_sms_cost: 340,
          override: false,
        },
      },
      xl: {
        nexmo: {
          weight: 100,
          per_sms_cost: 340,
          override: false,
        },
      },
    },
    "mab-otp": {
      axis: {
        alibaba: {
          weight: 100,
          per_sms_cost: 365,
          override: false,
        },
      },
      byru: {
        alibaba: {
          weight: 100,
          per_sms_cost: 365,
          override: false,
        },
      },
      ceria: {
        alibaba: {
          weight: 100,
          per_sms_cost: 365,
          override: false,
        },
      },
      flexitelkomsel: {
        alibaba: {
          weight: 100,
          per_sms_cost: 365,
          override: false,
        },
      },
      indosat: {
        alibaba: {
          weight: 100,
          per_sms_cost: 365,
          override: false,
        },
      },
      smartfren: {
        alibaba: {
          weight: 100,
          per_sms_cost: 365,
          override: false,
        },
      },
      telkomsel: {
        alibaba: {
          weight: 100,
          per_sms_cost: 365,
          override: false,
        },
      },
      three: {
        alibaba: {
          weight: 100,
          per_sms_cost: 365,
          override: false,
        },
      },
      unknown: {
        alibaba: {
          weight: 100,
          per_sms_cost: 365,
          override: false,
        },
      },
      xl: {
        alibaba: {
          weight: 100,
          per_sms_cost: 365,
          override: false,
        },
      },
    },
    "moka-otp": {
      axis: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
      byru: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
      ceria: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
      flexitelkomsel: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
      indosat: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
      smartfren: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
      telkomsel: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
      three: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
      unknown: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
      xl: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
    },
    "moka-transaction": {
      axis: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
      byru: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
      ceria: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
      flexitelkomsel: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
      indosat: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
      smartfren: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
      telkomsel: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
      three: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
      unknown: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
      xl: {
        alibaba: {
          weight: 100,
          per_sms_cost: 338,
          override: false,
        },
      },
    },
    otp: {
      axis: {
        adai: {
          weight: 58,
          per_sms_cost: 410,
          override: false,
        },
        alibaba: {
          weight: 13,
          per_sms_cost: 446,
          override: false,
        },
        infobip: {
          weight: 9,
          per_sms_cost: 488,
          override: false,
        },
        nexmo: {
          weight: 13,
          per_sms_cost: 398,
          override: false,
        },
        wavecell: {
          weight: 7,
          per_sms_cost: 457,
          override: false,
        },
      },
      byru: {
        adai: {
          weight: 19,
          per_sms_cost: 418,
          override: false,
        },
        alibaba: {
          weight: 17,
          per_sms_cost: 446,
          override: false,
        },
        infobip: {
          weight: 17,
          per_sms_cost: 443,
          override: false,
        },
        nexmo: {
          weight: 27,
          per_sms_cost: 340,
          override: false,
        },
        wavecell: {
          weight: 20,
          per_sms_cost: 414,
          override: false,
        },
      },
      ceria: {
        adai: {
          weight: 18,
          per_sms_cost: 417,
          override: false,
        },
        alibaba: {
          weight: 16,
          per_sms_cost: 446,
          override: false,
        },
        infobip: {
          weight: 16,
          per_sms_cost: 443,
          override: false,
        },
        nexmo: {
          weight: 19,
          per_sms_cost: 398,
          override: false,
        },
        wavecell: {
          weight: 32,
          per_sms_cost: 300,
          override: false,
        },
      },
      flexitelkomsel: {
        adai: {
          weight: 19,
          per_sms_cost: 418,
          override: false,
        },
        alibaba: {
          weight: 16,
          per_sms_cost: 446,
          override: false,
        },
        infobip: {
          weight: 17,
          per_sms_cost: 443,
          override: false,
        },
        nexmo: {
          weight: 28,
          per_sms_cost: 340,
          override: false,
        },
        wavecell: {
          weight: 20,
          per_sms_cost: 414,
          override: false,
        },
      },
      indosat: {
        adai: {
          weight: 7,
          per_sms_cost: 475,
          override: false,
        },
        alibaba: {
          weight: 29,
          per_sms_cost: 446,
          override: false,
        },
        infobip: {
          weight: 19,
          per_sms_cost: 465,
          override: false,
        },
        nexmo: {
          weight: 36,
          per_sms_cost: 398,
          override: false,
        },
        wavecell: {
          weight: 9,
          per_sms_cost: 480,
          override: false,
        },
      },
      smartfren: {
        adai: {
          weight: 8,
          per_sms_cost: 480,
          override: false,
        },
        alibaba: {
          weight: 15,
          per_sms_cost: 446,
          override: false,
        },
        infobip: {
          weight: 10,
          per_sms_cost: 475,
          override: false,
        },
        nexmo: {
          weight: 13,
          per_sms_cost: 398,
          override: false,
        },
        wavecell: {
          weight: 54,
          per_sms_cost: 397,
          override: false,
        },
      },
      telkomsel: {
        adai: {
          weight: 11,
          per_sms_cost: 465,
          override: false,
        },
        alibaba: {
          weight: 14,
          per_sms_cost: 446,
          override: false,
        },
        infobip: {
          weight: 11,
          per_sms_cost: 460,
          override: false,
        },
        nexmo: {
          weight: 11,
          per_sms_cost: 398,
          override: false,
        },
        wavecell: {
          weight: 53,
          per_sms_cost: 397,
          override: false,
        },
      },
      three: {
        adai: {
          weight: 8,
          per_sms_cost: 475,
          override: false,
        },
        alibaba: {
          weight: 43,
          per_sms_cost: 446,
          override: false,
        },
        infobip: {
          weight: 21,
          per_sms_cost: 465,
          override: false,
        },
        nexmo: {
          weight: 18,
          per_sms_cost: 398,
          override: false,
        },
        wavecell: {
          weight: 10,
          per_sms_cost: 480,
          override: false,
        },
      },
      unknown: {
        adai: {
          weight: 19,
          per_sms_cost: 417,
          override: false,
        },
        alibaba: {
          weight: 16,
          per_sms_cost: 446,
          override: false,
        },
        infobip: {
          weight: 16,
          per_sms_cost: 443,
          override: false,
        },
        nexmo: {
          weight: 29,
          per_sms_cost: 340,
          override: false,
        },
        wavecell: {
          weight: 19,
          per_sms_cost: 414,
          override: false,
        },
      },
      xl: {
        adai: {
          weight: 55,
          per_sms_cost: 410,
          override: false,
        },
        alibaba: {
          weight: 15,
          per_sms_cost: 446,
          override: false,
        },
        infobip: {
          weight: 8,
          per_sms_cost: 488,
          override: false,
        },
        nexmo: {
          weight: 14,
          per_sms_cost: 398,
          override: false,
        },
        wavecell: {
          weight: 8,
          per_sms_cost: 457,
          override: false,
        },
      },
    },
    promotion: {
      axis: {
        adai: {
          weight: 3,
          per_sms_cost: 410,
          override: false,
        },
        alibaba: {
          weight: 65,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 2,
          per_sms_cost: 468,
          override: false,
        },
        wavecell: {
          weight: 31,
          per_sms_cost: 320,
          override: false,
        },
      },
      byru: {
        adai: {
          weight: 1,
          per_sms_cost: 391,
          override: false,
        },
        alibaba: {
          weight: 1,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 1,
          per_sms_cost: 418,
          override: false,
        },
        wavecell: {
          weight: 1,
          per_sms_cost: 366,
          override: false,
        },
      },
      ceria: {
        adai: {
          weight: 22,
          per_sms_cost: 391,
          override: false,
        },
        alibaba: {
          weight: 28,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 20,
          per_sms_cost: 418,
          override: false,
        },
        wavecell: {
          weight: 30,
          per_sms_cost: 300,
          override: false,
        },
      },
      flexitelkomsel: {
        adai: {
          weight: 25,
          per_sms_cost: 391,
          override: false,
        },
        alibaba: {
          weight: 25,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 22,
          per_sms_cost: 418,
          override: false,
        },
        wavecell: {
          weight: 29,
          per_sms_cost: 366,
          override: false,
        },
      },
      indosat: {
        adai: {
          weight: 2,
          per_sms_cost: 475,
          override: false,
        },
        alibaba: {
          weight: 2,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 2,
          per_sms_cost: 465,
          override: false,
        },
        wavecell: {
          weight: 94,
          per_sms_cost: 320,
          override: false,
        },
      },
      smartfren: {
        adai: {
          weight: 2,
          per_sms_cost: 480,
          override: false,
        },
        alibaba: {
          weight: 2,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 2,
          per_sms_cost: 475,
          override: false,
        },
        wavecell: {
          weight: 94,
          per_sms_cost: 320,
          override: false,
        },
      },
      telkomsel: {
        adai: {
          weight: 2,
          per_sms_cost: 465,
          override: false,
        },
        alibaba: {
          weight: 2,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 2,
          per_sms_cost: 460,
          override: false,
        },
        wavecell: {
          weight: 94,
          per_sms_cost: 320,
          override: false,
        },
      },
      three: {
        adai: {
          weight: 2,
          per_sms_cost: 475,
          override: false,
        },
        alibaba: {
          weight: 2,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 2,
          per_sms_cost: 465,
          override: false,
        },
        wavecell: {
          weight: 94,
          per_sms_cost: 320,
          override: false,
        },
      },
      unknown: {
        adai: {
          weight: 26,
          per_sms_cost: 391,
          override: false,
        },
        alibaba: {
          weight: 22,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 23,
          per_sms_cost: 418,
          override: false,
        },
        wavecell: {
          weight: 29,
          per_sms_cost: 366,
          override: false,
        },
      },
      xl: {
        adai: {
          weight: 2,
          per_sms_cost: 410,
          override: false,
        },
        alibaba: {
          weight: 2,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 2,
          per_sms_cost: 468,
          override: false,
        },
        wavecell: {
          weight: 94,
          per_sms_cost: 320,
          override: false,
        },
      },
    },
    "tokopedia-otp": {
      axis: {
        infobip: {
          weight: 39,
          per_sms_cost: 465,
          override: false,
        },
        nexmo: {
          weight: 50,
          per_sms_cost: 398,
          override: false,
        },
        wavecell: {
          weight: 12,
          per_sms_cost: 397,
          override: false,
        },
      },
      byru: {
        infobip: {
          weight: 20,
          per_sms_cost: 465,
          override: false,
        },
        nexmo: {
          weight: 20,
          per_sms_cost: 398,
          override: false,
        },
        wavecell: {
          weight: 20,
          per_sms_cost: 397,
          override: false,
        },
      },
      ceria: {
        infobip: {
          weight: 20,
          per_sms_cost: 465,
          override: false,
        },
        nexmo: {
          weight: 20,
          per_sms_cost: 398,
          override: false,
        },
        wavecell: {
          weight: 20,
          per_sms_cost: 397,
          override: false,
        },
      },
      flexitelkomsel: {
        infobip: {
          weight: 20,
          per_sms_cost: 465,
          override: false,
        },
        nexmo: {
          weight: 20,
          per_sms_cost: 398,
          override: false,
        },
        wavecell: {
          weight: 20,
          per_sms_cost: 397,
          override: false,
        },
      },
      indosat: {
        infobip: {
          weight: 20,
          per_sms_cost: 465,
          override: false,
        },
        nexmo: {
          weight: 20,
          per_sms_cost: 398,
          override: false,
        },
        wavecell: {
          weight: 20,
          per_sms_cost: 397,
          override: false,
        },
      },
      smartfren: {
        infobip: {
          weight: 20,
          per_sms_cost: 465,
          override: false,
        },
        nexmo: {
          weight: 20,
          per_sms_cost: 398,
          override: false,
        },
        wavecell: {
          weight: 20,
          per_sms_cost: 397,
          override: false,
        },
      },
      telkomsel: {
        infobip: {
          weight: 82,
          per_sms_cost: 465,
          override: false,
        },
        nexmo: {
          weight: 4,
          per_sms_cost: 398,
          override: false,
        },
        wavecell: {
          weight: 14,
          per_sms_cost: 397,
          override: false,
        },
      },
      three: {
        infobip: {
          weight: 20,
          per_sms_cost: 465,
          override: false,
        },
        nexmo: {
          weight: 20,
          per_sms_cost: 398,
          override: false,
        },
        wavecell: {
          weight: 20,
          per_sms_cost: 397,
          override: false,
        },
      },
      unknown: {
        infobip: {
          weight: 20,
          per_sms_cost: 465,
          override: false,
        },
        nexmo: {
          weight: 20,
          per_sms_cost: 398,
          override: false,
        },
        wavecell: {
          weight: 20,
          per_sms_cost: 397,
          override: false,
        },
      },
      xl: {
        infobip: {
          weight: 20,
          per_sms_cost: 465,
          override: false,
        },
        nexmo: {
          weight: 20,
          per_sms_cost: 398,
          override: false,
        },
        wavecell: {
          weight: 20,
          per_sms_cost: 397,
          override: false,
        },
      },
    },
    transaction: {
      axis: {
        adai: {
          weight: 7,
          per_sms_cost: 410,
          override: false,
        },
        alibaba: {
          weight: 5,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 3,
          per_sms_cost: 468,
          override: false,
        },
        wavecell: {
          weight: 85,
          per_sms_cost: 320,
          override: false,
        },
      },
      byru: {
        adai: {
          weight: 26,
          per_sms_cost: 391,
          override: false,
        },
        alibaba: {
          weight: 22,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 23,
          per_sms_cost: 418,
          override: false,
        },
        wavecell: {
          weight: 29,
          per_sms_cost: 366,
          override: false,
        },
      },
      ceria: {
        adai: {
          weight: 23,
          per_sms_cost: 391,
          override: false,
        },
        alibaba: {
          weight: 20,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 20,
          per_sms_cost: 418,
          override: false,
        },
        wavecell: {
          weight: 37,
          per_sms_cost: 300,
          override: false,
        },
      },
      flexitelkomsel: {
        adai: {
          weight: 26,
          per_sms_cost: 391,
          override: false,
        },
        alibaba: {
          weight: 22,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 23,
          per_sms_cost: 418,
          override: false,
        },
        wavecell: {
          weight: 29,
          per_sms_cost: 366,
          override: false,
        },
      },
      indosat: {
        adai: {
          weight: 3,
          per_sms_cost: 475,
          override: false,
        },
        alibaba: {
          weight: 5,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 4,
          per_sms_cost: 465,
          override: false,
        },
        wavecell: {
          weight: 88,
          per_sms_cost: 320,
          override: false,
        },
      },
      smartfren: {
        adai: {
          weight: 2,
          per_sms_cost: 480,
          override: false,
        },
        alibaba: {
          weight: 4,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 4,
          per_sms_cost: 475,
          override: false,
        },
        wavecell: {
          weight: 90,
          per_sms_cost: 320,
          override: false,
        },
      },
      telkomsel: {
        adai: {
          weight: 4,
          per_sms_cost: 465,
          override: false,
        },
        alibaba: {
          weight: 5,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 4,
          per_sms_cost: 460,
          override: false,
        },
        wavecell: {
          weight: 87,
          per_sms_cost: 320,
          override: false,
        },
      },
      three: {
        adai: {
          weight: 3,
          per_sms_cost: 475,
          override: false,
        },
        alibaba: {
          weight: 4,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 3,
          per_sms_cost: 465,
          override: false,
        },
        wavecell: {
          weight: 89,
          per_sms_cost: 320,
          override: false,
        },
      },
      unknown: {
        adai: {
          weight: 13,
          per_sms_cost: 391,
          override: false,
        },
        alibaba: {
          weight: 5,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 63,
          per_sms_cost: 418,
          override: false,
        },
        wavecell: {
          weight: 19,
          per_sms_cost: 366,
          override: false,
        },
      },
      xl: {
        adai: {
          weight: 6,
          per_sms_cost: 410,
          override: false,
        },
        alibaba: {
          weight: 5,
          per_sms_cost: 430,
          override: false,
        },
        infobip: {
          weight: 3,
          per_sms_cost: 468,
          override: false,
        },
        wavecell: {
          weight: 86,
          per_sms_cost: 320,
          override: false,
        },
      },
    },
  },
  OTHER: {
    "mab-otp": {
      unknown: {
        alibaba: {
          weight: 100,
          per_sms_cost: 365,
          override: false,
        },
      },
    },
    otp: {
      unknown: {
        alibaba: {
          weight: 100,
          per_sms_cost: 663,
          override: false,
        },
      },
    },
    promotion: {
      unknown: {
        alibaba: {
          weight: 18,
          per_sms_cost: 652,
          override: false,
        },
        wavecell: {
          weight: 82,
          per_sms_cost: 300,
          override: false,
        },
      },
    },
    transaction: {
      unknown: {
        alibaba: {
          weight: 2,
          per_sms_cost: 652,
          override: false,
        },
        wavecell: {
          weight: 98,
          per_sms_cost: 300,
          override: false,
        },
      },
    },
  },
  SG: {
    "mab-otp": {
      unknown: {
        alibaba: {
          weight: 100,
          per_sms_cost: 365,
          override: false,
        },
      },
    },
    otp: {
      unknown: {
        nexmo: {
          weight: 12,
          per_sms_cost: 370,
          override: false,
        },
        wavecell: {
          weight: 88,
          per_sms_cost: 317,
          override: false,
        },
      },
    },
    promotion: {
      unknown: {
        nexmo: {
          weight: 3,
          per_sms_cost: 360,
          override: false,
        },
        wavecell: {
          weight: 97,
          per_sms_cost: 317,
          override: false,
        },
      },
    },
    transaction: {
      unknown: {
        nexmo: {
          weight: 46,
          per_sms_cost: 360,
          override: false,
        },
        wavecell: {
          weight: 54,
          per_sms_cost: 317,
          override: false,
        },
      },
    },
  },
  TH: {
    otp: {
      unknown: {
        wavecell: {
          weight: 100,
          per_sms_cost: 491,
          override: false,
        },
      },
    },
    promotion: {
      unknown: {
        wavecell: {
          weight: 100,
          per_sms_cost: 300,
          override: false,
        },
      },
    },
    transaction: {
      unknown: {
        wavecell: {
          weight: 100,
          per_sms_cost: 300,
          override: false,
        },
      },
    },
  },
  VN: {
    otp: {
      unknown: {
        nexmo: {
          weight: 49,
          per_sms_cost: 367,
          override: false,
        },
        wavecell: {
          weight: 51,
          per_sms_cost: 367,
          override: false,
        },
      },
    },
    promotion: {
      unknown: {
        nexmo: {
          weight: 94,
          per_sms_cost: 340,
          override: false,
        },
        wavecell: {
          weight: 6,
          per_sms_cost: 367,
          override: false,
        },
      },
    },
    transaction: {
      unknown: {
        nexmo: {
          weight: 71,
          per_sms_cost: 340,
          override: false,
        },
        wavecell: {
          weight: 29,
          per_sms_cost: 367,
          override: false,
        },
      },
    },
  },
};
