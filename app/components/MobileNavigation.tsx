"use client";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { Fragment, useState } from "react";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

interface MobileNavigationProps {
  links: {
    name: string;
    href: string;
  }[];
}

const MobileNavigation = (props: MobileNavigationProps) => {
  const [isMenuDialogOpen, setIsMenuDialogOpen] = useState(false);

  const handleMenuDialogAction = () => {
    setIsMenuDialogOpen((prevValue) => !prevValue);
  };

  return (
    <>
      <button
        className="rounded-ful p-2 focus:outline-none"
        onClick={handleMenuDialogAction}
      >
        <RxHamburgerMenu size={20} className="text-gray-500" />
      </button>
      <Transition.Root show={isMenuDialogOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={setIsMenuDialogOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-mds">
                    <div className="flex h-full flex-col overflow-y-scroll bg-gray-100 shadow-xl">
                      <div className="w-100 flex justify-end p-5">
                        <button
                          className="rounded-ful p-2 focus:outline-none"
                          onClick={handleMenuDialogAction}
                        >
                          <Transition.Child
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <MdClose size={20} className="text-slate-700" />
                          </Transition.Child>
                        </button>
                      </div>
                      <div className="relative flex-1 px-4 sm:px-6 flex justify-center items-center">
                        <div className="flex flex-col space-y-6">
                          {props.links.map((link) => {
                            const isSelected =
                              typeof window !== "undefined" &&
                              (window.location.hash === link.href ||
                                (window.location.hash == "" &&
                                  link.href == "/"));

                            return (
                              <Link
                                key={link.href}
                                href={link.href}
                                className={clsx("text-center ", {
                                  "text-blue-500": isSelected,
                                  "text-gray-500": !isSelected,
                                })}
                                onClick={handleMenuDialogAction}
                              >
                                {link.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default MobileNavigation;
