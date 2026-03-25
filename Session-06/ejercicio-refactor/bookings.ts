type Room = {
  name: string;
  nights: number;
  price: number;
};

type Booking = {
  id: string;
  user: string;
  rooms: Room[];
  discount?: string;
};

type Result = {
  ok: boolean;
  total: number;
};

const PROMO = 0.1;
const STAFF = 0.5;
const VIP = 0.2;

export function calc(b: Booking): Result {
  if (!b || !b.rooms || b.rooms.length === 0) {
    throw new Error("Invalid booking");
  }

  let total = 0;

  for (let i = 0; i < b.rooms.length; i++) {
    total += b.rooms[i].nights * b.rooms[i].price;
  }

  if (b.discount === "promo") total -= total * PROMO;
  if (b.discount === "staff") total -= total * STAFF;
  if (b.discount === "vip") total -= total * VIP;

  console.log("saving...", b.id);

  return { ok: true, total };
}

/**
 * Main problems detected:
 *
 * - Poor naming in original code (R, B, x, etc.).
 * - SRP violation: function does calculation + logging.
 * - Magic numbers for discounts.
 * - Bad error handling (throwing string).
 * - Code duplication in discount logic.
 */