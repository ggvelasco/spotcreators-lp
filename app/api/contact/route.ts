import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_INFLUENCER = "parcerias@spotcreators.com.br";
const EMAIL_MARCA = "comercial@spotcreators.com.br";
const EMAIL_FROM = "noreply@spotcreators.com.br"; // deve ser um email do seu domínio verificado no Resend

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, ...fields } = body;

    if (!type || (type !== "influencer" && type !== "marca")) {
      return NextResponse.json({ error: "Tipo inválido." }, { status: 400 });
    }

    const to = type === "influencer" ? EMAIL_INFLUENCER : EMAIL_MARCA;

    // ── Monta o HTML do email ──────────────────────────────────────────
    const rows = Object.entries(fields)
      .map(
        ([key, value]) => `
        <tr>
          <td style="padding:8px 12px;background:#1a1a1a;color:#999;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;width:160px;white-space:nowrap;">
            ${key}
          </td>
          <td style="padding:8px 12px;background:#111;color:#fff;font-size:14px;">
            ${value || "—"}
          </td>
        </tr>
      `,
      )
      .join("");

    const isInfluencer = type === "influencer";
    const accentColor = "#ffd100";
    const subject = isInfluencer
      ? `Nova candidatura de influencer — ${fields.nome || "sem nome"}`
      : `Novo contato de marca — ${fields.marca || "sem nome"}`;

    const html = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head><meta charset="UTF-8" /></head>
      <body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

                <!-- Header -->
                <tr>
                  <td style="background:linear-gradient(135deg,#ffd100,#ffaa00);padding:3px 0 0 0;border-radius:12px 12px 0 0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background:#111;padding:32px 40px;border-radius:10px 10px 0 0;">
                          <p style="margin:0 0 8px 0;font-size:10px;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;color:${accentColor};">
                            Spot Creators — ${isInfluencer ? "Novo Influencer" : "Nova Marca"}
                          </p>
                          <h1 style="margin:0;font-size:24px;font-weight:900;color:#fff;letter-spacing:-0.03em;">
                            ${isInfluencer ? "Candidatura recebida" : "Contato de marca recebido"}
                          </h1>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="background:#111;padding:0 40px 40px 40px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:8px;overflow:hidden;border:1px solid #222;">
                      ${rows}
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background:#0a0a0a;padding:24px 40px;border-radius:0 0 12px 12px;border-top:1px solid #1a1a1a;">
                    <p style="margin:0;font-size:11px;color:#444;text-align:center;">
                      Mensagem enviada via spotcreators.com.br
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to,
      subject,
      html,
      // Reply-to para poder responder direto para quem enviou
      replyTo: fields.email || undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erro ao enviar email." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}
