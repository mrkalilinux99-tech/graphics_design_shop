# Graphics Design Shop - Free Starter Website + PWA

This project gives you:
- A responsive graphics-design business website
- Services and portfolio sections
- WhatsApp enquiry button
- Order/request form
- Python Flask backend
- CSV order storage
- PWA files so the site can be installed like an app on supported devices

## 1. Install Python
Use Python 3.11+.

## 2. Open terminal in this folder
```bash
python -m venv venv
```

Windows:
```bash
venv\Scripts\activate
```

## 3. Install Flask
```bash
pip install -r requirements.txt
```

## 4. Start
```bash
python app.py
```

Open:
http://127.0.0.1:5000

## 5. Customize
Open `static/js/app.js` and change:
- SHOP_NAME
- WHATSAPP_NUMBER
- PHONE
- EMAIL
- ADDRESS

You can also edit text in `templates/index.html`.

## PWA
The website includes `manifest.webmanifest` and `service-worker.js`.
When hosted over HTTPS, supported browsers can offer "Install app".

## Important
The sample order form stores requests in `orders.csv` on the server.
For a real public website, use a proper hosted database/email/WhatsApp workflow and add spam protection.
