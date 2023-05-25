import Link from "next/link";
import React from "react";

function FooterLinks() {
  const year = new Date().getFullYear();

  return (
    <div className="flex justify-between space-x-2">
      <Link href="/terms">
        <p className=" font-normal" style={{ fontSize: 12 }}>
          Terms of Service
        </p>
      </Link>
      <Link href="/help">
        <p className="text-xs font-normal" style={{ fontSize: 12 }}>
          Help Center
        </p>
      </Link>
      <Link href="/privacy">
        <p className="text-xs font-normal" style={{ fontSize: 12 }}>
          Privacy Policy
        </p>
      </Link>
      <p className="text-xs font-normal" style={{ fontSize: 12 }}>
        © Cloudpay {year} All Rights Reserved
      </p>
    </div>
  );
}

export default FooterLinks;
