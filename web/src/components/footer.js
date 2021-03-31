import { Link } from "gatsby";
import React from "react";

const Footer = ({ siteTitle }) => (
  <footer className="bg-white">
    <div className="container mx-auto  px-8">
      <div className="w-full flex flex-col md:flex-row py-6">
        <div className="flex-1 mb-6">
          {/* <a
            className="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
           {siteTitle}
          </a> */}
        </div>

        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Quick Links</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="https://awesomepolygon.com/" target="_blank">
                <span className="hover:underline text-gray-800 hover:text-orange-500">
                  DApps
                </span>
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://matic.network/usecases/" target="_blank"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Use Cases
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://matic.network/counter-stake" target="_blank"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Counter Stake
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Social</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://twitter.com/0xPolygon" target="_blank"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Twitter
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://github.com/maticnetwork" target="_blank"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Products</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://wallet.matic.network/" target="_blank"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Wallet
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://matic.network/dagger/" target="_blank"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Dagger
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://matic.network/dagger/zapier/" target="_blank"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Zaiper
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container mx-auto  px-8 text-gray-800" style={{textAlign:"center"}}>
      maintained by community
    </div>
  </footer>
);

export default Footer;
