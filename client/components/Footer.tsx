import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#f5f1e5" }} className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/gautam-logo.png" alt="Gautam & Associates" className="h-6 w-6" />
              <h3 className="text-sm font-bold text-gray-900 tracking-tight">GAUTAM & ASSOCIATES</h3>
            </div>
          </div>

          {/* Office column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wider text-xs">Office</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>SCO 13 First Floor</li>
              <li>Sector 20-D</li>
              <li>Dakshin-Marg</li>
              <li>Chandigarh</li>
              <li>India</li>
            </ul>
          </div>

          {/* Communications column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wider text-xs">Communications</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>+91 9304560365</li>
              <li>
                <a href="mailto:hello@gautamandassociates.com" className="hover:text-gray-900 transition-colors">
                  hello@gautamandassociates.com
                </a>
              </li>
              <li className="pt-3">
                <a href="https://www.instagram.com/gautamassociates_1990?igsh=MXNrM3JpbG5heGZnaA==" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 font-semibold">
                  <Instagram size={14} />
                  STAY CONNECTED
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom - Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center text-xs text-gray-600">
          <p>© 2026 Gautam & Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
