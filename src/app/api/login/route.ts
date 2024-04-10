import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, response: NextResponse) {
  //   redirect("https://nextjs.org");

  return NextResponse.redirect("https://nextjs.org");
}
