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
 * 
 * 
 */