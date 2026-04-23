'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingEmails(data: {
  name: string;
  email: string;
  type: string;
  message: string;
  date: string;
  time: string;
  language: string;
}) {
  const { name, email, type, message, date, time, language } = data;

  try {
    // 1. Email para Gabriel (Notificación de nueva reserva)
    const { error: adminError } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'gabriel13iturre@gmail.com',
      subject: `🚀 Nueva reunión agendada: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h1 style="color: #222;">¡Nueva reserva!</h1>
          <hr />
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Tipo:</strong> ${type}</p>
          <p><strong>Fecha:</strong> ${date}</p>
          <p><strong>Hora:</strong> ${time}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
        </div>
      `,
    });

    if (adminError) {
      console.error('Resend Admin Error:', adminError);
    }

    // 2. Email para el Cliente (Confirmación e información)
    const subject = language === 'es' 
      ? 'Confirmación de Reunión - Gabriel Iturre' 
      : 'Meeting Confirmation - Gabriel Iturre';
    
    const html = language === 'es' 
      ? `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 12px;">
          <h2 style="color: #059669;">Hola ${name},</h2>
          <p>Gracias por agendar una reunión. He recibido tu solicitud y ya está en mi calendario.</p>
          <div style="background: #f7f7f9; padding: 24px; border-radius: 12px; margin: 24px 0; border: 1px solid #ebebeb;">
            <p style="margin-top: 0;"><strong>Detalles de la reunión:</strong></p>
            <p>📅 <strong>Fecha:</strong> ${date}</p>
            <p>⏰ <strong>Hora:</strong> ${time} (GMT-3)</p>
            <p style="margin-bottom: 0;">🔗 <strong>Link:</strong> Te enviaré el link de Google Meet unos minutos antes.</p>
          </div>
          <p>Si necesitas cambiar la fecha o cancelar, por favor responde directamente a este correo.</p>
          <p style="margin-top: 32px;">¡Hablamos pronto!<br><br><strong>Gabriel Iturre</strong><br>Product Engineer</p>
        </div>
      `
      : `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 12px;">
          <h2 style="color: #059669;">Hi ${name},</h2>
          <p>Thanks for scheduling a meeting. I've received your request and it's now in my calendar.</p>
          <div style="background: #f7f7f9; padding: 24px; border-radius: 12px; margin: 24px 0; border: 1px solid #ebebeb;">
            <p style="margin-top: 0;"><strong>Meeting Details:</strong></p>
            <p>📅 <strong>Date:</strong> ${date}</p>
            <p>⏰ <strong>Time:</strong> ${time} (GMT-3)</p>
            <p style="margin-bottom: 0;">🔗 <strong>Link:</strong> I'll send the Google Meet link a few minutes before the meeting.</p>
          </div>
          <p>If you need to reschedule or cancel, please reply directly to this email.</p>
          <p style="margin-top: 32px;">Talk soon!<br><br><strong>Gabriel Iturre</strong><br>Product Engineer</p>
        </div>
      `;

    const { error: clientError } = await resend.emails.send({
      from: 'Gabriel Iturre <onboarding@resend.dev>',
      to: email,
      subject: subject,
      html: html,
      replyTo: 'gabriel13iturre@gmail.com'
    });

    if (clientError) {
      console.error('Resend Client Error:', clientError);
    }

    return { success: !adminError && !clientError };
  } catch (error) {
    console.error('Unexpected Booking Error:', error);
    return { success: false, error };
  }
}
