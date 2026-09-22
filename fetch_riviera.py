import urllib.request
import re

url = "https://www.iconicriviera.com/grace-kelly-monaco/"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
try:
    with urllib.request.urlopen(req, timeout=8) as r:
        html = r.read().decode("utf-8", errors="ignore")
        imgs = re.findall(r'https://www\.iconicriviera\.com/wp-content/uploads/[^\s"\'\\]+\.(?:jpg|jpeg|png|webp)', html)
        print("Iconic Riviera imgs:", list(dict.fromkeys(imgs))[:10])
except Exception as e:
    print("Error:", e)
