import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { error } = await resend.emails.send({
      from: "The Hidden Circle <onboarding@resend.dev>",
      to: ["jordanlil666@gmail.com"], // Replace with your email
      subject: "New Membership Request",
      html: `
        <h2>New Membership Request</h2>

        <p><strong>First Name:</strong> ${data.firstName}</p>
        <p><strong>Last Name:</strong> ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Country:</strong> ${data.country}</p>
        <p><strong>Profession:</strong> ${data.profession}</p>
        <p><strong>Phone:</strong> ${data.Phone || "None"}</p>

        <hr>

        <p><strong>Reason:</strong></p>
        <p>${data.message}</p>
      `,
    });

    if (error) {
      return NextResponse.json(error, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }
}