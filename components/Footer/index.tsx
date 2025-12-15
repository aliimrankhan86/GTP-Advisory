import Link from "next/link";
import Button from "../Button";
import Icon from "../Icon";
import Logo from "../Logo";
import { quick_links, socials } from "@/mocks/footer";

const Footer = () => {
  return (
    <>
      <footer className="overflow-hidden bg-neutral-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-x-32 gap-y-20 px-6 lg:px-8 lg:grid-cols-2">
          <div className="flex flex-col gap-12 lg:gap-20">
            <div>
              <Logo />
              <div className="mt-4 font-figtree text-lg text-neutral-400">
                Your Partner in Building an AI-Driven Future
              </div>
            </div>
          </div>

          <div>
            <div className="font-onest font-medium text-xl text-white">
              Contact Us
            </div>

            <div className="mt-8 flex flex-col gap-6">
              <div className="flex gap-4">
                <Icon name="location" className="fill-lime-300" />
                <div>
                  <div className="font-figtree font-medium text-base text-white">
                    Address
                  </div>
                  <div className="mt-2 font-figtree text-sm text-neutral-400">
                    GTP Advisory
                    <br />
                    PO Box 2253, Allen, Texas 75013
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Icon name="phone" className="fill-lime-300" />
                <div>
                  <div className="font-figtree font-medium text-base text-white">
                    Phone Number
                  </div>
                  <div className="mt-2 font-figtree text-sm text-neutral-400">
                    +1 (469) 555-0123
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Icon name="email" className="fill-lime-300" />
                <div>
                  <div className="font-figtree font-medium text-base text-white">
                    Email
                  </div>
                  <div className="mt-2 font-figtree text-sm text-neutral-400">
                    info@gtpadvisory.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="overflow-hidden bg-neutral-900 py-8 border-t border-neutral-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 items-center justify-between lg:flex-row">
            <div className="font-figtree text-base text-white">
              © {new Date().getFullYear()} GTP Advisory — All rights reserved
            </div>

            <div className="flex items-center gap-12">
              <div className="font-figtree text-base text-white">
                Terms & Conditions
              </div>
              <div className="font-figtree text-base text-white">
                Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
