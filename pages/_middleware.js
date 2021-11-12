import { NextResponse } from "next/server";

async function redirects(req) {
  const { pathname } = req.nextUrl;
  if (pathname.includes("/hello-world")) {
    const res = await fetch(`https://www.getrevue.co/api/v2/issues/latest`, {
      method: "GET",
      headers: { Authorization: `Bearer ${process.env.REVUE_API}` },
    });
    const data = await res.json();
    return NextResponse.redirect(data.issue[0].url);
  }
}

export async function middleware(req) {
  return await redirects(req);
}
