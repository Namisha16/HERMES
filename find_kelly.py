import urllib.request
import re

urls = [
    "https://beyondgracekelly.com/grace-kelly-hermes-bag/",
    "https://graziamagazine.com/us/articles/the-hermes-kelly-bag-history/",
    "https://priveporter.com/the-history-of-the-hermes-kelly-bag/"
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
        with urllib.request.urlopen(req, timeout=5) as r:
            html = r.read().decode("utf-8", errors="ignore")
            imgs = re.findall(r'https://[^\s"\'<>]+\.(?:jpg|jpeg|webp)', html)
            imgs = [i for i in imgs if "kelly" in i.lower() or "grace" in i.lower() or "rainier" in i.lower() or "1956" in i.lower()]
            print(f"[{url}] found {len(imgs)} imgs:")
            for img in imgs[:5]:
                print("  ", img)
    except Exception as e:
        print(f"[{url}] error: {e}")
