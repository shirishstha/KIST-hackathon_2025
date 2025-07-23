import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-stone-50 text-black relative overflow-hidden mt-20 z-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-20 w-2 h-2 bg-orange-400 rounded-full opacity-60"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-indigo-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-40 right-20 w-1 h-1 bg-indigo-400 rounded-full opacity-30"></div>
        <div className="absolute top-20 right-1/4 w-1 h-1 bg-orange-400 rounded-full opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left md:text-center">
          {/* College Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-400">KIST College of Management</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-start gap-2 md:justify-center">
                <MapPin className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p>Kamalpokhari, Kathmandu</p>
                  <p>Nepal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-indigo-700">Contact Us</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center gap-2 md:justify-center">
                <Phone className="w-4 h-4 text-indigo-700" />
                <span>+977-9861135804</span>
              </div>
              <div className="flex items-center gap-2 md:justify-center">
                <Mail className="w-4 h-4 text-indigo-700" />
                <span>kisthackfest@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Admin Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-400">Contact Admin</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center gap-2 md:justify-center">
                <Mail className="w-4 h-4 text-orange-400" />
                <span>sthasiriz123@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-indigo-700">Follow Us</h3>
            <div className="flex gap-4 md:justify-center">
              <Link
                to="https://www.facebook.com/people/kisthackfest/61578345730117/"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-indigo-700 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                to="https://www.instagram.com/kist.hackfest?igsh=MWd5MWN5MzNpMHVleQ%3D%3D&utm_source=qr"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-orange-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
            <div className="text-gray-600 text-sm">
              <p>Stay connected for updates</p>
              <p>and announcements</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 w-full">
          <div className="text-center">
            <div className="text-gray-600 text-sm">
              <p>&copy; 2025 KIST HACKFEST. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
