import { Envelope } from "@/icons";

export const Footer = () => (
  <footer className="flex items-center justify-center w-full h-24 border-t">
    <div className="flex items-center justify-center flex-col">
      <span>
        <a
          href="mailto:contact@stanleyjovel.com"
          className="text-sm text-gray-500 hover:text-gray-600"
        >
          <Envelope width={15} height={15} className="inline-block mr-2" />
          contact@stanleyjovel.com
        </a>
      </span>
    </div>
  </footer>
);
