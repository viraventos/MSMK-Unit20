/* Clean code principiles
 * 
 * Exercise: Detect clean code problems
 * 
 * Smells: Naming, SRP violated, code duplicity, magic numbers, error management, complex function
*/ 

type R = { n: string; nts: number; pr: number; g?: number };
type B = { id: string; usr: string; rooms: R[]; ds?: string; tot?: number };

export function calc(b: B): any {
  if (!b || !b.rooms || b.rooms.length == 0) throw "err";

  let x = 0;
  for (let i = 0; i < b.rooms.length; i++)  x += b.rooms[i].nts * b.rooms[i].pr;

  if (b.ds) {
  if (b.ds === "promo") x = x - x * 0.1;
  if (b.ds === "staff") x = x - x * 0.5;
  if (b.ds === "vip") x = x - x * 0.2;
  }

  console.log("saving...", b.id);
  console.log("email to...", b.usr);

  return { ok: true, t: x };
}

/**
 * Write here the problems you detected:
 *
 * 1. Naming — Types and variables use cryptic abbreviations (R, B, x, nts, pr, ds, tot).
 *    Names should reveal intent without needing comments to explain them.
 *
 * 2. SRP Violated — calc() does three things: calculates the subtotal,
 *    applies discounts, and handles side effects (logging, email notification).
 *    Each function should have one single reason to change.
 *
 * 3. MAGIC Numbers & Magic Strings — Discount rates (0.1, 0.5, 0.2) and
 *    discount codes ("promo", "staff", "vip") are hardcoded inline.
 *    They should be extracted to named constants.
 *
 * 4. Poor Error Handling — `throw "err"` throws a raw string instead of
 *    an Error object, losing the stack trace and any meaningful message.
 *
 * 5. Weak Return Type — returning `any` discards all TypeScript type safety.
 *    The caller has no idea what shape the result has.
 *
 * 6. Loose Equality — `b.rooms.length == 0` uses == instead of ===,
 *    which allows implicit type coercion in JS/TS.
 *
 * 7. Imperative Loop — manual for loop with index to sum values
 *    is more verbose and error-prone than Array.reduce().
 */


type DiscountCode = "promo" | "staff" | "vip";

// Constants (SRP) — centralize configuration values with meaningful names
const DISCOUNT_RATES: Record<DiscountCode, number> = {
  promo: 0.10,
  staff: 0.50,
  vip:   0.20,
};


// Types (SRP) — clearly defined data structures with meaningful names and strict typing
type Room = {
  name:          string;
  nights:        number;
  pricePerNight: number;
  guests?:       number;
};

type Booking = {
  id:            string;
  userEmail:     string;
  rooms:         Room[];
  discountCode?: DiscountCode;
};

type BookingResult = {
  success: boolean;
  total:   number;
};

// Functions (SRP) — each function has a single responsibility and a clear purpose
function calculateSubtotal(rooms: Room[]): number {
  return rooms.reduce(
    (sum, room) => sum + room.nights * room.pricePerNight,
    0
  );
}

function applyDiscount(amount: number, discountCode?: DiscountCode): number {
  if (!discountCode) return amount;
  const rate = DISCOUNT_RATES[discountCode];
  return amount * (1 - rate);
}

function logBookingNotifications(id: string, userEmail: string): void {
  console.log(`Saving booking ${id}...`);
  console.log(`Sending confirmation email to ${userEmail}...`);
}


// Main function (SRP) — orchestrates the booking calculation process
export function calculateBookingTotal(booking: Booking): BookingResult {
  if (!booking?.rooms?.length) {
    throw new Error("Invalid booking: must contain at least one room");
  }

  const subtotal = calculateSubtotal(booking.rooms);
  const total    = applyDiscount(subtotal, booking.discountCode);

  logBookingNotifications(booking.id, booking.userEmail);

  return { success: true, total };
}