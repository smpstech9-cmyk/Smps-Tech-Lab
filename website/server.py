#!/usr/bin/env python3
import http.server
import socketserver
import os

PORT = 8080
DIRECTORY = "/app/website"

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

if __name__ == "__main__":
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"✅ Server running at http://localhost:{PORT}")
        print(f"📂 Serving files from: {DIRECTORY}")
        print("\n🌐 Open your browser and visit:")
        print(f"   http://localhost:{PORT}/index.html")
        print("\n📄 Available pages:")
        print("   - index.html (Home)")
        print("   - about.html (About)")
        print("   - investor.html (IP Portfolio)")
        print("   - collaborate.html (Collaborate)")
        print("   - careers.html (Careers)")
        print("   - ecosystem.html (Ecosystem)")
        print("   - insights.html (Insights)")
        print("   - contact.html (Contact)")
        print("\nPress Ctrl+C to stop the server\n")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n🛑 Server stopped.")
