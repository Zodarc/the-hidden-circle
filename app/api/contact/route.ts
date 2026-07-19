import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { error } = await resend.emails.send({
      from: "The Hidden Circle <onboarding@resend.dev>",
      to: ["jordanlil666@gmail.com"],
      subject: `New Contact Message - ${data.subject}`,
      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>

        <hr>

        <p>${data.message}</p>
      `,
    });

    if (error) {
      return NextResponse.json(error, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }
}