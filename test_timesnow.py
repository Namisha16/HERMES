import urllib.request
import re

url = "https://www.timesnownews.com/lifestyle/fashion/how-grace-kelly-hid-her-pregnancy-with-a-hermes-bag-and-made-history-article-116174783"
try:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"})
    with urllib.request.urlopen(req, timeout=5) as r:
        html = r.read().decode("utf-8", errors="ignore")
        imgs = re.findall(r'https://[^\s"\'<>]+\.(?:jpg|jpeg|png|webp)', html)
        print("Found:", len(imgs))
        for img in imgs[:10]:
            print(" ", img)
except Exception as e:
    print(e)
