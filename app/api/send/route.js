import { EmailTemplate } from "../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["fromdevtoprod23@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({
        firstName: body.firstName || "empty",
        lastName: body.lastName || "empty",
        email: body.email || "empty",
        message: body.message || "empty",
      }),
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
