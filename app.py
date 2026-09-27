from flask import Flask, render_template, request, jsonify
from datetime import datetime
import csv
from pathlib import Path
from flask import send_from_directory

app = Flask(__name__)
ORDERS = Path("orders.csv")

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/google20dc1fec3d6868a5.html')
def google_verification():
    return send_from_directory('.', 'google20dc1fec3d6868a5.html')

@app.post("/api/order")
def order():
    data = request.get_json(silent=True) or {}
    name = str(data.get("name", "")).strip()
    phone = str(data.get("phone", "")).strip()
    service = str(data.get("service", "")).strip()
    message = str(data.get("message", "")).strip()

    if not name or not phone or not service:
        return jsonify({"ok": False, "message": "Please fill name, phone and service."}), 400

    new_file = not ORDERS.exists()
    with ORDERS.open("a", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        if new_file:
            writer.writerow(["date", "name", "phone", "service", "message"])
        writer.writerow([datetime.now().isoformat(timespec="seconds"), name, phone, service, message])

    return jsonify({"ok": True, "message": "Your design request was saved successfully."})

@app.route("/health")
def health():
    return {"status": "ok"}

if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)

