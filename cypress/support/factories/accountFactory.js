import { faker } from '@faker-js/faker'

export const generateAccount = (overrides = {}) => ({
  accountName: `AC_${faker.finance.accountName()}`, // e.g., "AC_Investment Account"
  balance: faker.finance.amount({ min: 100, max: 10000, dec: 2 }), // e.g., "5234.50"
  currency: faker.finance.currencyCode(), // e.g., "USD"
  iban: faker.finance.iban(), // e.g., "DE89370400440532013000"
  createdAt: faker.date.past({ years: 1 }), // Random date in the past year
  ...overrides, // Allow custom overrides
});