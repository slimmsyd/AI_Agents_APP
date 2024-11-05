"use client";
import Video from "./video";
import { useCallback } from "react";
import Link from "next/link";
export default function Footer() {
  const scrollToSection = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="mx-auto max-w-7xl overflow-hidden px-6 pb-8 lg:px-8 text-white">
      <div className="xl:grid xl:grid-cols-3">
        <div className="space-y-8">
          <div className="flex space-x-6">
            <a target="_blank" className="text-white hover:text-slate-600" href="https://www.facebook.com/profile.php?id=61560817671689">
              <span className="sr-only">Facebook</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a target="_blank" className="text-slate-400 hover:text-slate-600" href="https://www.instagram.com/myforeverbooksapp">
              <span className="sr-only">Instagram</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a target="_blank" className="text-slate-400 hover:text-slate-600" href="https://www.pinterest.com/myforeverbooks">
              <span className="sr-only">Pinterest</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.35.35 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"></path>
              </svg>
            </a>
            <a target="_blank" className="text-slate-400 hover:text-slate-600" href="https://www.youtube.com/@myforeverbooks/featured">
              <span className="sr-only">YouTube</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2">
            <div className="xl:justify-self-end">
              <h3 className="text-sm font-semibold leading-6 text-white">Features</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a className="text-sm leading-6 text-white hover:text-slate-300" href="/features/imessage">ETC</a>
                </li>
                <li>
                  <a className="text-sm leading-6 text-white hover:text-slate-300" href="/features/whatsapp">ETC</a>
                </li>
                <li>
                  <a className="text-sm leading-6 text-white hover:text-slate-300" href="/features/android">ETC</a>
                </li>
                <li>
                  <a className="text-sm leading-6 text-white hover:text-slate-300" href="/features/groupme">ETC</a>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0 xl:justify-self-end">
              <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a className="text-sm leading-6 text-white hover:text-slate-300" href="/pricing">Pricing</a>
                </li>
                <li>
                  <a className="text-sm leading-6 text-white hover:text-slate-300" href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2">
            <div className="xl:justify-self-end">
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a className="text-sm leading-6 text-white hover:text-slate-300" href="/blog">Blog</a>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0 xl:justify-self-end">
              <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a className="text-sm leading-6 text-white hover:text-slate-300" href="/privacy">Privacy</a>
                </li>
                <li>
                  <a className="text-sm leading-6 text-white hover:text-slate-300" href="/terms">Terms</a>
                </li>
                <li>
                  <a className="text-sm leading-6 text-white hover:text-slate-300" href="/refund">Refund</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t border-white/10 pt-8 lg:flex lg:justify-between ">
        <div>
          <h3 className="text-sm font-semibold leading-6 text-white">Love our service? Don't miss what's next!</h3>
          <p className="mt-2 text-sm leading-6 text-white">Sign up for updates on new features as we continue to create more AI agents</p>
        </div>
        <form className="mt-6 max-w-md lg:mt-0">
          <div className="flex gap-x-3">
            <div className=" flex-grow">
              <div className="relative mt-1 h-">
                <input 
                  id="email"
                  type="text"
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="focus:border-sky-500 focus:ring focus:ring-sky-200 false pr-8 false block h-[30px] w-full rounded-md border border-slate-200 shadow-sm sm:text-sm"
                  name="email"
                />
              </div>
            </div>
            <button type="submit"               className="  w-[180px] flex items-center justify-center  md:flex text-white px-4 py-2 rounded-md 
             bg-[rgba(39,60,110,0.1)] hover:bg-[rgba(39,60,110,0.39)] border-[0.5px] border-[rgb(39,60,110)]  "
              >
                Subscribe
              </button>
          </div>
          <p className="ml-[1px] mt-2 text-sm leading-6 text-white">Only occasional emails with important product updates will be sent.</p>
        </form>
      </div>
      <div className="mt-8 border-t border-white/10 pt-8">
        <p className="text-xs leading-5 text-white">© OnCode LLC. All rights reserved.</p>
      </div>
    </div>
  );
}



