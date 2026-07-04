import { NextResponse } from "next/server";

import { resend } from "@/lib/resend";

import { contactSchema } from "@/lib/validations/contact";


export async function POST(req: Request) {

  try {

    const body =
      await req.json();



    const data =
      contactSchema.parse(body);



    await resend.emails.send({

      from:
        "Portfolio <onboarding@resend.dev>",


      to:
        process.env.CONTACT_EMAIL!,


      subject:
        `Portfolio Contact: ${data.subject}`,


      html: `

      <h2>New Portfolio Message 🚀</h2>


      <p>
      <b>Name:</b> ${data.name}
      </p>


      <p>
      <b>Email:</b> ${data.email}
      </p>


      <p>
      <b>Subject:</b> ${data.subject}
      </p>


      <hr/>


      <p>
      ${data.message}
      </p>

      `,

    });



    return NextResponse.json({

      success:true,

      message:
      "Message sent successfully"

    });


  } catch(error) {


    return NextResponse.json(
      {
        success:false,

        message:
        "Failed to send message",
      },

      {
        status:400,
      }
    );

  }

}