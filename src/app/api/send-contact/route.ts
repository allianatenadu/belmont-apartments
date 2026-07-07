import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'belmontoapartments@gmail.com'
const FROM_EMAIL  = process.env.FROM_EMAIL  || 'onboarding@resend.dev'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: `Belmont Apartments <${FROM_EMAIL}>`,
      to: [ADMIN_EMAIL],
      replyTo: email,
      subject: `New Contact Message — ${name}${subject ? `: ${subject}` : ''}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: Georgia, serif; background: #F8F5F0; margin: 0; padding: 0; }
              .wrapper { max-width: 600px; margin: 0 auto; background: #ffffff; }
              .header { background: #1C1A17; padding: 40px 48px; }
              .header h1 { color: #C9A96E; font-size: 28px; font-weight: 300; margin: 0; letter-spacing: 0.1em; }
              .header p { color: #6B6560; font-size: 12px; margin: 8px 0 0; letter-spacing: 0.2em; text-transform: uppercase; font-family: sans-serif; }
              .body { padding: 48px; }
              .label { font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: #C9A96E; font-family: sans-serif; margin-bottom: 4px; }
              .value { font-size: 16px; color: #1C1A17; margin: 0 0 24px; font-weight: 300; }
              .divider { border: none; border-top: 1px solid #E8E2D9; margin: 32px 0; }
              .note-box { background: #F8F5F0; padding: 20px 24px; margin-top: 8px; }
              .note-box p { font-size: 14px; color: #6B6560; margin: 0; line-height: 1.6; font-family: sans-serif; white-space: pre-wrap; }
              .footer { background: #1C1A17; padding: 24px 48px; }
              .footer p { color: #6B6560; font-size: 11px; font-family: sans-serif; margin: 0; }
              .reply-tip { background: #f0f7f0; border-left: 3px solid #C9A96E; padding: 12px 16px; margin-bottom: 32px; font-family: sans-serif; font-size: 12px; color: #6B6560; }
            </style>
          </head>
          <body>
            <div class="wrapper">
              <div class="header">
                <p>New Contact Message</p>
                <h1>Belmont Apartments</h1>
              </div>

              <div class="body">
                <div class="reply-tip">
                  💬 Hit <strong>Reply</strong> to respond directly to ${name} at ${email}
                </div>

                <p class="label">Name</p>
                <p class="value">${name}</p>

                <p class="label">Email</p>
                <p class="value"><a href="mailto:${email}" style="color:#1C1A17;">${email}</a></p>

                <p class="label">Subject</p>
                <p class="value">${subject || '—'}</p>

                <hr class="divider" />

                <p class="label">Message</p>
                <div class="note-box">
                  <p>${message}</p>
                </div>
              </div>

              <div class="footer">
                <p>Belmont Apartments · 12 Belmont Avenue, SDA Road, Akim Oda · belmontoapartments@gmail.com</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Unexpected error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}