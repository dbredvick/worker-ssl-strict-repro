import { NextResponse } from "next/server";

async function redirects(req) {
  const { pathname } = req.nextUrl;
  if (pathname.includes("/hello-world")) {
    const res = await fetch(`https://cfobj.peteryoakum.com/`, {
      method: "GET",
      //   headers: { Authorization: `Bearer ${process.env.REVUE_API}` },
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
    return NextResponse.redirect("/");
  }
}

export async function middleware(req) {
  return await redirects(req);
}
