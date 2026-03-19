import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта на почту mr.mitya.lun@mail.ru"""
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    message = body.get('message', '').strip()
    offer = body.get('offer', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Имя и телефон обязательны'}, ensure_ascii=False),
        }

    smtp_password = os.environ.get('SMTP_PASSWORD', '')

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта ФормаЛюксДВ'
    msg['From'] = 'plastmaster27@mail.ru'
    msg['To'] = 'mr.mitya.lun@mail.ru'

    offer_line = f'<tr><td style="padding:6px 0;color:#666">Интерес:</td><td style="padding:6px 0"><b>{offer}</b></td></tr>' if offer else ''
    comment_line = f'<tr><td style="padding:6px 0;color:#666">Комментарий:</td><td style="padding:6px 0">{message}</td></tr>' if message else ''

    html = f"""
    <div style="font-family:Arial,sans-serif;max-width:500px;margin:0 auto">
      <h2 style="color:#111;border-bottom:2px solid #111;padding-bottom:10px">Новая заявка с сайта</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:6px 0;color:#666">Имя:</td><td style="padding:6px 0"><b>{name}</b></td></tr>
        <tr><td style="padding:6px 0;color:#666">Телефон:</td><td style="padding:6px 0"><b>{phone}</b></td></tr>
        {offer_line}
        {comment_line}
      </table>
    </div>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
        server.login('plastmaster27@mail.ru', smtp_password)
        server.sendmail('plastmaster27@mail.ru', 'mr.mitya.lun@mail.ru', msg.as_string())

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'ok': True}),
    }